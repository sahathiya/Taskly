import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodobyId, fetchTodos } from "../features/todo/todoActions";
import { Clock, MoreVertical } from "lucide-react";
import { setisEdit, setshowAddModal, setTodos } from "../features/todo/todoSlice";
import axiosInstance from "../utils/axiosInstance";

function TodoLists() {
  const [dropdown, setDropdown] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  const handleChange=async(todoId)=>{
    const response=await axiosInstance.patch(`/api/todo/complete/${todoId}`)
    console.log("response",response);
    
 if(response.status===200){
dispatch(setTodos(todoId))
dispatch(fetchTodos())
 }


  }


  const handleRemove=async(todoId)=>{
    console.log("remove todoId",todoId);

    const response=await axiosInstance.delete(`/api/todo/remove/${todoId}`)

    if(response.status===200){
        dispatch(fetchTodos())
    }
    

  }

  const handleEdit=async(todoId)=>{
    console.log("edit todoId",todoId);
    setDropdown(null)
 dispatch(setisEdit(true))
     await  dispatch(fetchTodobyId(todoId))
    
dispatch(setshowAddModal(true))
  }
  return (
    <div className="max-w-2xl mx-auto  space-y-4">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="  bg-white rounded-xl shadow-sm p-4 flex items-center justify-between border-l-8"
          style={{
            borderColor:
              todo.priority === "high"
                ? "#342773"
                : todo.priority === "medium"
                ? "#f5aa42"
                : "#cf1d35",
          }} 
        >
          <div className="flex items-start gap-4">
            <input type="checkbox" className="mt-1" checked={todo.status==='Completed'} onChange={() => handleChange(todo.id)} />
            <div className="space-y-1">
              <div className="text-base font-medium text-gray-800 flex items-center gap-2">
                {todo.title}
                {todo.category && (
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                    #{todo.category}
                  </span>
                )}
              </div>
            </div>
          </div>
         
          <div className="flex items-center gap-3">
            
           
           
            <div className="flex items-center text-gray-500 text-sm space-x-2">
  <div className={`${todo.status==='Pending'? 'bg-[#f5aa42]':'bg-[#218034]' } rounded-full w-2 h-2`} /> {/* dot */}
  <Clock className="w-4 h-4" />
  <span>{todo.dueDate}</span>
</div>

           

            <div className="relative">
  <button onClick={() => setDropdown(dropdown === index ? null : index)}>
    <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
  </button>

  {dropdown === index && (
    <div
      id="dropdownNavbar"
      className="absolute top-full right-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 border border-primary"
    >
      <ul className="py-2 text-sm text-gray-700">
        <li>
          <button
           onClick={()=>handleEdit(todo.id)}
           className="block px-4 py-2 hover:bg-gray-100">
            Edit
          </button>
        </li>
        <li>
          <button 
           onClick={()=>handleRemove(todo.id)}
           className="block px-4 py-2 hover:bg-gray-100">
            Delete
          </button>
        </li>
      </ul>
    </div>
  )}
</div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoLists;

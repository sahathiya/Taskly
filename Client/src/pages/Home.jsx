




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import AddTaskModal from '../components/AddTaskModal';
import { auth } from '../firebase/config';
import Sidebar from '../components/Sidebar';
import TodoLists from '../components/TodoLists';
import { resetTodo, setisEdit, setshowAddModal, setTodos } from '../features/todo/todoSlice';

function Home() {
  const activeUser = useSelector((state) => state.user.activeUser);
  const isEdit=useSelector((state)=>state.todo.isEdit)
  const todo=useSelector((state)=>state.todo.todo)
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const showAddModal=useSelector((state)=>state.todo.showAddModal)


const handleAdd=()=>{
 dispatch(resetTodo())
  
   dispatch(setshowAddModal(true))

}

const handleClose=()=>{
  dispatch(setshowAddModal(false))
 dispatch(resetTodo())

}
 
  return (
    <div className="flex min-h-screen font-poppins">
      {/* Sidebar on the left */}
     <div className='mt-10'>
       <Sidebar />
     </div>

      {/* Main content on the right */}
      <div className="flex-1 p-6 mt-20 relative">


       <div className="mt-8">
  <h1 className="text-xl font-semibold">
    Good Morning, {auth?.currentUser?.displayName || activeUser?.name}!
  </h1>
  <p className="text-sm text-gray-600">
    Today {new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      year: 'numeric',
    })}
  </p>
</div>

<div className='mt-10'>
  <TodoLists/>
</div>



        {/* FAB Add Button */}
        <div
          onClick={handleAdd}
          className="fixed bottom-6 right-6 bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg cursor-pointer"
        >
          <IoAdd className="text-white text-2xl" />
        </div>

        {/* Modal */}
        {showAddModal &&(
          <AddTaskModal isOpen={showAddModal} onClose={handleClose}  isEdit={isEdit} todo={todo}/>
        )}


      </div>
    </div>
  );
}

export default Home;

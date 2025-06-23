




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import AddTaskModal from '../components/AddTaskModal';
import { auth } from '../firebase/config';
import Sidebar from '../components/Sidebar';
import TodoLists from '../components/TodoLists';
import { resetTodo, setisEdit, setshowAddModal, setTodos } from '../features/todo/todoSlice';
import { FaSort } from "react-icons/fa";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Navbar from '../components/Navbar';
function Home() {
  const activeUser = useSelector((state) => state.user.activeUser);
  const isEdit=useSelector((state)=>state.todo.isEdit)
  const todo=useSelector((state)=>state.todo.todo)
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const showAddModal=useSelector((state)=>state.todo.showAddModal)
   const[show,setShow]=useState(false)
    const [selectedDate, setSelectedDate] = useState(dayjs());

const handleAdd=()=>{
 dispatch(resetTodo())
  
   dispatch(setshowAddModal(true))

}

const handleClose=()=>{
  dispatch(setshowAddModal(false))
 dispatch(resetTodo())

}

const handleSort=()=>{
   setShow(prev => !prev);



}
 
  return (
    <div className="flex min-h-screen font-poppins">
      <Navbar/>
      {/* Sidebar on the left */}
     <div className='mt-10'>
       <Sidebar />
     </div>

      {/* Main content on the right */}
      <div className="flex-1 p-6 mt-20 relative">


    
     <div className="flex justify-between items-start mt-8">
  {/* Left Greeting Section */}
  <div>
    <h1 className="text-xl font-semibold">
      Good Morning, {auth?.currentUser?.displayName || activeUser?.name}!
    </h1>
    <p className="text-sm text-gray-600">
      Today{' '}
      {new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}
    </p>
  </div>

  {/* Right Button + Icon */}
 <div className="relative inline-block">
  <div className="flex items-center gap-2 px-4 py-1 border rounded-md text-sm font-medium hover:bg-gray-100">
    <button onClick={handleSort}>Today</button>
    <FaSort className="text-lg text-gray-700 cursor-pointer hover:text-black" />
  </div>

  {show && (
    <div
      className="absolute top-full right-0 mt-2 z-50 bg-white rounded-md shadow-lg"
      
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
         
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </LocalizationProvider>
    </div>
  )}
</div>

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

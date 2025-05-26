import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import axiosInstance from '../utils/axiosInstance';
import { setUserLogout } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import { LiaSignOutAltSolid } from "react-icons/lia";
function Navbar() {
    const navigate=useNavigate()
    const activeUser=useSelector((state)=>state.user.activeUser)
   const dispatch=useDispatch()

      // const handleLogout=async()=>{
      //     await signOut(auth)
      //     navigate("/")
    
      //   }


      const handleLogout = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post("/api/user/logout");
    console.log("resposne of user logout", response);
    if (response.status === 200) {
      dispatch(setUserLogout());
      toast.success(response.data.message);
      navigate("/");
    }
  };
  return (
     <nav className="fixed w-full z-20 top-0 start-0  bg-primary border-gray-200 font-poppins">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
       
          <div className="w-1/3" onClick={() => navigate("/")}>
             {/* <img src={cart} className="w-8 h-8 object-contain" alt="Logo"/> */}
          </div>
      


        <div className="w-full md:w-1/3 flex justify-end items-center gap-6 text-white text-lg">
       

         
           {activeUser!==null?(
             <button
            onClick={handleLogout}
              
              className="hover:text-secondary transition text-sm font-semibold"
            >
             <LiaSignOutAltSolid className='text-xl'/>
            </button>
            
           ):(
             <button
            onClick={()=>navigate("/signin")}
              
              className="hover:text-secondary transition text-sm font-semibold"
            >
              Sign In
            </button>
           )}
          

       
        </div>
        

     
      </div>
    </nav>
  )
}

export default Navbar

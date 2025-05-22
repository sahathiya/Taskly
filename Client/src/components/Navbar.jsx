import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
function Navbar() {
    const navigate=useNavigate()
    const activeUser=useSelector((state)=>state.user.activeUser)
   

      const handleLogout=async()=>{
          await signOut(auth)
          navigate("/")
    
        }
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
              Sign out
            </button>
            
           ):(
             <button
            onClick={()=>navigate("/dashboard")}
              
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

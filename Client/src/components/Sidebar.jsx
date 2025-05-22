// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Menu
// } from "lucide-react";
// import { CiLogout } from "react-icons/ci";
// import { IoAdd } from 'react-icons/io5';
// function Sidebar() {
//     const [isOpen, setIsOpen] = useState(true);
// const activeUser=useSelector((state)=>state.user.user)
// const dispatch=useDispatch()
// const navigate=useNavigate()
// const navItems = [
//   { label: "Home", icon: Home ,link:'/dashboard'},
// ];
// // const handleAdminLogout=async()=>{
// //   const response=await axiosInstance.post('/api/admin/logout')
// //   console.log('resposne of admin logout',response);
  
// //   dispatch(setlogoutUser())
// //   toast.success(response.data.message)
// //   navigate('/')

// // }
//   return (

// <div className="flex font-nunito mt-15 ml-10 font-poppins">
//   {/* Sidebar with border and rounded corners */}
//   <div
//     className={`bg-white h-[90vh] flex flex-col justify-between transition-all duration-300 border-2 border-primary rounded-md overflow-hidden shadow-md ${
//       isOpen ? "w-52" : "w-16"
//     }`}
//   >
//     <div>
//       <div className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-2">
//           {isOpen && <span className="text-lg font-semibold text-primary">Taskly</span>}
//         </div>
//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
//           <Menu className="w-5 h-5 text-gray-600" />
//         </button>
//       </div>

//       {/* Navigation Items */}
//       <nav className="mt-4 flex flex-col gap-4">
//         {navItems.map(({ label, icon: Icon, link }) => (
//           <div
//             key={label}
//             onClick={() => navigate(`${link}`)}
//             className="relative group flex items-center px-4 py-2 hover:text-green-900 rounded-md cursor-pointer"
//           >
//             <Icon className="w-5 h-5 text-gray-700" />
//             {isOpen && <span className="ml-3 text-sm">{label}</span>}
//             {!isOpen && (
//               <span className="absolute left-full ml-2 whitespace-nowrap rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
//                 {label}
//               </span>
//             )}
//           </div>
//         ))}
//       </nav>

   
//     </div>
// <button className="w-full bg-white border border-primary font-semibold text-primary py-3 rounded-full transition flex items-center justify-center gap-2">
//   <IoAdd className="text-lg" />
//   <span>Create new list</span>
// </button>

//     {/* Bottom Section */}
//     <div className="p-4">
//       <div className="flex items-center gap-2">
//         <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full text-sm">
//           <CiLogout className="text-xl font-semibold" />
//         </div>
//         {isOpen && (
//           <div>
//             <p className="text-sm font-medium">{activeUser?.name}</p>
//             <p className="text-xs text-gray-500">{activeUser?.email}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default Sidebar



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Home, Menu } from "lucide-react";
import { CiLogout } from "react-icons/ci";
import { IoAdd } from 'react-icons/io5';
import CategoryModal from './CategoryModal';
// import { setlogoutUser } from 'your-slice';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const[categoryModal,setCategoryModal]=useState(false)
  const activeUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", icon: Home, link: '/dashboard' },
    // Add more items as needed
  ];

  return (
    <div className="font-nunito ml-20 mt-6 lg:ml-10 lg:mt-10">
      <div className={`bg-white h-[90vh]  flex flex-col justify-between border border-primary rounded-md shadow-md overflow-hidden transition-all duration-300 ${isOpen ? "w-60" : "w-16"} relative`}>
        
        {/* Top Section */}
        <div>
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between p-4">
            {isOpen && (
              <span className="text-xl font-semibold text-primary">Taskly</span>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 px-2">
            {navItems.map(({ label, icon: Icon, link }) => (
              <div
                key={label}
                onClick={() => navigate(link)}
                className="group flex items-center p-2 rounded-md hover:bg-primary hover:text-white cursor-pointer transition"
              >
                <Icon className="w-5 h-5 text-gray-700 group-hover:text-white" />
                {isOpen && <span className="ml-3 text-sm">{label}</span>}
                {!isOpen && (
                  <span className="absolute left-full ml-2 whitespace-nowrap rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                    {label}
                  </span>
                )}
              </div>
            ))}
          </nav>

        
        </div>

        {/* Bottom Section (User Info & Logout) */}
        {/* <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
              <CiLogout className="text-xl" />
            </div>
            {isOpen && (
              <div className="truncate">
                <p className="text-sm font-medium truncate">{activeUser?.name}</p>
                <p className="text-xs text-gray-500 truncate">{activeUser?.email}</p>
              </div>
            )}
          </div>
        </div> */}

          {/* Create New List Button */}
          <div className="p-4">
            <button 
            onClick={()=>setCategoryModal(true)}
            className="w-full bg-white border border-primary font-semibold text-primary py-2 rounded-full transition flex items-center justify-center gap-2 hover:bg-primary hover:text-white">
              <IoAdd className="text-lg" />
              {isOpen && <span>Create new list</span>}
            </button>
          </div>

          {categoryModal&&(
            <CategoryModal onClose={()=>setCategoryModal(false)}/>
          )}
      </div>
    </div>
  );
}

export default Sidebar;

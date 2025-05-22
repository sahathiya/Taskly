


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoAdd } from "react-icons/io5";
// import { useSelector } from 'react-redux';
// import AddTaskModal from '../components/AddTaskModal';
// import { auth } from '../firebase/config';

// import Sidebar from '../components/Sidebar';

// function Home() {


// const activeUser = useSelector((state) => state.user.activeUser);
//   const navigate = useNavigate();
  
//   const [showAddModal, setShowAddModal] = useState(false);
 

//   return (
//     <div className="font-poppins ml-0 md:ml-[20%] p-4 relative mt-20">
//        <div className="mt-8">
//         <h1 className="text-xl font-semibold">
//           Welcome Back {auth?.currentUser?.displayName || activeUser?.name}!
//         </h1>
//         <p className="text-sm text-gray-600">
//           {auth.currentUser?.email || activeUser?.email}
//         </p>
//       </div>
//      <Sidebar/>
     

//       {/* FAB Add Button */}
//       <div
//         onClick={() => setShowAddModal(true)}
//         className="fixed bottom-6 right-6 bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg cursor-pointer"
//       >
//         <IoAdd className="text-white text-2xl" />
//       </div>

//       {/* Modal */}
//       {showAddModal && (
//         <AddTaskModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
//       )}
//     </div>
//   );
// }

// export default Home;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAdd } from "react-icons/io5";
import { useSelector } from 'react-redux';
import AddTaskModal from '../components/AddTaskModal';
import { auth } from '../firebase/config';
import Sidebar from '../components/Sidebar';

function Home() {
  const activeUser = useSelector((state) => state.user.activeUser);
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  

  return (
    <div className="flex min-h-screen font-poppins">
      {/* Sidebar on the left */}
      <Sidebar />

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

        {/* FAB Add Button */}
        <div
          onClick={() => setShowAddModal(true)}
          className="fixed bottom-6 right-6 bg-primary rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg cursor-pointer"
        >
          <IoAdd className="text-white text-2xl" />
        </div>

        {/* Modal */}
        {showAddModal && (
          <AddTaskModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
        )}


      </div>
    </div>
  );
}

export default Home;

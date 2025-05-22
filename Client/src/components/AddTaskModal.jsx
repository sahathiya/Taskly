// import React from 'react'
// import clsx from "clsx";
// import { X } from "lucide-react";
// import { ErrorMessage, Field, Form, Formik } from "formik";

// import { MdOutlineDescription } from "react-icons/md";
// import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// function AddTaskModal({isOpen,onClose}) {
//   const priority=["High","Medium","Low"]
//   return (
//    <>
//       {isOpen && (
//         <div className="fixed inset-0  font-poppins  backdrop-blur-md " onClick={onClose} />
//       )}

//       <div
//         className={clsx(
//           "font-poppins    fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
//           {
//             "translate-x-0": isOpen,
//             "translate-x-full": !isOpen,
//           }
//         )}
//       >
//         <div className="flex justify-between items-center mb-6  p-4">
         
            
//             <h2 className="text-xl text-primary font-bold">Add task</h2>
         
//           <button onClick={onClose}>
//             <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
//           </button>
//         </div>
//         <div className="p-6 overflow-y-auto h-full">
         
// <Formik
//                 initialValues={{
//                   title: "",
//                   description: "",
//                   dueDate: "",
//                   priority:""



//                 }}
//                 // validationSchema={validationSchema}
//                 // onSubmit={handleSubmit}
//               >
//                 {({ isSubmitting }) => (
//                   <Form className="w-full max-w-sm">
                    
//                     <div className="mb-4">
//                       <div className="flex items-center bg-gray-100 rounded px-4 py-3">
//                         <span className="mr-3 text-gray-400">
//                           <MdOutlineDriveFileRenameOutline />
//                         </span>
//                         <Field
//                           type="title"
//                           placeholder="title"
//                           name="title"
//                           className="bg-transparent outline-none w-full"
//                         />
                     
//                       </div>
//                          <ErrorMessage
//                           name="title"
//                           component="div"
//                           className="text-red-500 text-sm mt-1"
//                         />
//                     </div>
//                     <div className="mb-6">
//                       <div className="flex items-center bg-gray-100 rounded px-4 py-3">
//                         <span className="mr-3 text-gray-400">
//                           <MdOutlineDescription />
//                         </span>
//                         <Field
//                           type="description"
//                           name="description"
//                           placeholder="description"
//                           className="bg-transparent outline-none w-full"
//                         />
                       
//                       </div>
//                        <ErrorMessage
//                           name="description"
//                           component="div"
//                           className="text-red-500 text-sm mt-1"
//                         />
//                     </div>
//  <div>
  
//  </div>
//                  {/* <button className='bg-primary text-white font-semibold py-2 px-2 rounded-md'>Today</button> */}
                     
//                    <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker']}>
//         <DatePicker />
//       </DemoContainer>
//     </LocalizationProvider>
//      <div className='flex justify-evenly '>
// {priority.map((item,index)=>(

//   <div
//                     key={index}
                    
//                     className="cursor-pointer px-2 py-1 text-sm rounded hover:bg-blue-100"
//                   >
//                     <label className="inline-flex items-center gap-2">
//                       <input
//                         type="checkbox"
                        
//                       />
//                       {item}<span> priority</span>
                      
//                     </label>
//                   </div>
 
// ))}
// </div>
   
                 
//                  <button 
//                  type="submit"
//                  disabled={isSubmitting}
//                 className=" w-full  bg-white border border-primary text-primary py-3 rounded-full hover:bg-primary hover:text-white  transition">
//               Add
//             </button>
   
    
//                   </Form>
//                 )}
//               </Formik>

        
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddTaskModal
import React from 'react';
import clsx from "clsx";
import { X } from "lucide-react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddTaskModal({ isOpen, onClose }) {
  const priority = ["High", "Medium", "Low"];

  return (
    <>
      {isOpen && (
        <div className="fixed font-poppins inset-0 backdrop-blur-md z-40" onClick={onClose} />
      )}

      <div
        className={clsx(
          "fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out font-poppins",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-primary font-bold">Add Task</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <Formik
          initialValues={{
            title: "",
            description: "",
            dueDate: "",
            priority: ""
          }}
          // validationSchema={validationSchema}
          // onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col justify-between h-[calc(100%-64px)] p-4 space-y-4 overflow-y-auto">
              <div>
                {/* Title */}
                <div className="mb-4">
                  <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                    <span className="mr-3 text-gray-400">
                      <MdOutlineDriveFileRenameOutline />
                    </span>
                    <Field
                      type="text"
                      placeholder="Title"
                      name="title"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                    <span className="mr-3 text-gray-400">
                      <MdOutlineDescription />
                    </span>
                    <Field
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Date Picker */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Due Date" />
                  </DemoContainer>
                </LocalizationProvider>

                {/* Priority */}
                <div className="flex justify-between mt-8">
                  {priority.map((item, index) => (
                    <div key={index} className="cursor-pointer px-2 py-1 text-sm rounded hover:bg-blue-100">
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" />
                        {item} <span className="text-gray-500">priority</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Button fixed to bottom */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white border border-primary font-semibold text-primary py-3 rounded-md hover:bg-primary hover:text-white transition"
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AddTaskModal;

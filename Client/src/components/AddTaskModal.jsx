// import React, { useState } from "react";
// import clsx from "clsx";
// import { X } from "lucide-react";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import { MdOutlineDescription } from "react-icons/md";
// import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { useDispatch, useSelector } from "react-redux";
// import axiosInstance from "../utils/axiosInstance";
// import { fetchTodos } from "../features/todo/todoActions";
// import { setisEdit, setTodos } from "../features/todo/todoSlice";

// function AddTaskModal({ isOpen, onClose ,isEdit,todo}) {
//   const dispatch = useDispatch();
//   const priority = ["high", "medium", "low"];
//   const categories = useSelector((state) => state.category.categories);
 

 
//   const validationSchema = Yup.object({
//     title: Yup.string().required("Title is required"),
//     description: Yup.string().required("Password is required"),
//     category: Yup.string().required("Category is required"),
//     dueDate: Yup.date().required("Due date is required").nullable(),
//     priority: Yup.string().required("Priority is required"),
//   });
//   const handleSubmit = async (values) => {
//     console.log("values", values);
// if(isEdit){

//    const response = await axiosInstance.patch(`/api/todo/edit/${todo.id}`, values);
//     console.log("response of edit todo",response);
    
//     if (response.status === 200) {
//       dispatch(setTodos(null))
//       dispatch(setisEdit(false))
//       dispatch(fetchTodos());
//       onClose();
//     }


// }else{
//    const response = await axiosInstance.post(`/api/todo/add`, values);
//     console.log("response of add todo",response);
    
//     if (response.status === 200) {
//       dispatch(fetchTodos());
//       onClose();
//     }

// }
   
//   };

//   console.log("isEdit",isEdit);
  
//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed font-poppins inset-0 backdrop-blur-md z-40"
//           onClick={onClose}
//         />
//       )}

//       <div
//         className={clsx(
//           "fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out font-poppins",
//           {
//             "translate-x-0": isOpen,
//             "translate-x-full": !isOpen,
//           }
//         )}
//       >
//         <div className="flex justify-between items-center p-4">
//           <h2 className="text-xl text-primary font-bold">Add Task</h2>
//           <button onClick={onClose}>
//             <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
//           </button>
//         </div>

//         <Formik
//         enableReinitialize
//           initialValues={{
//             title: todo.title||"",
//             description:todo.description|| "",
//             dueDate:todo.dueDate|| null,
//             category:todo.category|| "",
//             priority:todo.priority|| "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="flex flex-col justify-between h-[calc(100%-64px)] p-4 space-y-4 overflow-y-auto">
//               <div>
//                 {/* Title */}
//                 <div className="mb-4">
//                   <div className="flex items-center bg-gray-100 rounded px-4 py-3">
//                     <span className="mr-3 text-gray-400">
//                       <MdOutlineDriveFileRenameOutline />
//                     </span>
//                     <Field
//                       type="text"
//                       placeholder="Title"
//                       name="title"
//                       className="bg-transparent outline-none w-full"
//                     />
//                   </div>
//                   <ErrorMessage
//                     name="title"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4">
//                   <div className="flex items-center bg-gray-100 rounded px-4 py-3">
//                     <span className="mr-3 text-gray-400">
//                       <MdOutlineDescription />
//                     </span>
//                     <Field
//                       type="text"
//                       name="description"
//                       placeholder="task description"
//                       className="bg-transparent outline-none w-full"
//                     />
//                   </div>
//                   <ErrorMessage
//                     name="description"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

               
//                 <div className="mb-4">
//   <Field
//     as="select"
//     name="category"
//     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//   >
//     <option value="">Select category</option>
//     {categories.map((category, index) => (
//       <option key={index} value={category.name}>
//         {category.name}
//       </option>
//     ))}
//   </Field>
//   <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
// </div>


//                 {/* Date Picker */}
//                 {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DemoContainer components={["DatePicker"]}>
//                     <DatePicker label="Due Date" className="w-full" />
//                   </DemoContainer>
//                 </LocalizationProvider> */}

//                 <Field name="dueDate">
//   {({ field, form }) => (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Due Date"
//         value={field.value}
//         onChange={(date) => form.setFieldValue("dueDate", date)}
//         className="w-full"
//       />
//     </LocalizationProvider>
//   )}
// </Field>
// <ErrorMessage name="dueDate" component="div" className="text-red-500 text-sm mt-1" />

//                 <p className="text-gray-500 font-medium mb-2 mt-2">Priority</p>
// <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//   {priority.map((item, index) => (
//     <label
//       key={index}
//       className="flex items-center gap-2 p-2 bg-gray-100 rounded hover:bg-blue-100 cursor-pointer transition"
//     >
//       <Field type="radio" name="priority" value={item} className="accent-blue-500" />
//       <span className="text-sm text-gray-700">{item}</span>
//     </label>
//   ))}
// </div>
// <ErrorMessage name="priority" component="div" className="text-red-500 text-sm mt-1" />

//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-white border border-primary font-semibold text-primary py-3 rounded-md hover:bg-primary hover:text-white transition"
//                 >
//                   Add
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </>
//   );
// }

// export default AddTaskModal;



import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MdOutlineDescription, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


import { TimePicker } from '@mui/x-date-pickers/TimePicker';


import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { fetchTodos } from "../features/todo/todoActions";
import { setisEdit, setTodos } from "../features/todo/todoSlice";





function AddTaskModal({ isOpen, onClose, isEdit, todo }) {
  const dispatch = useDispatch();
  const priority = ["high", "medium", "low"];
  const categories = useSelector((state) => state.category.categories);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    dueDate: Yup.date().required("Due date is required").nullable(),
    time:Yup.string().required("Time is required").nullable(),
    priority: Yup.string().required("Priority is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("values",values);
    const formattedTime = dayjs(values.time).format("HH:mm:ss")
    
    try {
      let response;
      if (isEdit) {
        response = await axiosInstance.patch(`/api/todo/edit/${todo.id}`,values);
        if (response.status === 200) {
          dispatch(fetchTodos());
        }
      } else {
        response = await axiosInstance.post(`/api/todo/add`, 
          {
    ...values,
    time: formattedTime, 
  })
        if (response.status === 200) {
          dispatch(fetchTodos());
        }
      }
      onClose();
    } catch (error) {
      console.error("Error submitting task:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-40"
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          "fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold text-primary">{isEdit ? "Edit Task" : "Add Task"}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <Formik
        initialValues={{
            title:isEdit? todo.title : "",
            description:isEdit? todo.description : "",
            dueDate:isEdit&& todo.dueDate ? dayjs(todo.dueDate) : null,
            time:isEdit&& todo.time ? dayjs(todo.time) : null,
            category: isEdit?todo.category : "",
            priority:isEdit? todo.priority : "",

          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="flex flex-col justify-between h-[calc(100%-64px)] p-4 space-y-4 overflow-y-auto">
              <div>
                {/* Title */}
                <div className="mb-4">
                  <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                    <span className="mr-3 text-gray-400"><MdOutlineDriveFileRenameOutline /></span>
                    <Field
                      type="text"
                      name="title"
                      placeholder="Title"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                    <span className="mr-3 text-gray-400"><MdOutlineDescription /></span>
                    <Field
                      type="text"
                      name="description"
                      placeholder="Task description"
                      className="bg-transparent outline-none w-full"
                    />
                  </div>
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <Field
                    as="select"
                    name="category"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.name}>{category.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Due Date */}
                <div className="mb-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Due Date"
                      value={values.dueDate}
                      name="dueDate"
                      onChange={(date) => setFieldValue("dueDate", date)}
                      className="w-full"
                    />
                  </LocalizationProvider>
                  <ErrorMessage name="dueDate" component="div" className="text-red-500 text-sm mt-1" />
                </div>



<div className="mb-4">
<LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <TimePicker 
        name="time"
        label="Pick a time" 
         value={values.time}
         onChange={(time) => setFieldValue("time", time)}
                      className="w-full"
        />
      
    </LocalizationProvider>
     <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />

</div>
 




                {/* Priority */}
                <p className="text-gray-500 font-medium mb-2 mt-2">Priority</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {priority.map((item) => (
                    <label key={item} className="flex items-center gap-2 p-2 bg-gray-100 rounded hover:bg-blue-100 cursor-pointer">
                      <Field type="radio" name="priority" value={item} className="accent-blue-500" />
                      <span className="text-sm text-gray-700 capitalize">{item}</span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="priority" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white border border-primary font-semibold text-primary py-3 rounded-md hover:bg-primary hover:text-white transition"
                >
                  {isEdit ? "Update Task" : "Add Task"}
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

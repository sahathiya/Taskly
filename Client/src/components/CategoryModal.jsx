// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { fetchCategories } from '../features/category/categoryActions';
// import axiosInstance from '../utils/axiosInstance';
// import Picker from "emoji-picker-react";
// import { FaSmile } from "react-icons/fa";
// function CategoryModal({onClose}) {
//      const dispatch = useDispatch();
//   const [categoryName, setCategoryName] = useState("");
//   const[show,setShow]=useState(false)
// const [chosenEmoji, setChosenEmoji] = useState(null);


//     const onEmojiClick = (event, emojiObject) => {
//         setChosenEmoji(emojiObject);
//         console.log(emojiObject.target);
//     };
//   const handleAdd = async () => {
//     if (categoryName.trim()) {
//       const response = await axiosInstance.post(`/api/todo/category/add`, {
//         name: categoryName,
//       });
//       if (response.status === 200) {
//         setCategoryName("");
//         dispatch(fetchCategories());
//         onClose();
//       }
//     }
//   };

//   const handleDiscard = () => {
//     setCategoryName("");
//     onClose();
//   };
//   return (
//       <div className="font-poppins fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
//       <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fade-in">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
//         >
//           &times;
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
//           Add Category
//         </h2>
//   {/* <div>
           
//            {show&&(
//              <Picker onEmojiClick={onEmojiClick} />

//            )}
           
//         </div>
//       <div className=" flex space-x-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
//         <button onClick={()=>setShow(!show)}><FaSmile  className='text-primary'/></button>
//           <input
//           type="text"
//           value={categoryName}
//           onChange={(e) => setCategoryName(e.target.value)}
//           placeholder="Enter category name"
          
//         />
//       </div> */}

//       <div className="relative">
//   {show && (
//     <div
//       className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg p-2"
//       style={{ width: '280px', height: '350px', overflowY: 'auto' }}
//     >
//       <Picker
//         onEmojiClick={onEmojiClick}
//         pickerStyle={{ width: '100%', height: '100%' }}
//       />
//     </div>
//   )}

//   <div className="flex space-x-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
//     <button onClick={() => setShow(!show)}>
//       <FaSmile className="text-primary" />
//     </button>
//     <input
//       type="text"
//       value={categoryName}
//       onChange={(e) => setCategoryName(e.target.value)}
//       placeholder="Enter category name"
//       className="flex-1"
//     />
//   </div>
// </div>


//         <div className="flex space-x-4 mt-8">
//           <button
//             onClick={handleAdd}
//             className="w-1/2 bg-primary text-white py-2 rounded-lg hover:bg-secondary-dark transition"
//           >
//             ADD
//           </button>

//           <button
//             onClick={handleDiscard}
//             className="w-1/2 bg-gray-200 text-primary py-2 rounded-lg hover:bg-gray-300 transition"
//           >
//             DISCARD
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CategoryModal


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../features/category/categoryActions';
import axiosInstance from '../utils/axiosInstance';
import Picker from 'emoji-picker-react';
import { FaSmile } from 'react-icons/fa';

function CategoryModal({ onClose }) {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [showPicker, setShowPicker] = useState(false);
const [chosenEmoji, setChosenEmoji] = useState(null);
  // Append selected emoji to the input value
  const onEmojiClick = ( emojiObject) => {
    console.log("emojiObject",emojiObject);
    
    setChosenEmoji(emojiObject)
    setCategoryName((prev) => prev + emojiObject?.emoji);
  };

  const handleAdd = async () => {
    if (categoryName.trim()) {
      const response = await axiosInstance.post(`/api/todo/category/add`, {
        name: categoryName,
      });
      if (response.status === 200) {
        setCategoryName('');
        dispatch(fetchCategories());
        onClose();
      }
    }
  };

  const handleDiscard = () => {
    setCategoryName('');
    onClose();
  };
console.log("chosenEmoji",chosenEmoji);

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4 font-poppins">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl font-bold leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Add Category
        </h2>

        <div className="relative">
          {/* Emoji Picker Popup */}
          {showPicker && (
            <div
              className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg p-2"
              style={{ width: '280px', height: '350px', overflowY: 'auto', zIndex: 1000 }}
            >
              <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%', height: '100%' }} />
            </div>
            
          )}

          <div
            className="flex items-center space-x-3 w-full px-4 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-secondary transition"
            onClick={() => setShowPicker(false)} // clicking outside input closes picker
          >
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent input blur
                setShowPicker((prev) => !prev);
              }}
              className="text-primary text-xl hover:text-secondary transition"
              aria-label="Toggle emoji picker"
              type="button"
            >
              <FaSmile />
            </button>

            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="flex-1 outline-none text-gray-800 placeholder-gray-400"
              autoFocus
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleAdd}
            className="w-1/2 bg-primary text-white py-2 rounded-lg hover:bg-secondary-dark transition"
          >
            ADD
          </button>

          <button
            onClick={handleDiscard}
            className="w-1/2 bg-gray-200 text-primary py-2 rounded-lg hover:bg-gray-300 transition"
          >
            DISCARD
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;

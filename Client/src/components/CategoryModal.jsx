import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../features/category/categoryActions';
import axiosInstance from '../utils/axiosInstance';
import Picker from "emoji-picker-react";
function CategoryModal({onClose}) {
     const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.target);
    };
  const handleAdd = async () => {
    if (categoryName.trim()) {
      const response = await axiosInstance.post(`/api/todo/category/add`, {
        name: categoryName,
      });
      if (response.status === 200) {
        setCategoryName("");
        dispatch(fetchCategories());
        onClose();
      }
    }
  };

  const handleDiscard = () => {
    setCategoryName("");
    onClose();
  };
  return (
      <div className="font-poppins fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Add Category
        </h2>
  <div>
           
            {chosenEmoji ? (
                <span>
                    Your Emoji:
                    <img
                        style={{ width: "15px" }}
                        src={chosenEmoji.target.src}
                    />
                </span>
            ) : (
                <span>No Emoji</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        />

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
  )
}

export default CategoryModal




import React from "react";
import { useSelector } from "react-redux";

function TaskDetailsModal({ onClose }) {
  const todo = useSelector((state) => state.todo.todo);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 font-nunito">
      <div className="relative w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-primary">
          Task: {todo?.title}
        </h2>

        <div className="space-y-4 mt-4">
          <div>
            <label className="text-sm text-gray-500">Description</label>
            <p className="text-gray-800">{todo?.description}</p>
          </div>

          <div className="flex justify-between">
            <div>
              <label className="text-sm text-gray-500">Category</label>
              <p className="text-primary font-medium capitalize">{todo?.category}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Priority</label>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full ${
                  todo?.priority === "high"
                    ? "bg-primary-light text-[#342773]"
                    : todo?.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {todo?.priority}
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <label className="text-sm text-gray-500">Due Date</label>
              <p className="text-gray-700">{todo?.dueDate}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Time</label>
              <p className="text-gray-700">{todo?.time}</p>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500">Status</label>
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full ${
                todo?.status === "Completed"
                  ? "bg-green-600 text-gray-700"
                  : "bg-[#f5aa42] text-gray-700"
              }`}
            >
              {todo?.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;

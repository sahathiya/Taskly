// // import React, { useState } from 'react';
// // import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// // import dayjs from 'dayjs';
// // import 'dayjs/locale/en'; // optional

// // function DateStrip({ selectedDate, onSelect }) {
// //   const days = Array.from({ length: 30 }, (_, i) =>
// //     dayjs().add(i, 'day')
// //   );

// //   return (
// //     <div className="bg-primary text-white px-4 py-2 rounded-b-lg shadow">
// //       <div className="text-lg font-bold mb-2">To-do list</div>
// //       <div className="text-sm mb-2">{dayjs(selectedDate).format('MMMM')}</div>
      
// //       <ScrollMenu>
// //         {days.map((day) => {
// //           const isSelected = day.isSame(selectedDate, 'day');
// //           return (
// //             <div
// //               key={day.format('YYYY-MM-DD')}
// //               className={`cursor-pointer flex flex-col items-center justify-center mx-2 px-3 py-2 rounded-lg ${
// //                 isSelected ? 'bg-white text-primary' : 'bg-primary text-white'
// //               }`}
// //               onClick={() => onSelect(day)}
// //             >
// //               <div className="text-xs">{day.format('dd')}</div>
// //               <div className="font-bold text-sm">{day.format('D')}</div>
// //             </div>
// //           );
// //         })}
// //       </ScrollMenu>
// //     </div>
// //   );
// // }

// // export default DateStrip;


// import React from 'react';
// import dayjs from 'dayjs';

// function DateStrip({ selectedDate, onSelect }) {
//   const days = Array.from({ length: 15 }, (_, i) => dayjs().add(i, 'day'));

//   return (
//     <div className="bg-blue-600 text-white p-4 rounded-b-lg">
//       <div className="text-xl font-bold mb-2">To-do list</div>

//       {/* Horizontal scroll container */}
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {days.map((day) => {
//           const isSelected = day.isSame(selectedDate, 'day');
//           return (
//             <div
//               key={day.format('YYYY-MM-DD')}
//               onClick={() => onSelect(day)}
//               className={`min-w-[50px] px-2 py-1 rounded-md text-center cursor-pointer
//                 ${isSelected ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}
//             >
//               <div className="text-xs">{day.format('dd')}</div>
//               <div className="font-semibold text-lg">{day.format('D')}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default DateStrip;



import React from 'react';
import dayjs from 'dayjs';

function DateStrip({ selectedDate }) {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-b-lg shadow-md">
      <div className="text-xl font-bold">To-do list</div>
      <div className="mt-2 text-lg font-medium">
        {dayjs(selectedDate).format('dddd, D MMMM YYYY')}
        {/* Example: Tuesday, 21 May 2025 */}
      </div>
    </div>
  );
}

export default DateStrip;

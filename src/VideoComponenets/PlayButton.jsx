// import React from "react";

// const PlayButton = ({ children, onPlay, onPause }) => {
//   let Playing = false;
//   function handleClick(e) {
//     e.stopPropagation();

//     if (Playing) {
//       onPause();
//     } else {
//       onPlay();
//     }
//     Playing = !Playing;
//   }
//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         type="submit"
//         className="bg-gray-800 text-white rounded items-center w-[100px] m-2 "
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

// export default PlayButton;

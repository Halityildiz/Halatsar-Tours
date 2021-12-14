// import React from "react";
// // import { useState } from "react";
// import { data } from "./Data";

// const Delete = (id) => {
//   // const [readMore, setReadMore] = useState(false);
//   const newData = data.filter((tour) => tour.id !== id);
//   return (
//     <div className="single-tour">
//       {newData.map((tour, id) => {
//         console.log(newData);
//         return (
//           <article className="article" key={id}>
//             <img src={tour.image} alt={tour.name} />
//             <footer>
//               <div className="tour-info" key={tour.id}>
//                 <h4>{tour.name}</h4>
//                 <h4 className="tour-price">${tour.price}</h4>
//               </div>
//               <p>{data.info}</p>
//               {/* <p>
//                 {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
//                 <button onClick={() => setReadMore(!readMore)}>
//                   {readMore ? "show less" : "  read more"}
//                 </button>
//               </p> */}
//               <div>
//                 <button className="delete-btn" onClick={() => Delete(id)}>
//                   not interested
//                 </button>
//               </div>
//             </footer>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default Delete;

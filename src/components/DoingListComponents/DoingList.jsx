// import React, { useState } from "react";
// import DoingCard from "./DoingCard";

// function DoingList() {
//   const [doingCards, setDoingCards] = useState([]);
//   const [newCardTitle, setNewCardTitle] = useState("");

//   const handleAddCard = () => {
//     if (newCardTitle.trim() !== "") {
//       setDoingCards([...doingCards, { title: newCardTitle }]);
//       setNewCardTitle("");
//     }
//   };

//   return (
//     <div className="list">
//       <div className="list-title">
//         <h3>Doing</h3>
//       </div>
//       <div className="list-cards">
//         {doingCards.map((card, index) => (
//           <DoingCard key={index} card={card} />
//         ))}
//       </div>
//       <div className="list-add-card">
//         <input
//           type="text"
//           placeholder="Add a card..."
//           value={newCardTitle}
//           onChange={(e) => setNewCardTitle(e.target.value)}
//         />
//         <button onClick={handleAddCard}>Add Card</button>
//       </div>
//     </div>
//   );
// }

// export default DoingList;

// "use client";
// import React from "react";
// import { FaCar, FaUser, FaChevronDown, FaAngleDoubleRight  } from "react-icons/fa";
// import styles from "./Battle.module.css"; // module css import

// const Battle = () => {
//   return (
//     <div className={styles.battleContainer}>
//       <div className={styles.battleSections}>
        
//         {/* Left - Challenge */}
//         <div className={styles.battleSection}>
//           <div className={styles.sectionBody}>
//             <img
//               src="/hero/car1.png"
//               alt="challenge"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className={styles.sectionFooter}>
//             <FaCar className={styles.icon} />
//             <span className={styles.sectionTitle}>CHOOSE CHALLENGE</span>
//             <FaChevronDown className={styles.arrowIcon} />
//           </div>
//         </div>

//         {/* Middle - VS */}
//         <div className={styles.battleElements}>
//           <div className={styles.vsText}>VS</div>
//           <button className={styles.inviteBtn}>INVITE<FaAngleDoubleRight /></button>
//         </div>

//         {/* Right - Opponent */}
//         <div className={styles.battleSection}>
//           <div className={`${styles.sectionBody} relative`}>
//             <img
//               src="https://assets3.3dtuning.com/img/challengeNew/choose-opponent.jpg"
//               alt="opponent-bg"
//               className="w-full h-full object-cover"
//             />
//             <div className={styles.userCircle}>
//               <img
//                 src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop"
//                 alt="opponent"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </div>
//           <div className={styles.sectionFooter}>
//             <FaUser className={styles.icon} />
//             <span className={styles.sectionTitle}>RANDOM OPPONENT</span>
//             <FaChevronDown className={styles.arrowIcon} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Battle;









"use client";
import React, { useState } from "react";
import { FaCar, FaUser, FaChevronDown, FaAngleDoubleRight } from "react-icons/fa";
import OpponentPopup from "./OpponentPopup";
import styles from "./Battle.module.css";

const Battle = () => {
  const [showOpponentPopup, setShowOpponentPopup] = useState(false);
  const [selectedOpponent, setSelectedOpponent] = useState(null);

  const handleOpponentSelect = (opponent) => {
    setSelectedOpponent(opponent);
    setShowOpponentPopup(false);
    // Yahan aap selected opponent ke sath koi aur logic bhi add kar sakte hain
  };

  return (
    <div className={styles.battleContainer}>
      <div className={styles.battleSections}>
        
        {/* Left - Challenge */}
        <div className={styles.battleSection}>
          <div className={styles.sectionBody}>
            <img
              src="/hero/car1.png"
              alt="challenge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.sectionFooter}>
            <FaCar className={styles.icon} />
            <span className={styles.sectionTitle}>CHOOSE CHALLENGE</span>
            <FaChevronDown className={styles.arrowIcon} />
          </div>
        </div>

        {/* Middle - VS */}
        <div className={styles.battleElements}>
          <div className={styles.vsText}>VS</div>
          <button className={styles.inviteBtn}>INVITE<FaAngleDoubleRight /></button>
        </div>

        {/* Right - Opponent */}
        <div className={styles.battleSection}>
          <div className={`${styles.sectionBody} relative`}>
            <img
              src="https://assets3.3dtuning.com/img/challengeNew/choose-opponent.jpg"
              alt="opponent-bg"
              className="w-full h-full object-cover"
            />
            <div className={styles.userCircle}>
              <img
                src={selectedOpponent?.image || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop"}
                alt="opponent"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div 
            className={styles.sectionFooter} 
            onClick={() => setShowOpponentPopup(true)}
            style={{ cursor: 'pointer' }}
          >
            <FaUser className={styles.icon} />
            <span className={styles.sectionTitle}>
              {selectedOpponent ? selectedOpponent.name : "RANDOM OPPONENT"}
            </span>
            <FaChevronDown className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      {/* Opponent Popup */}
      <OpponentPopup
        isOpen={showOpponentPopup}
        onClose={() => setShowOpponentPopup(false)}
        onSelectOpponent={handleOpponentSelect}
      />
    </div>
  );
};

export default Battle;


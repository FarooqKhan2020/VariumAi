// "use client";
// import { FaGem, FaKey, FaStar } from "react-icons/fa";
// import styles from "./ChallengesHeader.module.css";

// export default function ChallengesHeader() {
//   return (
//     <header className={styles.challengesheader}>
//       {/* Diamond */}
//       <div className={styles.challengesitem}>
//         <FaGem className={`${styles.challengesicon} ${styles.challengesdiamond}`} />
//         <span className={styles.challengesvalue}>12</span>
//       </div>

//       <span className={styles.challengesdivider}>|</span>

//       {/* Key */}
//       <div className={styles.challengesitem}>
//         <FaKey className={`${styles.challengesicon} ${styles.challengeskey}`} />
//         <span className={styles.challengesvalue}>30</span>
//       </div>

//       <span className={styles.challengesdivider}>|</span>

//       {/* Star */}
//       <div className={styles.challengesitem}>
//         <FaStar className={`${styles.challengesicon} ${styles.challengesstar}`} />
//         <span className={styles.challengesvalue}>0</span>
//       </div>

//       {/* Level */}
//       <div className={styles.challengeslevelBox}>
//         <span className={styles.challengeslevelValue}>0</span>
//         <span className={styles.challengeslevelLabel}>LEVEL</span>
//       </div>
//     </header>
//   );
// }







"use client";
import { useState } from "react";
import { FaGem, FaKey, FaStar } from "react-icons/fa";
import styles from "./ChallengesHeader.module.css";
import YourRatingPopup from "./YourRatingPopup";
import DiamondPopup from "./DiamondPopup";
import KeyPopup from "./KeyPopup";
import LevelRewardsSidebar from "./LevelRewardsSidebar";

export default function ChallengesHeader() {
  const [showRating, setShowRating] = useState(false);
  const [showDiamond, setShowDiamond] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [showLevels, setShowLevels] = useState(false);

  return (
    <header className={styles.challengesheader}>
      {/* Diamond */}
      <div
        className={styles.challengesitem}
        onClick={() => setShowDiamond(true)}
        style={{ cursor: "pointer" }}
      >
        <FaGem className={`${styles.challengesicon} ${styles.challengesdiamond}`} />
        <span className={styles.challengesvalue}>12</span>
      </div>

      <span className={styles.challengesdivider}>|</span>

      {/* Key */}
      <div
        className={styles.challengesitem}
        onClick={() => setShowKey(true)}
        style={{ cursor: "pointer" }}
      >
        <FaKey className={`${styles.challengesicon} ${styles.challengeskey}`} />
        <span className={styles.challengesvalue}>30</span>
      </div>

      <span className={styles.challengesdivider}>|</span>

      {/* Star */}
      <div
        className={styles.challengesitem}
        onClick={() => setShowRating(true)}
        style={{ cursor: "pointer" }}
      >
        <FaStar className={`${styles.challengesicon} ${styles.challengesstar}`} />
        <span className={styles.challengesvalue}>0</span>
      </div>

      {/* Level */}
      <div
        className={styles.challengeslevelBox}
        onClick={() => setShowLevels(true)}
        style={{ cursor: "pointer" }}
      >
        <span className={styles.challengeslevelValue}>2</span>
        <span className={styles.challengeslevelLabel}>LEVEL</span>
      </div>

      {/* Popups */}
      {showRating && <YourRatingPopup onClose={() => setShowRating(false)} />}
      {showDiamond && <DiamondPopup onClose={() => setShowDiamond(false)} />}
      {showKey && <KeyPopup onClose={() => setShowKey(false)} />}
      {showLevels && <LevelRewardsSidebar onClose={() => setShowLevels(false)} />}
    </header>
  );
}

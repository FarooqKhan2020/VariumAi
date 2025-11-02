"use client";
import { FaGem } from "react-icons/fa";
import styles from "./YourRatingPopup.module.css"; // reuse same CSS

export default function DiamondPopup({ onClose }) {
  const handleNavigate = () => {
    // first close the popup
    onClose();

    // optional: delay navigation a bit for smooth close animation (200ms)
    setTimeout(() => {
      window.location.href = "/challenges/challenges";
    }, 200);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Header with Diamond Icon and Title */}
        <div className={styles.header}>
          <FaGem className={styles.diamondIcon} />
          <h2 className={styles.title}>DIAMOND</h2>
        </div>

        {/* Body Text */}
        <div className={styles.body}>
          <p>Diamonds are special rewards earned for completing Tuning Challenges.</p>
          <p>You can collect them throughout the season and use them to unlock exclusive rewards.</p>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button onClick={handleNavigate} className={styles.goButton}>
            GO TO CHALLENGES
          </button>
          <button className={styles.closeButton} onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

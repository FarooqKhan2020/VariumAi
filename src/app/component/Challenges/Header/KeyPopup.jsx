"use client";
import { FaKey } from "react-icons/fa";
import styles from "./YourRatingPopup.module.css"; // reuse same CSS

export default function KeyPopup({ onClose }) {
  const handleNavigate = () => {
    // Close popup first
    onClose();

    // Then navigate after small delay for smooth transition
    setTimeout(() => {
      window.location.href = "/challenges/votingchallenge";
    }, 200);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Header with Key Icon and Title */}
        <div className={styles.header}>
          <FaKey className={styles.keyIcon} />
          <h2 className={styles.title}>KEY</h2>
        </div>

        {/* Body Text */}
        <div className={styles.body}>
          <p>Keys are used to enter Tuning Challenges.</p>
          <p>
            To earn more Keys, vote on participants of Tuning Challenges in the
            Voting section.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button onClick={handleNavigate} className={styles.goButton}>
            VOTING
          </button>
          <button className={styles.closeButton} onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

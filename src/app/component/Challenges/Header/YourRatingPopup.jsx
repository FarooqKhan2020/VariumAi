"use client";
import { FaStar } from "react-icons/fa";
import styles from "./YourRatingPopup.module.css";
import { useRouter } from "next/navigation";

export default function YourRatingPopup({ onClose }) {
  const router = useRouter();

  const handleGoToChallenges = () => {
    onClose(); // close popup
    router.push("/challenges/challenges"); // navigate
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Header */}
        <div className={styles.header}>
          <FaStar className={styles.starIcon} />
          <h2 className={styles.title}>YOUR RATING</h2>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <p>
            Average rating of all Tuning Challenges that you have participated
            in the current Season.
          </p>
          <p className={styles.seasonText}>
            <strong>SEASON 10 DATES: OCTOBER 1 - OCTOBER 31.</strong>
          </p>
          <p>
            Your Leaderboard standings will appear after 10 participated
            challenges in the current Season.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.goButton} onClick={handleGoToChallenges}>
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

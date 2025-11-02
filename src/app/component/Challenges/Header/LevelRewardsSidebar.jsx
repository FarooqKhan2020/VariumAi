"use client";
import { useState, useEffect } from "react";
import { FaCarSide, FaLock, FaLockOpen, FaCheck } from "react-icons/fa";
import styles from "./LevelRewardsSidebar.module.css";

export default function LevelRewardsSidebar({ onClose }) {
  const [currentLevel] = useState(2);
  const [totalChallenges] = useState(7);
  const [completedChallenges] = useState(3);

  const levels = [
    {
      level: 0,
      challengesRequired: 0,
      rewards: [
        { name: "Factory Finish", image: "/configurator/DodgeCharger.png", unlocked: true },
        { name: "Glossy Finish", image: "/configurator/BMWX5.png", unlocked: true },
        { name: "Key limit 50", image: "/configurator/Ram3500DRW.png", unlocked: true },
      ],
    },
    {
      level: 1,
      challengesRequired: 1,
      rewards: [
        { name: "White Finish", image: "/configurator/FordF-350Regular.png", unlocked: true },
        { name: "Racing #1", image: "/configurator/AudiA5.png", unlocked: true },
        { name: "Vinyl/Decals #1", image: "/configurator/MercedesSprinter.png", unlocked: true },
      ],
    },
    {
      level: 2,
      challengesRequired: 3,
      rewards: [
        { name: "Lines Finish", image: "/configurator/AudiR8.png", unlocked: true },
        { name: "Vinyl/Decals #2", image: "/configurator/BMWM3.png", unlocked: true },
      ],
    },
    {
      level: 3,
      challengesRequired: 7,
      rewards: [
        { name: "Vinyl/Decals #3", image: "/configurator/BMWX5.png", unlocked: false },
        { name: "Key limit 53", image: "/configurator/Ram3500DRW.png", unlocked: false },
      ],
    },
  ];

  // ✅ Disable background scroll when sidebar opens
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>

      <aside className={styles.sidebar}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.levelCircle}>
            <span className={styles.levelNumber}>{currentLevel}</span>
            <div className={styles.levelLabel}>LEVEL</div>
          </div>
          <div className={styles.challengeProgress}>
            <FaCarSide className={styles.carIcon} />
            <span>
              {completedChallenges} / {totalChallenges}
            </span>
          </div>
        </div>

        <h2 className={styles.title}>LEVEL REWARDS</h2>

        {/* Level List */}
        <div className={styles.levelList}>
          {levels.map((lvl) => {
            const isCurrent = lvl.level === currentLevel;
            const isCompleted = lvl.level < currentLevel;
            const isLocked = lvl.level > currentLevel;

            return (
              <div
                key={lvl.level}
                className={`${styles.levelBlock} ${
                  isCurrent ? styles.currentLevel : ""
                } ${isCompleted ? styles.completed : styles.locked}`}
              >
                <div className={styles.levelHeader}>
                  {/*  LEVEL TAG with icon */}
                  <span
                    className={`${styles.levelTag} ${
                      isCurrent || isCompleted
                        ? styles.greenTag
                        : styles.orangeTag
                    }`}
                  >
                    {isCurrent || isCompleted ? (
                      <>
                        <FaLockOpen className={styles.tagIcon} /> LEVEL {lvl.level}
                      </>
                    ) : (
                      <>
                        <FaLock className={styles.tagIcon} /> LEVEL {lvl.level}
                      </>
                    )}
                  </span>

                  <span className={styles.requirement}>
                    {isCurrent
                      ? "- YOUR CURRENT LEVEL"
                      : `- ${lvl.challengesRequired} Challenges Required`}
                  </span>
                </div>

                <div className={styles.rewards}>
                  {lvl.rewards.map((reward, index) => (
                    <div
                      key={index}
                      className={`${styles.rewardBox} ${
                        isCurrent ? styles.currentBorder : ""
                      }`}
                    >
                      <img
                        src={reward.image}
                        alt={reward.name}
                        className={styles.rewardImage}
                      />
                      <div className={styles.rewardStatusIcon}>
                        {reward.unlocked ? (
                          <FaCheck className={styles.checkIcon} />
                        ) : (
                          <FaLock className={styles.lockIcon} />
                        )}
                      </div>
                      <p className={styles.rewardName}>{reward.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      </aside>
    </>
  );
}

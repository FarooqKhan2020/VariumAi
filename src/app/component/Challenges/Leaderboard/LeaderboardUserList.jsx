"use client";
import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import styles from "./LeaderboardUserList.module.css";
import Link from "next/link";
const seasonOptions = ["CURRENT SEASON", "PREVIOUS SEASON"];
const challengeOptions = ["TUNING CHALLENGES", "TIME TRIAL CHALLENGES", "1:1 BATTLE"];
const carOptions = ["ALL CARS", "BIKES", "EURO", "JDM", "MUSCLE", "S.SPORT", "SEMI", "SUV", "TRUCK", "USDM"];

const leaderboardData = [
  { id: 1, position: 1, name: "henriquedinizf", rating: 4.20, avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, position: 2, name: "M.A.T.E.", rating: 4.20, avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, position: 3, name: "nyma", rating: 4.19, avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, position: 4, name: "Andrew Schra...", rating: 4.17, avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, position: 5, name: "AlejO", rating: 4.16, avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, position: 6, name: "tecnomd", rating: 4.16, avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 7, position: 7, name: "ThatGuy14", rating: 4.15, avatar: "https://i.pravatar.cc/150?img=7" },
  { id: 8, position: 8, name: "DiegoBeing0", rating: 4.15, avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 9, position: 9, name: "Thekiso Jnr M...", rating: 4.15, avatar: "https://i.pravatar.cc/150?img=9" },
  { id: 10, position: 10, name: "Gruffzzzzzz", rating: 4.13, avatar: "https://i.pravatar.cc/150?img=10" },
];

const LeaderboardUserList = () => {
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [carIndex, setCarIndex] = useState(0);
  
  const scrollContainerRef = useRef(null);

  const nextSeason = () => setSeasonIndex((p) => (p + 1) % seasonOptions.length);
  const prevSeason = () => setSeasonIndex((p) => (p - 1 + seasonOptions.length) % seasonOptions.length);

  const nextChallenge = () => setChallengeIndex((p) => (p + 1) % challengeOptions.length);
  const prevChallenge = () => setChallengeIndex((p) => (p - 1 + challengeOptions.length) % challengeOptions.length);

  const nextCar = () => setCarIndex((p) => (p + 1) % carOptions.length);
  const prevCar = () => setCarIndex((p) => (p - 1 + carOptions.length) % carOptions.length);

  return (
    <div className={styles.leaderboardUserSection}>
      {/* Navigation Filters */}
      <div className={styles.leaderboardNavigation}>
        <div className={styles.navItem}>
          <FaStar className={styles.starIcon} />
          <span className={styles.navLabel}>TOP TUNERS</span>
        </div>

        <div className={`${styles.navItem} ${styles.withArrows}`}>
          <button onClick={prevSeason} className={styles.navArrow}>
            <FaChevronLeft />
          </button>
          <span className={styles.navLabel}>{seasonOptions[seasonIndex]}</span>
          <button onClick={nextSeason} className={styles.navArrow}>
            <FaChevronRight />
          </button>
        </div>

        <div className={`${styles.navItem} ${styles.withArrows}`}>
          <button onClick={prevChallenge} className={styles.navArrow}>
            <FaChevronLeft />
          </button>
          <span className={styles.navLabel}>{challengeOptions[challengeIndex]}</span>
          <button onClick={nextChallenge} className={styles.navArrow}>
            <FaChevronRight />
          </button>
        </div>

        <div className={`${styles.navItem} ${styles.withArrows}`}>
          <button onClick={prevCar} className={styles.navArrow}>
            <FaChevronLeft />
          </button>
          <span className={styles.navLabel}>{carOptions[carIndex]}</span>
          <button onClick={nextCar} className={styles.navArrow}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Leaderboard User List */}
      <div className={styles.leaderboardListWrapper}>
        <div className={styles.leaderboardList} ref={scrollContainerRef}>
          {leaderboardData.map((user) => (
            <Link href="/challenges/leaderboard/showroom" key={user.id} className={styles.leaderboardUser}>
              <div className={styles.userAvatarWrapper}>
                <img src={user.avatar} alt={user.name} className={styles.userAvatar} />
                <div className={styles.userPosition}>{user.position}</div>
                <div className={styles.userRating}>{user.rating.toFixed(2)}</div>
              </div>
              <div className={styles.userName}>{user.name}</div>
            </Link>
          ))}
        </div>

        {/* Your Rank Section */}
        <div className={styles.yourRank}>
          <div className={styles.rankAvatarWrapper}>
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop" alt="Your Rank" className={styles.rankAvatar} />
          </div>
          <div className={styles.rankText}>Your Rank</div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardUserList;
"use client";
import React from "react";
import { FaTimes, FaRandom } from "react-icons/fa";
import styles from "./SelectOpponent.module.css";

const friends = [
  { id: 1, name: "1969fmkr", image: "/friends/1.jpg", rating: 3.75 },
  { id: 2, name: "Maybach", image: "/friends/2.jpg", rating: 3.79 },
  { id: 3, name: "REDDDDDD", image: "/friends/3.jpg", rating: 4.05 },
  { id: 4, name: "Khan", image: "/friends/4.jpg", rating: 3.32 },
  { id: 5, name: "irlLoser", image: "/friends/5.jpg", rating: 0.0 },
  { id: 6, name: "GALUNG", image: "/friends/6.jpg", rating: 3.84 },
  { id: 7, name: "Jacqueline", image: "/friends/7.jpg", rating: 3.73 },
  { id: 8, name: "waqas zafar", image: "/friends/8.jpg", rating: 2.75 },
  { id: 9, name: "NERAKA", image: "/friends/9.jpg", rating: 4.06 },
  { id: 10, name: "THE nopee", image: "/friends/10.jpg", rating: 3.94 },
];

const SelectOpponent = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Header */}
        <div className={styles.header}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <button className={styles.randomBtn}>
            <FaRandom /> RANDOM OPPONENT
          </button>
          <FaTimes className={styles.closeIcon} onClick={onClose} />
        </div>

        {/* Body */}
        <div className={styles.body}>
          {friends.map((friend) => (
            <div key={friend.id} className={styles.friendCard}>
              <div className={styles.avatarWrapper}>
                <img
                  src={friend.image}
                  alt={friend.name}
                  className={styles.avatar}
                />
                <span className={styles.rating}>{friend.rating.toFixed(2)}</span>
              </div>
              <div className={styles.name}>{friend.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectOpponent;

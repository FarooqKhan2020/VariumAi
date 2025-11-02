// OpponentPopup.jsx (updated)
"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes, FaStar, FaRandom } from "react-icons/fa";
import styles from "./OpponentPopup.module.css";

const OpponentPopup = ({ isOpen, onClose, onSelectOpponent }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample friends data
  const friends = [
    { id: 1, name: "1969fmkr", rating: 4.0, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" },
    { id: 2, name: "Maybach", rating: 3.8, image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop" },
    { id: 3, name: "REDDDDDDDD...", rating: 4.5, image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2080&auto=format&fit=crop" },
    { id: 4, name: "GALUNG", rating: 2.75, image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2080&auto=format&fit=crop" },
    { id: 5, name: "Jacqueline mari...", rating: 3.2, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2080&auto=format&fit=crop" },
    { id: 6, name: "waqas zafar", rating: 4.1, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2080&auto=format&fit=crop" },
    { id: 7, name: "NERAKA", rating: 3.9, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2080&auto=format&fit=crop" },
    { id: 8, name: "+ THE nopeee +", rating: 3.5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2080&auto=format&fit=crop" },
    { id: 9, name: "Unbrakcable", rating: 4.3, image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2080&auto=format&fit=crop" },
    { id: 10, name: "Unbrakcable", rating: 4.0, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2080&auto=format&fit=crop" }
  ];

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Random opponent select function
  const handleRandomOpponent = () => {
    const randomIndex = Math.floor(Math.random() * friends.length);
    const randomFriend = friends[randomIndex];
    onSelectOpponent(randomFriend);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        {/* Header */}
        <div className={styles.popupHeader}>
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className={styles.randomOpponentBtn} 
            onClick={handleRandomOpponent}
            title="Random Opponent"
          >
            <FaRandom className={styles.randomIcon} />
            <span className={styles.randomText}>RANDOM OPPONENT</span>
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className={styles.popupBody}>
          <div className={styles.friendsGrid}>
            {filteredFriends.map((friend) => (
              <div 
                key={friend.id} 
                className={styles.friendCard}
                onClick={() => onSelectOpponent(friend)}
              >
                <div className={styles.friendImageContainer}>
                  <img 
                    src={friend.image} 
                    alt={friend.name}
                    className={styles.friendImage}
                  />
                </div>
                <div className={styles.friendRating}>
                  <FaStar className={styles.starIcon} />
                  <span>{friend.rating}</span>
                </div>
                <div className={styles.friendName}>
                  {friend.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpponentPopup;
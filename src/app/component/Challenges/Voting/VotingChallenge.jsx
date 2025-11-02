"use client";
import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaStar } from "react-icons/fa";
import styles from "./VotingChallenge.module.css";

const VotingChallenge = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [viewAngle, setViewAngle] = useState("front");
  const [showResult, setShowResult] = useState(false);
  const [votedFor, setVotedFor] = useState(null);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const challenges = [
    {
      left: {
        name: "SXP",
        frontImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
        rearImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        user: 'Ahmad Khan',
        userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
        rating: 2.5
      },
      right: {
        name: "GT-R",
        frontImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
        rearImage: 'https://images.unsplash.com/photo-1638997611276-b842eb529b20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        user: 'Kale',
        userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kale',
        rating: 4.17
      }
    },
    {
      left: {
        name: "BMW M3",
        frontImage: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop',
        rearImage: 'https://images.unsplash.com/photo-1441148489547-da3f133be9ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        user: 'Ali Raza',
        userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali',
        rating: 3.8
      },
      right: {
        name: "PORSCHE",
        frontImage: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop',
        rearImage: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=600&fit=crop',
        user: 'Sarah',
        userImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        rating: 4.5
      }
    }
  ];

  const totalChallenges = challenges.length;
  const currentData = challenges[currentChallenge];

  // Auto-next timer effect
  useEffect(() => {
    let timer;
    if (showResult && currentChallenge < totalChallenges - 1) {
      timer = setTimeout(() => {
        handleNext();
      }, 2500); // 2.5 seconds
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showResult, currentChallenge, totalChallenges]);

  const handleVote = (side) => {
    setVotedFor(side);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentChallenge < totalChallenges - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setShowResult(false);
      setVotedFor(null);
      setViewAngle("front");
      setHoverLeft(false);
      setHoverRight(false);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleEqual = () => {
    setVotedFor("equal");
    setShowResult(true);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${styles.star} ${index < Math.floor(rating) ? styles.filledStar : ""}`}
      />
    ));
  };

  if (showResult) {
    return (
      <div className={styles.votingChallenge}>
        <div className={styles.outerFrame}>
          <div className={styles.resultGrid}>
            {/* Left Result */}
            <div className={`${styles.resultCard} ${votedFor === "left" ? styles.votedCard : ""}`}>
              {votedFor === "left" && <div className={styles.youVotedBadge}>YOU VOTED FOR</div>}
              <div className={styles.userInfo}>
                <div className={styles.userImageContainer}>
                  <img 
                    src={currentData.left.userImage} 
                    alt={currentData.left.user}
                    loading="eager"
                  />
                </div>
                <div className={styles.userDetails}>
                  <h3 className={styles.userName}>{currentData.left.user}</h3>
                  <div className={styles.rating}>
                    {renderStars(currentData.left.rating)}
                    <span className={styles.ratingValue}>{currentData.left.rating.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Result */}
            <div className={`${styles.resultCard} ${votedFor === "right" ? styles.votedCard : ""}`}>
              {votedFor === "right" && <div className={styles.youVotedBadge}>YOU VOTED FOR</div>}
              <div className={styles.userInfo}>
                <div className={styles.userImageContainer}>
                  <img 
                    src={currentData.right.userImage} 
                    alt={currentData.right.user}
                    loading="eager"
                  />
                </div>
                <div className={styles.userDetails}>
                  <h3 className={styles.userName}>{currentData.right.user}</h3>
                  <div className={styles.rating}>
                    {renderStars(currentData.right.rating)}
                    <span className={styles.ratingValue}>{currentData.right.rating.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.resultFooter}>
            {currentChallenge < totalChallenges - 1 ? (
              <div className={styles.autoNextInfo}>
                {/* Text and button removed - auto transition only */}
              </div>
            ) : (
              <div className={styles.completedText}>All Challenges Completed!</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.votingChallenge}>
      <div className={styles.outerFrame}>
        <div className={styles.progressBadge}>{currentChallenge + 1} / {totalChallenges}</div>

        <div className={styles.votingContainer}>
          {/* Left */}
          <div className={styles.votingSide}>
            <div
              className={`${styles.carImage} ${hoverLeft ? styles.hovered : ""}`}
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              onClick={() => handleVote("left")}
            >
              <img
                src={viewAngle === "front" ? currentData.left.frontImage : currentData.left.rearImage}
                alt={`${currentData.left.name} ${viewAngle}`}
                className={styles.carImageTag}
                loading="eager"
              />
              {hoverLeft && (
                <div className={styles.hoverOverlay}>
                  <div className={styles.thumbsContainer}>
                    <FaThumbsUp className={styles.thumbsIcon} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center divider / controls */}
          <div className={styles.centerArea}>
            <button className={styles.equalButton} onClick={handleEqual} aria-label="Equal">=</button>
            <div className={styles.skipPill}>
              <button className={styles.skipBtn} onClick={handleSkip}>SKIP</button>
            </div>
          </div>

          {/* Right */}
          <div className={styles.votingSide}>
            <div
              className={`${styles.carImage} ${hoverRight ? styles.hovered : ""}`}
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              onClick={() => handleVote("right")}
            >
              <img
                src={viewAngle === "front" ? currentData.right.frontImage : currentData.right.rearImage}
                alt={`${currentData.right.name} ${viewAngle}`}
                className={styles.carImageTag}
                loading="eager"
              />
              {hoverRight && (
                <div className={styles.hoverOverlay}>
                  <div className={styles.thumbsContainer}>
                    <FaThumbsUp className={styles.thumbsIcon} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* bottom controls: front/rear toggle */}
        <div className={styles.votingAngle}>
          <label className={styles.angleOption}>
            <input
              type="radio"
              name="angle"
              value="front"
              checked={viewAngle === "front"}
              onChange={(e) => setViewAngle(e.target.value)}
            />
            <span className={styles.radioCustom}></span>
            FRONT
          </label>
          <label className={styles.angleOption}>
            <input
              type="radio"
              name="angle"
              value="rear"
              checked={viewAngle === "rear"}
              onChange={(e) => setViewAngle(e.target.value)}
            />
            <span className={styles.radioCustom}></span>
            REAR
          </label>
        </div>
      </div>
    </div>
  );
};

export default VotingChallenge;
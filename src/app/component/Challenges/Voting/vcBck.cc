'use client';
import React, { useState } from 'react';
import { FaThumbsUp, FaStar, FaUser } from "react-icons/fa";
import styles from "./VotingChallenge.module.css";

const VotingChallenge = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [viewAngle, setViewAngle] = useState('front');
  const [showResult, setShowResult] = useState(false);
  const [votedFor, setVotedFor] = useState(null);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  // Sample voting data
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

  const handleVote = (side) => {
    setVotedFor(side);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentChallenge < totalChallenges - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setShowResult(false);
      setVotedFor(null);
      setViewAngle('front');
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleEqual = () => {
    setVotedFor('equal');
    setShowResult(true);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${styles.star} ${index < Math.floor(rating) ? styles.filledStar : ''}`}
      />
    ));
  };

  if (showResult) {
    return (
      <div className={styles.votingChallenge}>
        <div className={styles.resultContainer}>
          {/* Progress */}
          <div className={styles.progressSection}>
            <span className={styles.progressText}>{currentChallenge + 1} / {totalChallenges}</span>
          </div>
          
          <div className={styles.resultGrid}>
            {/* Left Result */}
            <div className={`${styles.resultCard} ${votedFor === 'left' ? styles.votedCard : ''}`}>
              {votedFor === 'left' && (
                <div className={styles.youVotedBadge}>
                  YOU VOICED FOR
                </div>
              )}
              <div className={styles.userInfo}>
                <div className={styles.userImageContainer}>
                  <img src={currentData.left.userImage} alt={currentData.left.user} />
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
            <div className={`${styles.resultCard} ${votedFor === 'right' ? styles.votedCard : ''}`}>
              {votedFor === 'right' && (
                <div className={styles.youVotedBadge}>
                  YOU VOICED FOR
                </div>
              )}
              <div className={styles.userInfo}>
                <div className={styles.userImageContainer}>
                  <img src={currentData.right.userImage} alt={currentData.right.user} />
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

          {currentChallenge < totalChallenges - 1 && (
            <div className={styles.nextSection}>
              <button
                onClick={handleNext}
                className={styles.nextButton}
              >
                NEXT CHALLENGE
              </button>
            </div>
          )}
          
          {currentChallenge === totalChallenges - 1 && (
            <div className={styles.completedSection}>
              <div className={styles.completedText}>All Challenges Completed!</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.votingChallenge}>
      <div className={styles.votingContainer}>
        
        {/* Voting Left */}
        <div className={styles.votingLeft}>
          <div
            className={`${styles.carImage} ${hoverLeft ? styles.hovered : ''}`}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
            onClick={() => handleVote('left')}
          >
            <img
              src={viewAngle === 'front' ? currentData.left.frontImage : currentData.left.rearImage}
              alt="Left Car"
            />
            {hoverLeft && (
              <div className={styles.hoverOverlay}>
                <div className={styles.thumbsContainer}>
                  <FaThumbsUp className={styles.thumbsIcon} />
                </div>
              </div>
            )}
          </div>
          <div className={styles.carName}>{currentData.left.name}</div>
        </div>

        {/* Voting Items (Center) */}
        <div className={styles.votingItems}>
          {/* Progress */}
          <div className={styles.progressItem}>
            <span className={styles.progressText}>{currentChallenge + 1} / {totalChallenges}</span>
          </div>

          {/* Equal Button */}
          <button
            onClick={handleEqual}
            className={styles.equalButton}
          >
            =
          </button>

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className={styles.skipButton}
          >
            SKIP
          </button>
        </div>

        {/* Voting Right */}
        <div className={styles.votingRight}>
          <div
            className={`${styles.carImage} ${hoverRight ? styles.hovered : ''}`}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
            onClick={() => handleVote('right')}
          >
            <img
              src={viewAngle === 'front' ? currentData.right.frontImage : currentData.right.rearImage}
              alt="Right Car"
            />
            {hoverRight && (
              <div className={styles.hoverOverlay}>
                <div className={styles.thumbsContainer}>
                  <FaThumbsUp className={styles.thumbsIcon} />
                </div>
              </div>
            )}
          </div>
          <div className={styles.carName}>{currentData.right.name}</div>
        </div>
      </div>

      {/* Voting Angle */}
      <div className={styles.votingAngle}>
        <div className={styles.angleOptions}>
          <label className={styles.angleOption}>
            <input
              type="radio"
              name="angle"
              value="front"
              checked={viewAngle === 'front'}
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
              checked={viewAngle === 'rear'}
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


















.votingChallenge {
  width: 100%;
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Voting Container */
.votingContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
}

/* Left and Right Sections */
.votingLeft,
.votingRight {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.carImage {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #333;
}

.carImage:hover {
  border-color: #dc2626;
}

.carImage.hovered {
  border-color: #16a34a;
}

.carImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hoverOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbsContainer {
  background: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbsIcon {
  font-size: 2.5rem;
  color: #000;
}

.carName {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Voting Items Section */
.votingItems {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
}

.progressItem {
  background: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 1px solid #333;
}

.progressText {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}

.equalButton {
  background: #1a1a1a;
  color: white;
  border: 1px solid #333;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.equalButton:hover {
  background: #2a2a2a;
}

.skipButton {
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.skipButton:hover {
  background: #b91c1c;
}

/* Voting Angle */
.votingAngle {
  margin-top: 2rem;
}

.angleOptions {
  display: flex;
  gap: 2rem;
  background: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 1px solid #333;
}

.angleOption {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

.angleOption input {
  display: none;
}

.radioCustom {
  width: 18px;
  height: 18px;
  border: 2px solid #666;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.radioCustom::after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #dc2626;
  opacity: 0;
  transition: opacity 0.3s;
}

.angleOption input:checked + .radioCustom {
  border-color: #dc2626;
}

.angleOption input:checked + .radioCustom::after {
  opacity: 1;
}

/* Results Page */
.resultContainer {
  width: 100%;
  max-width: 800px;
  text-align: center;
}

.resultGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.resultCard {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #333;
  position: relative;
}

.votedCard {
  border-color: #16a34a;
}

.youVotedBadge {
  background: #16a34a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.userImageContainer {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #333;
}

.userImageContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.userDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.userName {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #666;
  font-size: 1rem;
}

.filledStar {
  color: #fbbf24;
}

.ratingValue {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.nextSection {
  margin-top: 2rem;
}

.nextButton {
  background: #dc2626;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.nextButton:hover {
  background: #b91c1c;
}

.completedSection {
  margin-top: 2rem;
}

.completedText {
  color: #16a34a;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .votingContainer {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .votingItems {
    flex-direction: row;
    gap: 1rem;
    order: -1;
    padding: 0;
  }
  
  .carImage {
    height: 300px;
  }
  
  .resultGrid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .progressItem {
    padding: 1rem;
  }
}
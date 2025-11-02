


"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaCrown } from "react-icons/fa";
import styles from "./Leaderboard.module.css";

// Mock data for cars slider
const topDesignsData = [
  { id: 1, title: "MAZDA", image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg" },
  { id: 2, title: "3 CARS FROM CARAGE", image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/67fce90b7a2af09f652d7d78.jpg" },
  { id: 3, title: "ALL CARBON", image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg" },
  { id: 4, title: "SPORTS EDITION", image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg" },
  { id: 5, title: "JDM STYLE", image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg" },
];

// Mock data for leaderboard navigation
const leaderboardTypes = {
  "TOP TUNERS": ["CURRENT SEASON", "PREVIOUS SEASON"],
  "TUNING CHALLENGES": ["TUNING CHALLENGES", "TIME TRIAL", "1:1 BATTLE"],
  "ALL CARS": ["ALL CARS", "BIKES", "EURO", "JDM", "MUSCLE", "S.SPORT", "SEMI", "SUV", "TRUCK", "USD"]
};

// Mock data for users leaderboard
const usersData = [
  { id: 1, name: "henriquedinaf", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "M. A. T. E.", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "nyma", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 4, name: "Andrew Scha...", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 5, name: "Alajo", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: 6, name: "tecnomd", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 7, name: "ThatCuy14", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/6.jpg" },
  { id: 8, name: "DiegoBeing0", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: 9, name: "Thekiso Jm M...", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
  { id: 10, name: "Gruftzzzzz", position: "H", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" },
];

const yourRankData = { id: 25, name: "Your Name", position: "25", image: "https://randomuser.me/api/portraits/men/10.jpg" };

const Leaderboard = () => {
  // State for cars slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // State for leaderboard navigation
  const [activeCategory, setActiveCategory] = useState("TOP TUNERS");
  const [activeItems, setActiveItems] = useState({
    "TOP TUNERS": 0,
    "TUNING CHALLENGES": 0,
    "ALL CARS": 0
  });

  // Responsive slidesPerView for cars slider
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const totalSlides = topDesignsData.length;
  const maxSlide = Math.max(0, totalSlides - slidesPerView);

  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));
  const goToSlide = (i) => setCurrentSlide(Math.max(0, Math.min(i, maxSlide)));

  // Navigation handlers
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleNavPrev = (category) => {
    setActiveItems(prev => ({
      ...prev,
      [category]: Math.max(0, prev[category] - 1)
    }));
  };

  const handleNavNext = (category) => {
    const items = leaderboardTypes[category];
    setActiveItems(prev => ({
      ...prev,
      [category]: Math.min(items.length - 1, prev[category] + 1)
    }));
  };

  const getCurrentItem = (category) => {
    return leaderboardTypes[category][activeItems[category]];
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        
        {/* Top Designs Cars Slider */}
        <div className={styles.carsSliderSection}>
          <div className={styles.sliderHeader}>
            <h2 className={styles.sectionTitle}>TOP DESIGNS</h2>
          </div>
          
          <div className={styles.sliderContainer}>
            {/* Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`${styles.arrow} ${styles.left}`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className={`${styles.arrow} ${styles.right}`}
            >
              <FaChevronRight />
            </button>

            {/* Slider */}
            <div className={styles.sliderWrapper}>
              <div
                className={styles.slider}
                style={{
                  width: `${(100 / slidesPerView) * totalSlides}%`,
                  transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
                }}
              >
                {topDesignsData.map((car) => (
                  <div
                    key={car.id}
                    className={styles.slide}
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className={styles.card}>
                      <img src={car.image} alt={car.title} className={styles.image} />
                      
                      {/* Labels */}
                      <div className={styles.labels}>
                        <span className={styles.topDesignLabel}>TOP DESIGNS</span>
                        <span className={styles.carTitle}>{car.title}</span>
                      </div>
                      
                      {/* View Button */}
                      <div className={styles.viewButton}>
                        <button className={styles.viewBtn}>VIEW</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className={styles.dots}>
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`${styles.dot} ${i === currentSlide ? styles.activeDot : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className={styles.leaderboardSection}>
          
          {/* Leaderboard Type Navigation */}
          <div className={styles.leaderboardNav}>
            {Object.keys(leaderboardTypes).map((category) => (
              <div key={category} className={styles.navCategory}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`${styles.navButton} ${activeCategory === category ? styles.activeNav : ""}`}
                >
                  {category}
                </button>
                
                <div className={styles.navContent}>
                  <button 
                    onClick={() => handleNavPrev(category)}
                    disabled={activeItems[category] === 0}
                    className={styles.navArrow}
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <span className={styles.currentItem}>
                    {getCurrentItem(category)}
                  </span>
                  
                  <button 
                    onClick={() => handleNavNext(category)}
                    disabled={activeItems[category] === leaderboardTypes[category].length - 1}
                    className={styles.navArrow}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard Users List */}
          <div className={styles.usersListSection}>
            <div className={styles.usersList}>
              {usersData.map((user) => (
                <div key={user.id} className={styles.userCard}>
                  <div className={styles.userImageContainer}>
                    <img src={user.image} alt={user.name} className={styles.userImage} />
                    <div className={styles.userPosition}>{user.position}</div>
                  </div>
                  
                  <div className={styles.userRating}>
                    {[...Array(user.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.starIcon} />
                    ))}
                  </div>
                  
                  <div className={styles.userName}>{user.name}</div>
                </div>
              ))}
            </div>

            {/* Your Rank */}
            <div className={styles.yourRankSection}>
              <div className={styles.yourRankCard}>
                <div className={styles.yourRankImageContainer}>
                  <img src={yourRankData.image} alt={yourRankData.name} className={styles.yourRankImage} />
                  <div className={styles.yourRankPosition}>{yourRankData.position}</div>
                </div>
                <div className={styles.yourRankName}>Your Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;







.section {
  width: 100%;
  background: black;
  color: white;
  padding: 2rem 0;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Cars Slider Styles */
.carsSliderSection {
  margin-bottom: 3rem;
}

.sliderHeader {
  text-align: center;
  margin-bottom: 2rem;
}

.sectionTitle {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.sliderContainer {
  position: relative;
}

.sliderWrapper {
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slide {
  flex-shrink: 0;
}

.card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  margin: 0 0.5rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
}

.image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.labels {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.topDesignLabel {
  background: rgba(220, 38, 38, 0.9);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  border-radius: 0.25rem;
}

.carTitle {
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.125rem;
  text-transform: uppercase;
  color: white;
  border-radius: 0.25rem;
}

.viewButton {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
}

.viewBtn {
  padding: 0.5rem 2rem;
  border-radius: 9999px;
  border: 1px solid white;
  background: rgba(220, 38, 38, 0.8);
  color: white;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s;
}

.viewBtn:hover {
  background: rgba(220, 38, 38, 1);
}

/* Arrows and Dots (same as challenges) */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: #dc2626;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
}

.arrow:hover {
  background: #b91c1c;
}

.arrow:disabled {
  background: #4b5563;
  cursor: not-allowed;
}

.left {
  left: -20px;
}

.right {
  right: -20px;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: white;
  opacity: 0.6;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.activeDot {
  background: #dc2626;
  opacity: 1;
}

/* Leaderboard Navigation */
.leaderboardNav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.navCategory {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navButton {
  background: transparent;
  border: 1px solid #dc2626;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  font-weight: bold;
}

.navButton:hover {
  background: #dc2626;
}

.activeNav {
  background: #dc2626;
}

.navContent {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navArrow {
  background: transparent;
  border: 1px solid #666;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

.navArrow:hover:not(:disabled) {
  background: #dc2626;
  border-color: #dc2626;
}

.navArrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.currentItem {
  font-size: 0.9rem;
  font-weight: bold;
  min-width: 120px;
  text-align: center;
  text-transform: uppercase;
}

/* Users List Section */
.usersListSection {
  position: relative;
  min-height: 400px;
}

.usersList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.userCard {
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid #333;
  transition: transform 0.3s;
}

.userCard:hover {
  transform: translateY(-2px);
  border-color: #dc2626;
}

.userImageContainer {
  position: relative;
  margin-bottom: 0.5rem;
}

.userImage {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
}

.userPosition {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #dc2626;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.userRating {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-bottom: 0.5rem;
}

.starIcon {
  color: #fbbf24;
  font-size: 0.875rem;
}

.userName {
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
}

/* Your Rank Section */
.yourRankSection {
  position: sticky;
  bottom: 0;
  background: black;
  padding: 1rem 0;
  border-top: 2px solid #dc2626;
}

.yourRankCard {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #dc2626;
}

.yourRankImageContainer {
  position: relative;
}

.yourRankImage {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.yourRankPosition {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #dc2626;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.yourRankName {
  font-size: 1rem;
  font-weight: bold;
  color: white;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .image {
    height: 250px;
  }
  
  .leaderboardNav {
    gap: 1rem;
  }
  
  .navCategory {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .sectionTitle {
    font-size: 1.5rem;
  }
  
  .usersList {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
  }
  
  .userImage {
    width: 60px;
    height: 60px;
  }
  
  .yourRankCard {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}

@media (max-width: 640px) {
  .image {
    height: 200px;
  }
  
  .arrow {
    width: 32px;
    height: 32px;
  }
  
  .left {
    left: -10px;
  }
  
  .right {
    right: -10px;
  }
  
  .leaderboardNav {
    flex-direction: column;
    align-items: center;
  }
  
  .navCategory {
    width: 100%;
    justify-content: center;
  }
}
"use client";
import React, { useState, useEffect } from "react";
import { FaClock, FaChevronLeft, FaChevronRight, FaKey } from "react-icons/fa";
import styles from "./Challenges.module.css";

const challengesData = [
  {
    id: 1,
    time: "ACTIVE 10 HOUR",
    timeColor: "purple",
    title: "ANY MODEL",
    cost: 10,
    description: "Participate with any model in any desired style & configuration.",
    image:
      "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg",
  },
  {
    id: 2,
    time: "ACTIVE 5 HOUR",
    timeColor: "green",
    title: "FREESTYLE",
    subtitle: "07-13 Chevrolet Silverado 1500 Crew Cab",
    cost: 8,
    description: "Show your creativity in freestyle mode.",
    image:
      "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/67fce90b7a2af09f652d7d78.jpg",
  },
  {
    id: 3,
    time: "ACTIVE 7 HOUR",
    timeColor: "purple",
    title: "LAMBORGHINI",
    cost: 12,
    description: "Join with any Lamborghini model and compete for style.",
    image:
      "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg",
  },
];

const Challenges = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeOverlay, setActiveOverlay] = useState(null); // overlay toggle

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const totalSlides = challengesData.length;
  const maxSlide = Math.max(0, totalSlides - slidesPerView);
  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));
  const goToSlide = (i) => setCurrentSlide(Math.max(0, Math.min(i, maxSlide)));

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
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
        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              width: `${(100 / slidesPerView) * totalSlides}%`,
              transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
            }}
          >
            {challengesData.map((challenge) => (
              <div
                key={challenge.id}
                className={styles.slide}
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className={styles.card}>
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className={styles.image}
                  />

                  {/* Labels */}
                  <div className={styles.labels}>
                    <span
                      className={`${styles.time} ${styles[challenge.timeColor]}`}
                    >
                      <FaClock className={styles.clockIcon} />
                      {challenge.time}
                    </span>
                    <span className={styles.title}>{challenge.title}</span>
                    {challenge.subtitle && (
                      <span className={styles.subtitle}>
                        {challenge.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Details Button */}
                  <div className={styles.details}>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        setActiveOverlay(
                          activeOverlay === challenge.id ? null : challenge.id
                        )
                      }
                    >
                      DETAILS
                    </button>
                  </div>

                  {/* Overlay */}
                  {activeOverlay === challenge.id && (
                    <div className={styles.overlay}>
                      <div className={styles.overlayContent}>
                        <h4 className={styles.costLabel}>Cost</h4>
                        <div className={styles.costValue}>
                          <FaKey className={styles.keyIcon} /> {challenge.cost}
                        </div>

                        <h4 className={styles.descLabel}>Description</h4>
                        <p className={styles.descText}>{challenge.description}</p>

                        <button
                          className={styles.enterBtn}
                          onClick={() => setActiveOverlay(null)}
                        >
                          ENTER
                        </button>
                      </div>
                    </div>
                  )}
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
              className={`${styles.dot} ${
                i === currentSlide ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;



.section {
  width: 100%;
  /* padding: 2.5rem 0; */
  background: black;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
}

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
  left: 0;
  transform: translate(-50%, -50%);
}

.right {
  right: 0;
  transform: translate(50%, -50%);
}

.sliderContainer {
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
  /* border-radius: 0.5rem; */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  margin: 0 0.5rem;
  border: 1px solid;
}

.image {
  width: 100%;
  height: 400px;
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

.time {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  color: white;
  border-radius: 0.25rem;
}

.clockIcon {
  margin-right: 0.25rem;
}

.title {
  background: rgba(0, 0, 0, 0.7);
  padding: 0.25rem 0.75rem;
  font-weight: bold;
  font-size: 1.125rem;
  text-transform: uppercase;
  color: white;
}

.subtitle {
  background: rgba(0, 0, 0, 0.7);
  padding: 0.25rem 0.75rem;
  color: #e5e7eb;
  font-size: 0.875rem;
}

.details {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
}

.detailsBtn {
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

.detailsBtn:hover {
  background: rgba(0, 0, 0, 0.8);
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

/* Time label colors */
.purple {
  background: #9333ea;
}

.green {
  background: #16a34a;
}

.blue {
  background: #2563eb;
}

.red {
  background: #dc2626;
}




/* Responsive */
@media (max-width: 1024px) {
  .image {
    height: 320px;
  }
}

@media (max-width: 640px) {
  .image {
    height: 250px;
  }

  .arrow {
    width: 32px;
    height: 32px;
  }

  .detailsBtn {
    padding: 0.4rem 1rem;
    font-size: 0.875rem;
  }
}





/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.overlayContent {
  text-align: center;
  color: white;
  padding: 2rem;
}

.costLabel {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.costValue {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #00ff88;
  margin-bottom: 1rem;
}

.keyIcon {
  margin-right: 0.5rem;
}

.descLabel {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.descText {
  font-size: 0.95rem;
  max-width: 80%;
  margin: 0 auto 2rem auto;
  line-height: 1.5;
  color: #e0e0e0;
}

.enterBtn {
  background: #7c3aed;
  border: none;
  color: white;
  padding: 0.6rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.enterBtn:hover {
  background: #5b21b6;
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
// yaha se end




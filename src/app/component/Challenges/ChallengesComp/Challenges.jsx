
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
    image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg",
  },
  {
    id: 2,
    time: "ACTIVE 5 HOUR",
    timeColor: "green",
    title: "FREESTYLE",
    subtitle: "07-13 Chevrolet Silverado 1500 Crew Cab",
    cost: 8,
    description: "Show your creativity in freestyle mode.",
    image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/67fce90b7a2af09f652d7d78.jpg",
  },
  {
    id: 3,
    time: "ACTIVE 7 HOUR",
    timeColor: "purple",
    title: "LAMBORGHINI",
    cost: 12,
    description: "Join with any Lamborghini model and compete for style.",
    image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg",
  },
  {
    id: 4,
    time: "ACTIVE 2 HOUR",
    timeColor: "blue",
    title: "FERRARI",
    cost: 15,
    description: "Prove your tuning skills with any Ferrari model and dominate the race.",
    image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg",
  },
  {
    id: 5,
    time: "ACTIVE 6 HOUR",
    timeColor: "red",
    title: "PORSCHE",
    cost: 11,
    description: "Customize your Porsche to perfection and showcase your best design.",
    image: "https://data.3dtuning.com/ui-elements/challenge_img/challenges/app/63ff3a8cd2bfc9bc49fbad75.jpg",
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
                    {activeOverlay === challenge.id ? (
                      <button
                        className={`${styles.detailsBtn} ${styles.enterBtn}`}
                        onClick={() => setActiveOverlay(null)}
                      >
                        ENTER
                      </button>
                    ) : (
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
                    )}
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
              className={`${styles.dot} ${i === currentSlide ? styles.activeDot : ""
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
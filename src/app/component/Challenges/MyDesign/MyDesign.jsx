"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCar } from "react-icons/fa";
import styles from "./MyDesign.module.css";
import Link from "next/link";

const challengesData = [
  { id: 1, title: "RACE INSPIRED", status: "1 DAY", image: "https://data.3dtuning.com/tun/Fph6V97c8k.jpg", goneToChallenge: false },
  { id: 2, title: "LIVERY", status: "1 DAY", image: "https://data.3dtuning.com/tun/dnOPnpIIP8.jpg", goneToChallenge: false },
  { id: 3, title: "FERRARI", status: "1 DAY", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop", goneToChallenge: true },
  { id: 4, title: "LAMBORGHINI", status: "1 DAY", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop", goneToChallenge: false },
  { id: 5, title: "OPEL", status: "1 DAY", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=500&h=300&fit=crop", goneToChallenge: false },
  { id: 6, title: "FREESTYLE", status: "6 HOUR", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=300&fit=crop", goneToChallenge: false },
  { id: 76, title: "FREESTYLE", status: "6 HOUR", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=300&fit=crop", goneToChallenge: false },
];

const MyDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 2 : 6;
  const totalSlides = Math.ceil(challengesData.length / itemsPerSlide);
  const maxSlide = Math.max(0, totalSlides - 1);

  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));

  return (
    <section className={styles.myDesignSection}>
      <div className={styles.myDesignWrapper}>
        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`${styles.navArrow} ${styles.leftArrow} ${currentSlide === 0 ? styles.disabled : ""}`}
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className={`${styles.navArrow} ${styles.rightArrow} ${currentSlide >= maxSlide ? styles.disabled : ""}`}
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Challenge Grid (Slider Effect) */}
        <div className={styles.challengeGridContainer}>
          <div
            className={styles.challengeSlider}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * itemsPerSlide;
              const currentChallenges = challengesData.slice(startIndex, startIndex + itemsPerSlide);

              return (
                <div key={slideIndex} className={styles.challengeGrid}>
                  {currentChallenges.map((challenge) => (
                    <Link
                      key={challenge.id}
                      href={`/challenges/mydesign/${challenge.id}`}
                      className={styles.challengeCard}
                    >
                      <div className={styles.imageContainer}>
                        <img
                          src={challenge.image}
                          alt={challenge.title}
                          className={styles.challengeImage}
                        />

                        <div className={styles.titleLabel}>{challenge.title}</div>

                        <div className={styles.statusLabel}>
                          <FaCar className={styles.statusIcon} />
                          <span>{challenge.status}</span>
                        </div>

                        {challenge.goneToChallenge && (
                          <div className={styles.goneLabel}>GONE TO CHALLENGE</div>
                        )}
                      </div>
                    </Link>
                  ))}

                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Dots */}
        {totalSlides > 1 && (
          <div className={styles.dotsContainer}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyDesign;

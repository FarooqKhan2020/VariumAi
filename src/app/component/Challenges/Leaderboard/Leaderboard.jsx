"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Leaderboard.module.css";
import LeaderboardUserList from "./LeaderboardUserList"; // Correct path
import Link from "next/link";
const carsData = [
  { id: 1, title: "MAZDA", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80" },
  { id: 2, title: "3 CARS FROM GARAGE", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80" },
  { id: 3, title: "ALL CARBON", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80" },
  { id: 4, title: "BMW M3", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" },
  { id: 5, title: "NISSAN GTR", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80" },
];

const Leaderboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

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

  const totalSlides = carsData.length;
  const maxSlide = Math.max(0, totalSlides - slidesPerView);

  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));

  return (
    <section className={styles.leaderboardSection}>
      {/* Cars Slider Section */}
      <div className={styles.carsSliderWrapper}>
        <button onClick={prevSlide} disabled={currentSlide === 0} className={`${styles.sliderArrow} ${styles.left}`}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} disabled={currentSlide >= maxSlide} className={`${styles.sliderArrow} ${styles.right}`}>
          <FaChevronRight />
        </button>

        <div className={styles.carsSliderContainer}>
          <div
            className={styles.carsSlider}
            style={{
              width: `${(100 / slidesPerView) * totalSlides}%`,
              transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
            }}
          >
            {carsData.map((car) => (
              <div key={car.id} className={styles.carSlide} style={{ width: `${100 / totalSlides}%` }}>
                <div className={styles.carCard}>
                  <img src={car.image} alt={car.title} className={styles.carImage} />
                  <div className={styles.carLabels}>
                    <span className={styles.topDesignLabel}>TOP DESIGNS</span>
                    <span className={styles.carTitleLabel}>{car.title}</span>
                  </div>
                  <Link href="/challenges/leaderboard/showroom" className={styles.viewBtn}>VIEW</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard User Section - Ab Alag Component */}
      <LeaderboardUserList />
    </section>
  );
};

export default Leaderboard;
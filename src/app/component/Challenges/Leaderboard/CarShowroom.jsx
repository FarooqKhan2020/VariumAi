"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import styles from "./CarShowroom.module.css";

const carsData = [
  // First 6 cars
  { id: 1, rating: 4.68, name: "Ancium", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, rating: 4.38, name: "Lunkas Miseripää", image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, rating: 4.38, name: "Cotton_17", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=3" },
  { id: 4, rating: 4.38, name: "Shot_26", image: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=4" },
  { id: 5, rating: 4.38, name: "Steven.mr.tz", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", avatar: "https://i.pravatar.cc/40?img=5" },
  { id: 6, rating: 4.5, name: "Cotton_21", image: "https://images.unsplash.com/photo-1635975229704-0a420e777a56?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", avatar: "https://i.pravatar.cc/40?img=6" },
  // Next 6 cars
  { id: 7, rating: 4.72, name: "TunerPro", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=7" },
  { id: 8, rating: 4.45, name: "SpeedMaster", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=8" },
  { id: 9, rating: 4.60, name: "DriftKing", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=9" },
  { id: 10, rating: 4.33, name: "GearHead", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=10" },
  { id: 11, rating: 4.55, name: "TurboBoost", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop", avatar: "https://i.pravatar.cc/40?img=11" },
  { id: 12, rating: 4.42, name: "RacerX", image: "https://images.unsplash.com/photo-1669882571567-76346139f1f1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const CarShowroom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = Math.ceil(carsData.length / (isMobile ? 2 : 6));
  const maxSlide = Math.max(0, totalSlides - 1);

  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((p) => Math.max(p - 1, 0));

  const getCurrentCars = () => {
    const carsPerSlide = isMobile ? 2 : 6;
    const startIndex = currentSlide * carsPerSlide;
    return carsData.slice(startIndex, startIndex + carsPerSlide);
  };

  const currentCars = getCurrentCars();

  return (
    <section className={styles.carShowroomSection}>
      <div className={styles.carShowroomWrapper}>
        {/* Navigation Arrows - Only show if not on mobile or if there are multiple slides */}
        {(!isMobile || totalSlides > 1) && (
          <>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`${styles.navArrow} ${styles.leftArrow}`}
            >
              <FaChevronLeft />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className={`${styles.navArrow} ${styles.rightArrow}`}
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Car Grid */}
        <div className={styles.carGridContainer}>
          <div className={`${styles.carGrid} ${isMobile ? styles.mobileGrid : ''}`}>
            {currentCars.map((car) => (
              <div key={car.id} className={styles.carCard}>
                {/* Car Image */}
               <div className={styles.carImageContainer}>
  <img src={car.image} alt={car.name} className={styles.carImage} />

  {/* Rating Badge */}
  <div className={styles.ratingContainer}>
    <FaStar className={styles.starIcon} />
    <span>{car.rating}</span>
  </div>

  {/* User Info Overlay */}
  <div className={styles.userInfo}>
    <img src={car.avatar} alt={car.name} className={styles.userAvatar} />
    <span className={styles.userName}>{car.name}</span>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>

        {/* Slide Dots Indicator - Show only if multiple slides */}
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

export default CarShowroom;
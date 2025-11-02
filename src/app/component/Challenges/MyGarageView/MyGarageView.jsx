"use client";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import styles from "./MyGarageView.module.css";

export default function MyGarageView() {
  const challenges = [
    {
      id: 1,
      rating: 3.75,
      title: "ANY MODEL",
      car: "Kawasaki Ninja ZX 6R",
      front: "https://data.3dtuning.com/tun/dnOPnpIIP8.jpg",
      rear: "https://data.3dtuning.com/tun/pKJNl0qxf9.jpg",
    },
    {
      id: 2,
      rating: 3.33,
      title: "RACE INSPIRED",
      car: "Ford Gran Torino Sport",
      front: "https://data.3dtuning.com/tun/Fph6V97c8k.jpg",
      rear: "https://data.3dtuning.com/tun/Hv_xggqwxM.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [view, setView] = useState("front");
  const [zoom, setZoom] = useState(1);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % challenges.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + challenges.length) % challenges.length);

  const handleZoom = (value) => {
    if (value >= 1 && value <= 1.2) setZoom(value);
  };

  const challenge = challenges[current];

  return (
    <div className={styles.container}>
      {/* Full-screen bike as background layer */}
      <div className={styles.imageBackground}>
        <img
          src={challenge[view]}
          alt={challenge.title}
          className={styles.mainImage}
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      {/* Overlay UI (everything on top of the image) */}
      <div className={styles.overlay}>
        {/* Profile Box */}
        <div className={styles.profileBox}>
          <div className={styles.avatarWrap}>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"
              alt="Profile"
              className={styles.avatar}
            />
            <div className={styles.ratingBadge}>
              <span>{challenge.rating.toFixed(2)}</span>
            </div>
          </div>
          <div className={styles.username}>Farooq Khan</div>
        </div>

        {/* Close Button */}
        <button
          className={styles.closeCircle}
          onClick={() => window.history.back()}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
          <FaChevronRight />
        </button>

        {/* Info Box */}
        <div className={styles.infoBox}>
          <div className={styles.starBadge}>
            <FaStar />
            <span>{challenge.rating.toFixed(2)}</span>
          </div>
          <div className={styles.challengeTitle}>{challenge.title}</div>
          <div className={styles.carName}>{challenge.car}</div>
        </div>

        {/* View Switch */}
        <div className={styles.viewSwitch}>
          <button
            className={`${styles.switchBtn} ${view === "front" ? styles.active : ""}`}
            onClick={() => setView("front")}
          >
            FRONT
          </button>
          <button
            className={`${styles.switchBtn} ${view === "rear" ? styles.active : ""}`}
            onClick={() => setView("rear")}
          >
            REAR
          </button>
        </div>

        {/* Zoom Controls */}
        <div className={styles.zoomControls}>
          <button
            className={styles.iconBtn}
            onClick={() => handleZoom(parseFloat((zoom - 0.05).toFixed(2)))}
            disabled={zoom <= 1}
          >
            <FaMinus />
          </button>
          <input
            type="range"
            min="1"
            max="1.2"
            step="0.01"
            value={zoom}
            onChange={(e) => handleZoom(parseFloat(e.target.value))}
            className={styles.zoomRange}
          />
          <button
            className={styles.iconBtn}
            onClick={() => handleZoom(parseFloat((zoom + 0.05).toFixed(2)))}
            disabled={zoom >= 1.2}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
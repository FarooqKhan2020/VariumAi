"use client";
import React from "react";
import styles from "./GarageView.module.css";
import { FaCarSide, FaEye, FaHeart, FaCommentDots } from "react-icons/fa";

export default function GarageView() {
  return (
    <div className={styles.garageContainer}>
      {/* Top-left profile box */}
      <div className={styles.profileBox}>
        <div className={styles.avatar}></div>
        <div className={styles.profileText}>
          <h3 className={styles.username}>John Doe</h3>
          <p className={styles.level}>Level 15</p>
        </div>
      </div>

      {/* Bottom black bar */}
      <div className={styles.bottomBar}>
        <button className={styles.openGarageBtn}>Open Garage</button>
        <div className={styles.iconsSection}>
          <div className={styles.iconItem}>
            <FaCarSide className={styles.icon} />
            <span>3 Cars</span>
          </div>
          <div className={styles.iconItem}>
            <FaEye className={styles.icon} />
            <span>120 Views</span>
          </div>
          <div className={styles.iconItem}>
            <FaHeart className={styles.icon} />
            <span>48 Likes</span>
          </div>
          <div className={styles.iconItem}>
            <FaCommentDots className={styles.icon} />
            <span>9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

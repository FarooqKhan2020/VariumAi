// components/NavigationDashboard.jsx
"use client";
import React from 'react';
import Link from 'next/link';
import { 
  FaNewspaper, 
  FaBell, 
  FaComments, 
  FaUsers, 
  FaCalendarAlt, 
  FaCog,
  FaCar,
  FaImages,
  FaClock,
  FaChartBar,
  FaArrowRight,
} from 'react-icons/fa';
import { TbVs } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import styles from './NavigationLinkBar.module.css';

const NavigationLinkBar = () => {
  const topBarItems = [
    { icon: FaNewspaper, label: 'NEWS', link: '/news' },
    { icon: FaBell, label: 'NOTIFICATIONS', link: '/notifications' },
    { icon: FaComments, label: 'INBOX', link: '/inbox' },
    { icon: FaUsers, label: 'FRIENDS', link: '/friends' },
    { icon: FaCalendarAlt, label: 'SCHEDULE', link: '/schedule' },
    { icon: FaCog, label: 'SETTINGS', link: '/settings' }
  ];

  const navigationButtons = [
    { icon: FaImages, label: 'GALLERY', link: '/gallery' },
    { icon: FaClock, label: 'TIMELINE', link: '/timeline' },
    { icon: GiHomeGarage, label: ' GARAGE', link: '/garage' },
    { icon: TbVs, label: 'CHALLENGES', link: 'challenges/challenges' },
    { icon: MdLeaderboard, label: 'LEADERBOARD', link: 'challenges/leaderboard' },
    { icon: FaCar, label: 'MY DESIGN', link: 'challenges/mydesign' },
  ];

  return (
    <div className={styles.navigationMain}>
      <div className={styles.container}>
        
        {/* Top Navigation Bar */}
        <div className={styles.topBar}>
          {topBarItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              className={styles.topBarItem}
            >
              <item.icon className={styles.topBarIcon} />
              <span className={styles.topBarLabel}>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Navigation Buttons Grid */}
        <div className={styles.navGrid}>
          {navigationButtons.map((button, index) => (
            <Link 
              key={index} 
              href={button.link} 
              className={styles.navButton}
            >
              <div className={styles.buttonContent}>
                <button.icon className={styles.buttonIcon} />
                <span className={styles.buttonLabel}>{button.label}</span>
              </div>
              <FaArrowRight className={styles.arrowIcon} />
            </Link>
          ))}
        </div>

        {/* Start Customizing Button */}
        <div className={styles.customizeContainer}>
          <Link href="/configurator" className={styles.customizeButton}>
            Start Configurator
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NavigationLinkBar;

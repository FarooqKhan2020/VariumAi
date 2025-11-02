"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGlobe, FaCar, FaVoteYea } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi"; 
import { MdLeaderboard } from "react-icons/md";
import { TbVs } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";

import styles from "./ChallengesFooter.module.css"; // CSS module import

export default function ChallengesFooter() {
  const pathname = usePathname();

  const navItems = [
    { href: "/challenges/leaderboard", icon: <MdLeaderboard />, label: "Leaderboard" },
    { href: "/challenges/challenges", icon: <TbVs />, label: "VS" },
    { href: "/challenges/voting", icon: <FaVoteYea />, label: "Voting" },
    { href: "/challenges/battle", icon: <GiCrossedSwords />, label: "1:1" },
    { href: "/challenges/mydesign", icon: <FaCar />, label: "My Design" },
    { href: "/challenges/notifications", icon: <GiWorld />, label: "World" },
  ];

  return (
    <footer className={styles.challengesfooter}>
      <div className={styles.challengesnavContainer}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.challengesnavItem} ${
              pathname === item.href ? styles.challengesactive : ""
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}

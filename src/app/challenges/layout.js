"use client";
import Header from "../component/Challenges/Header/ChallengesHeader";
import Footer from "../component/Challenges/Footer/ChallengesFooter";
import styles from "./SpecialLayout.module.css";

export default function SpecialLayout({ children }) {
  return (
    <div className={styles.specialLayout}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}

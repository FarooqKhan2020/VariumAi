"use client";
import React from "react";
import { FaVoteYea } from "react-icons/fa"; // voting icon
import styles from "./Voting.module.css";
import Link from "next/link";

const Voting = () => {
  return (
    <div
      className={styles.votingWrapper}
      style={{ backgroundImage: "url('https://data.3dtuning.com/ui-elements/challenge_img/voting/app/671f4f39e56227e391cf4ffb.jpg')" }} // apna background image laga lena
    >
      {/* Card */}
      <div className={styles.votingCard}>
        {/* In Voting */}
        <div className={styles.votingStatus}>
          <FaVoteYea className={styles.icon} />
          <span>IN VOTING</span>
        </div>

        {/* Title */}
        <h2 className={styles.votingTitle}>ANY MODEL</h2>

        {/* Description */}
        <p className={styles.votingDescription}>
          Participate with any model in any desired style & configuration.
        </p>

        {/* Vote Button */}
        <Link href="/challenges/votingchallenge" className={styles.voteButton}>VOTE</Link>
      </div>
    </div>
  );
};

export default Voting;

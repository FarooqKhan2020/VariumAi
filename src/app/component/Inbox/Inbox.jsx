"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Inbox.module.css"; // CSS Module for styling

const Inbox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [messages] = useState([]); // yahan tum API se data la sakte ho

  // filter messages based on search
  const filteredMessages = messages.filter((msg) =>
    msg.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${styles.inboxContainer} mainPadding`}>
      {/* Heading */}
      <h1 className={`${styles.inboxTitle} mainHeading gradientcolor`}>INBOX</h1>

      {/* Top Section: Inbox count + Search */}
      <div className={styles.inboxHeader}>
        <span className={styles.inboxCount}>Inbox ({messages.length})</span>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Messages List */}
      <div className={styles.messagesList}>
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg, index) => (
            <div key={index} className={styles.messageCard}>
              <h3>{msg.title}</h3>
              <p>{msg.preview}</p>
            </div>
          ))
        ) : (
          <p className={styles.noMessages}>No messages found.</p>
        )}
      </div>
    </div>
  );
};

export default Inbox;

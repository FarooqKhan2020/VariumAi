"use client";
import React from "react";
import styles from "./ContactUs.module.css";
import '@/app/globals.css';  
const ContactUs = () => {
  return (
    <div className={styles.contactPage}>
    
      <div className={styles.descriptionMain}>
        {/* Heading */}
     {/* <h2 className="mainHeading"> */}
     <h2 className={`${styles.heading} mainHeading`}>
        <span className={styles.headingGold}>Contact</span>{" "}
        <span className={styles.headingWhite}>Us</span>
      </h2>

      {/* Description */}
      <p className={styles.description}>
        We’d love to hear from you! Whether you have questions about customization,
        need support, or want to share feedback, our team is here to help.
        At Varium, your ideas and suggestions drive us forward so don’t hesitate
        to reach out.
      </p>

 </div>
      {/* Form */}
      <div className={styles.formWrapper}>
        <h3 className={styles.formTitle}>From</h3>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
          />
          <textarea
            placeholder="Your Message....."
            rows="4"
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

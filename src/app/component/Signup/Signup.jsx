"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../Login/Login.module.css"; // same CSS use karenge
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.container}>
      {/* Left Section - Sign Up Form */}
      <div className={styles.left}>
        <h1 className={`${styles.heading} gradientcolor`}>Create Account</h1>
        <p className={styles.subheading}>
          Enter your details to create a new account
        </p>

        {/* Social Buttons */}
        <div className={styles.socialButtons}>
          <button className={styles.socialBtn}>
            <FaGoogle className={styles.icon} /> Google
          </button>
          <button className={styles.socialBtn}>
            <FaFacebookF className={styles.icon} /> Facebook
          </button>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span></span>
          Or continue with email
          <span></span>
        </div>

        {/* Form */}
        <form className={styles.form}>
          {/* <label>Name</label> */}
          <input type="text" placeholder="Enter your name" />

          {/* <label>Email</label> */}
          <input type="email" placeholder="Enter your email" />

          {/* <label>Password</label> */}
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* <label>Confirm Password</label> */}
          <div className={styles.passwordWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className={`${styles.signinBtn} mainButton`}>
            Create Account
          </button>
        </form>

        <p className={styles.signupText}>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className={styles.right}>
        <div className={styles.overlayText}>
          <h2>
            Varium <br /> AI-Powered 3D Car Customizer
          </h2>
          <p>
            Redefine the way you design cars Interior & Exterior, powered by AI.
          </p>
        </div>
        <Image
          src="/login/login2.jpg"
          alt="Car"
          fill
          className={styles.bgImage}
        />
      </div>
    </div>
  );
};

export default Signup;

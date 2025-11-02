"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Login.module.css";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      {/* Left Section - Login Form */}
      <div className={styles.left}>
        <h1 className={`${styles.heading} gradientcolor`}>Welcome Back</h1>
        <p className={styles.subheading}>
          Enter your email and password to access your account
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
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
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

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className={styles.forgot}>
              Forgot Password
            </a>
          </div>

          <button type="submit" className={`${styles.signinBtn} mainButton`}>
          {/* <button type="submit" className="mainButton"> */}
            Sign In
          </button>
        </form>

        <p className={styles.signupText}>
          Don’t have an account? <a href="/signup">Sign Up</a>
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
        //   src="/hero/car2.png" 
          src="/login/login.jpg" 
          alt="Car"
          fill
          className={styles.bgImage}
        />
      </div>
    </div>
  );
};

export default Login;

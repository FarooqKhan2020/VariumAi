// components/Navbar.jsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname(); // current route ka path
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "B2B", href: "/b2b" },
    { label: "CONTACT US", href: "/contact" },
    { label: "TERMS OF USE", href: "/terms" },
    { label: "PRIVACY POLICY", href: "/privacy" },
  ];

  // Jab pathname change ho, activeLink update ho
  useEffect(() => {
    const current = navLinks.find(link => link.href === pathname);
    if (current) {
      setActiveLink(current.label);
    }
  }, [pathname]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth < 991) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo and menu button */}
          <div className={styles.logoContainer}>
            <button
              className={styles.menuButton}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Varium Logo"
              width={150}
              height={40}
              className={styles.logo}
            />
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className={styles.navLinks}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`${styles.navLink} ${activeLink === label ? styles.active : ''}`}
                onClick={() => handleLinkClick(label)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className={styles.authButtons}>
            {/* <button className={styles.signupBtn}>sign up</button>
            <button className={styles.loginBtn}>Login</button> */}
            <Link href="/signup" className={styles.signupBtn}>
              Sign Up
            </Link>
            <Link href="/login" className={styles.loginBtn}>
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarLinks}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`${styles.sidebarLink} ${activeLink === label ? styles.active : ''}`}
                onClick={() => handleLinkClick(label)}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className={styles.sidebarButtons}>
            {/* <button className={styles.sidebarSignupBtn}>sign up</button>
            <button className={styles.sidebarLoginBtn}>Login</button> */}
            <Link href="/signup" className={styles.sidebarSignupBtn} onClick={() => handleLinkClick("SIGNUP")}>
              Sign Up
            </Link>
            <Link href="/login" className={styles.sidebarLoginBtn} onClick={() => handleLinkClick("LOGIN")} >
              Login
            </Link>
          </div>
        </div>
      </div>

      {isSidebarOpen && <div className={styles.overlay}></div>}
    </>
  );
};

export default Navbar;

// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* First Section - Logo and Description */}
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo/logof.png" // Update this path to your actual logo
              alt="Varium Logo"
              width={150}
              height={40}
              className={styles.logo}
            />
          </div>
          <p className={styles.description}>
            AI-Powered 3D Car Customization Without Limits.
          </p>
          <p className={styles.copyright}>
            © 2025 Varium LLC. All Rights Reserved.
          </p>
        </div>

        {/* Second Section - Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>QUICK LINKS</h3>
          <ul className={styles.linksList}>
            {['Home', 'Cars', 'Garage', 'AI Customizer'].map((link) => (
              <li key={link}>
                <Link href="#" className={styles.footerLink}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Section - Company */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>COMPANY</h3>
          <ul className={styles.linksList}>
            {['Challenges', 'Pricing', 'About Us', 'Contact Us'].map((link) => (
              <li key={link}>
                <Link href="#" className={styles.footerLink}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Section - Company (duplicate) */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>COMPANY</h3>
          <ul className={styles.linksList}>
            {['About Varium', 'Careers', 'Press & Media', 'Partners & Vendors'].map((link) => (
              <li key={link}>
                <Link href="#" className={styles.footerLink}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fifth Section - Legal */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>LEGAL</h3>
          <ul className={styles.linksList}>
            {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map((link) => (
              <li key={link}>
                <Link href="#" className={styles.footerLink}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section with Language and Social Icons */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <div className={styles.languageSelector}>
            English - En
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
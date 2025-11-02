"use client";
import styles from "../TermOfUse/TermsOfUse.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={`${styles.page} mainPadding`} data-testid="privacy-policy-page">
      {/* Hero Section */}
      <section className={styles.hero} data-testid="hero-section">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Section - Text */}
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle} data-testid="hero-title">
                <span className="gradientcolor" style={{ paddingRight: "7px" }}>Privacy Policy</span> 
                <span>– Varium</span>
              </h1>
              <p className={styles.heroDescription} data-testid="hero-description">
                Last updated: August 29, 2025 <br />
                This Privacy Policy explains how Varium (“Company”, “we”, “our”, or
                “us”) collects, uses, shares, and protects your information when you
                use our website, mobile application, and related services (together,
                the “Service”). By accessing or using Varium, you agree to the terms
                of this Privacy Policy.
              </p>
            </div>

            {/* Right Section - Image */}
            <div className={styles.heroImageWrapper}>
              {/* <div className={styles.gradientBottomRight}></div> */}
              <div className={styles.imageGlow}></div>
              <img
                src="/hero/car1.png"
                alt="Sleek modern sports car"
                className={styles.heroImage}
                data-testid="hero-car-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className={styles.terms} data-testid="privacy-policy-content">
        <div className={styles.termsContainer}>
          {/* Section 1 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>1. Interpretation and Definitions</h2>
            <div className={styles.paragraphs}>
              <p>
                <strong>Interpretation –</strong> Words with capitalized letters have specific meanings
                defined in this section. These definitions apply whether the terms are
                used in singular or plural.
              </p>
              <p><strong>Definitions</strong></p>
              <ul className={styles.list}>
                <li><strong>Account –</strong> A unique profile created for you to access and use Varium.</li>
                <li><strong>Application –</strong> The software, website, or platform owned and operated by Varium.</li>
                <li><strong>Cookies –</strong> Small files stored on your device to improve your browsing experience.</li>
                <li><strong>Device –</strong> Any device that can access our Service, including computers, tablets, or smartphones.</li>
                <li><strong>Personal Data –</strong> Any information that identifies or can be used to identify an individual.</li>
                <li><strong>Service –</strong> The Varium website, mobile app, and related digital experiences.</li>
                <li><strong>Service Provider –</strong> Third-party companies or individuals we work with to provide or improve our Service.</li>
                <li><strong>Usage Data –</strong> Information collected automatically when you use our Service.</li>
                <li><strong>You –</strong> The individual or company accessing or using the Service.</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>2. Information We Collect</h2>
            <div className={styles.paragraphs}>
              <p><strong>a) Personal Data</strong> – Full Name, Email, Login Info, Social Logins</p>
              <p><strong>b) Usage Data</strong> – Device type, IP, browser, pages visited, interaction history</p>
              <p><strong>c) Media & Customization Data</strong> – Car renders, uploads, builds</p>
              <p><strong>d) Location & Device Permissions</strong> – Device location, camera, photo library</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>3. Use of Your Information</h2>
            <div className={styles.paragraphs}>
              <ul className={styles.list}>
                <li>Provide, improve, and personalize our Service</li>
                <li>Manage accounts and builds</li>
                <li>Send newsletters/offers (if opted in)</li>
                <li>AI-based recommendations</li>
                <li>Enhance security & prevent fraud</li>
                <li>Respond to support requests</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>4. Cookies & Tracking</h2>
            <p>
              We use cookies, web beacons, and similar tools to keep you signed in,
              save preferences, analyze traffic, and show recommendations. You can
              control cookies in your browser.
            </p>
          </div>

          {/* Section 5 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>5. Sharing of Data</h2>
            <ul className={styles.list}>
              <li>With Service Providers – analytics, hosting, support</li>
              <li>With Affiliates/Partners – promotions</li>
              <li>For Legal Compliance</li>
              <li>With Your Consent</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>6. Data Retention</h2>
            <p>
              Personal Data is retained as long as your account is active. Inactive
              accounts may be removed after 12 months.
            </p>
          </div>

          {/* Section 7 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>7. Security of Data</h2>
            <p>
              We use encryption, firewalls, and access controls, but no service can
              guarantee 100% protection.
            </p>
          </div>

          {/* Section 8 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>8. Children’s Privacy</h2>
            <p>
              We do not knowingly collect data from children under 13. Parents may
              request deletion if such data exists.
            </p>
          </div>

          {/* Section 9 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>9. Your Privacy Rights</h2>
            <ul className={styles.list}>
              <li>Access or copy your data</li>
              <li>Update or correct data</li>
              <li>Delete account and data</li>
              <li>Opt out of promotional emails</li>
            </ul>
            <p>Contact us at: <span className={styles.accent}>privacy@varium.com</span></p>
          </div>

          {/* Section 10 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>10. Data Deletion Requests</h2>
            <p>
              You may request permanent deletion by emailing{" "}
              <span className={styles.accent}>support@varium.com</span>
            </p>
          </div>

          {/* Section 11 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>11. Changes to This Policy</h2>
            <p>
              Updates will be posted here with “Last Updated” date. Continued use
              means acceptance of changes.
            </p>
          </div>

          {/* Section 12 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>12. Contact Us</h2>
            <p>
              📧 <span className={styles.accent}>privacy@varium.com</span> <br />
              🌐 Website: www.varium.ai
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

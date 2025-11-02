"use client";
import styles from "./TermsOfUse.module.css";

export default function TermsOfUse() {
  return (
    <div className={`${styles.page} mainPadding`} data-testid="terms-of-use-page">
      {/* Hero Section */}
      <section className={styles.hero} data-testid="hero-section">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Section - Text Content */}
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle} data-testid="hero-title">
              <span className="gradientcolor">User Agreement  </span> &<br />
                <span className={styles.heroSubtitle}>Terms of Use – Varium</span>
              </h1>
              <p className={styles.heroDescription} data-testid="hero-description">
                Welcome to Varium an AI-powered 3D car customization platform. By
                creating an account or using our services, you agree to comply with
                the terms outlined below. Please read carefully before registering.
                Pressing "Register" and completing the sign-up process means that
                you fully accept this agreement.
              </p>
            </div>

            {/* Right Section - Car Image */}
            <div className={styles.heroImageWrapper}>
                <div className={styles.imageGlow}></div>
              <img
                // src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&h=800"
                 src="/hero/car1.png"
                alt="Sleek modern sports car"
                className={styles.heroImage}
                data-testid="hero-car-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className={styles.terms} data-testid="terms-content-section">
        <div className={styles.termsContainer}>
          {/* Section 1: User Behaviour */}
          <div className={styles.section} data-testid="section-user-behaviour">
            <h2 className={styles.heading}>1. User Behaviour</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> All copyrights, trademarks, and intellectual property relating to automobiles, logos, brands, and/or their parts belong to their respective manufacturers and owners.</p>
              <p><strong>ii-</strong> Any designs, renders, or builds created by the user through Varium are intended for personal and non-commercial use only.</p>
              <p><strong>iii-</strong> Users must not use Varium to:</p>
              <ul className={styles.list}>
                <li>Violate any local, national, or international laws.</li>
                <li>Upload, share, or distribute harmful, offensive, or illegal content.</li>
                <li>Conduct spam, unsolicited advertising, or mass messaging campaigns.</li>
              </ul>
              <p><strong>iv-</strong> If a user violates these terms, Varium reserves the right to suspend, block, or permanently delete the account and remove all associated data.</p>
            </div>
          </div>

          {/* Section 2: Account Responsibilities */}
          <div className={styles.section}>
            <h2 className={styles.heading}>2. Account Responsibilities</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> Registration is required to access the full functionality of Varium.</p>
              <p><strong>ii-</strong> Users are responsible for:</p>
              <ul className={styles.list}>
                <li>Providing accurate and up-to-date information during registration.</li>
                <li>Keeping their login credentials (username & password) confidential.</li>
                <li>All actions performed under their account.</li>
              </ul>
              <p><strong>iii-</strong> If unauthorized access occurs, users must immediately notify Varium administration. Varium is not responsible for losses caused by unauthorized use of accounts.</p>
            </div>
          </div>

          {/* Section 3: Confidentiality & Data Privacy */}
          <div className={styles.section}>
            <h2 className={styles.heading}>3. Confidentiality & Data Privacy</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> Varium ensures the confidentiality of user data stored on its own servers.</p>
              <p><strong>ii-</strong> Once user information travels outside Varium servers (via the Internet), Varium does not guarantee its security.</p>
              <p><strong>iii-</strong> Sensitive data such as email addresses and personal details will not be shared with third parties without consent, except as required by law.</p>
            </div>
          </div>

          {/* Section 4: Attendance Records & Analytics */}
          <div className={styles.section}>
            <h2 className={styles.heading}>4. Attendance Records & Analytics</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> To improve service quality and monitor usage, Varium may implement tools such as cookies, tracking codes, and analytics systems.</p>
              <p><strong>ii-</strong> These are used only for statistical purposes, personalization, and security, and do not compromise user privacy beyond the stated scope.</p>
            </div>
          </div>

          {/* Section 5: Service Availability & Limitations */}
          <div className={styles.section}>
            <h2 className={styles.heading}>5. Service Availability & Limitations</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> Varium strives to provide uninterrupted access but does not guarantee that the service will always be available.</p>
              <p><strong>ii-</strong> Varium is not responsible for:</p>
              <ul className={styles.list}>
                <li>Temporary failures or interruptions in service.</li>
                <li>Email or message delivery issues.</li>
                <li>Loss of user data caused by technical errors, outages, or external factors.</li>
              </ul>
              <p><strong>iii-</strong> Users agree to use the service "as is" without expecting any specific performance guarantees.</p>
            </div>
          </div>

          {/* Section 6: Account Deletion & Inactivity */}
          <div className={styles.section}>
            <h2 className={styles.heading}>6. Account Deletion & Inactivity</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> Since Varium is a free service, the administration reserves the right to delete or suspend accounts without prior notice.</p>
              <p><strong>ii-</strong> Accounts may also be automatically removed if inactive for 6 consecutive calendar months.</p>
              <p><strong>iii-</strong> Deletion of an account results in the loss of all saved builds, preferences, and user data. However, users may re-register anytime.</p>
            </div>
          </div>

          {/* Section 7: Updates & Changes to Agreement */}
          <div className={styles.section}>
            <h2 className={styles.heading}>7. Updates & Changes to Agreement</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> Varium reserves the right to modify or update this User Agreement at any time.</p>
              <p><strong>ii-</strong> Updated terms will be posted on the official Varium website.</p>
              <p><strong>iii-</strong> Continued use of the service after updates means the user accepts the new terms.</p>
              <p><strong>iv-</strong> Users are encouraged to regularly check the Agreement page for changes.</p>
            </div>
          </div>

          {/* Section 8: Data Deletion Requests */}
          <div className={styles.section}>
            <h2 className={styles.heading}>8. Data Deletion Requests</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> Users may request full deletion of their account and personal data.</p>
              <p><strong>ii-</strong> To do so, please send a request to: <span className={styles.accent}>support@varium.com</span></p>
              <p><strong>iii-</strong> Once processed, your account and related data will be permanently erased.</p>
            </div>
          </div>

          {/* Section 9: Governing Law & Jurisdiction */}
          <div className={styles.section}>
            <h2 className={styles.heading}>9. Governing Law & Jurisdiction</h2>
            <div className={styles.paragraphs}>
              <p><strong>i-</strong> This Agreement is governed by international digital service regulations and the applicable laws of the user's country of residence.</p>
              <p><strong>ii-</strong> Any disputes shall be resolved through negotiation. If unresolved, they may be brought before a competent legal authority.</p>
            </div>
          </div>

          {/* Section 10: Final Note */}
          <div className={styles.section}>
            <h2 className={styles.heading}>10. Final Note</h2>
            <div className={styles.paragraphs}>
              <p>By registering or using Varium, you acknowledge that you have read, understood, and agreed to this User Agreement. Your imagination is limitless but your actions on Varium must always follow these terms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

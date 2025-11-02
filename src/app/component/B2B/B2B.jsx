"use client";
import styles from "./B2B.module.css";


export default function B2B() {
  return (
    <div className={`${styles.page} mainPadding`} data-testid="b2b-page">
      {/* Hero Section */}
      <section className={styles.hero} data-testid="hero-section">
        <div className={styles.container}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle} data-testid="hero-title">
              <span className="gradientcolor">Varium for </span>
              <span className={styles.heroSubtitle}>Your Business</span>
            </h1>
            <p className={styles.heroDescription} data-testid="hero-description">
              The Future of AI-Powered Vehicle Customization <br />
              Varium is not just another configurator, it’s a{" "}
              <strong>next-gen platform</strong> that helps automotive brands,
              dealerships, aftermarket parts suppliers, and agencies deliver a
              truly personalized 3D experience for their customers. <br />
              Whether it’s <strong>pre-loaded stock car models</strong> or real{" "}
              <strong>customer vehicles scanned into 3D</strong>, Varium enables
              businesses to create engaging, interactive, and photorealistic car
              customization journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className={styles.imageSection} data-testid="image-section">
        <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
          <img
            // src="https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="/b2b/b2b.png"
            alt="B2B Varium Showcase"
            className={styles.b2bImage}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.terms} data-testid="b2b-content-section">
        <div className={styles.termsContainer}>
          {/* Section 1 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>Key Features for Businesses</h2>
            <div className={styles.paragraphs}>
              <p>
                <strong>1. Realistic 3D Customization</strong> <br />
                Allow customers to visualize upgrades in lifelike detail from
                wheels, paint, spoilers, and body kits to interior trims and
                dashboards. Every build looks showroom-ready.
              </p>
              <p>
                <strong>2. Real Car Scanning Integration (New)</strong> <br />
                Using tools like Polycam 3D scanning, customers can capture their
                actual car with a smartphone camera, instantly convert it into a
                3D model, and then start customizing. This creates unmatched
                personalization and sets your brand apart.
              </p>
              <p>
                <strong>3. Multi-Platform Solutions</strong> <br />
                Bring Varium to desktop, tablet, and mobile. White-label options
                let you launch a branded mobile app or integrate directly into
                your sales channels.
              </p>
              <p>
                <strong>4. Seamless Website & Dealer Integration</strong> <br />
                Our platform plugs easily into your existing website, dealership
                software, or e-commerce store with minimal setup.
              </p>
              <p>
                <strong>5. AI-Powered Upselling & Analytics</strong> <br />
                Varium’s AI learns customer preferences and suggests relevant
                parts and upgrades, driving higher sales.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>Why Choose Varium B2B?</h2>
            <ul className={styles.list}>
              <li>Differentiate your brand with real-car 3D customization</li>
              <li>Boost customer engagement & retention</li>
              <li>Increase part & accessory sales through AI recommendations</li>
              <li>Scale easily with web, app, and dealership integration</li>
              <li>
                Provide a futuristic, immersive experience that customers remember
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <h2 className={styles.heading}>Partner with Varium</h2>
            <div className={styles.paragraphs}>
              <p>
                Transform the way your customers design, explore, and connect with
                cars. Contact us today to see how Varium can power your next big
                business move.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// components/AboutVarium.jsx (corrected)
import Image from 'next/image';
import styles from './AboutVarium.module.css';

const AboutVarium = () => {
  return (
    <section className={styles.aboutSection}>
      {/* First Section */}
      <div className={styles.section}>
        <div className={styles.container}>
          {/* Left Side - Text */}
          <div className={styles.textContent}>
            <h2 className={styles.heading}>About Varium</h2>
            <p className={styles.description}>
              Founded by car and tech enthusiasts, Varium is your AI-powered 3D car tuning platform. 
              Since launching with just 20 models, we've grown to offer 600+ models, over 3 million 
              custom builds, and 700,000+ registered users. Our mission is simple: Expand parts, 
              tuning, and custom model options while offering more ways to interact because we 
              believe your imagination shouldn't have limits.
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className={styles.imageContent}>
            <Image
              src="/hero/car3.png"
              alt="Varium Platform"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.container}>
          {/* Left Side - Image */}
          <div className={styles.imageContent}>
            <Image
              src="/hero/car4.png"
              alt="Varium Vision"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
          
          {/* Right Side - Text */}
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Our Vision & Mission</h2>
            <p className={styles.description}>
              Founded by car and tech enthusiasts, Varium is your AI-powered 3D car tuning platform. 
              Since launching with just 20 models, we've grown to offer 600+ models, over 3 million 
              custom builds, and 700,000+ registered users. Our mission is simple: Expand parts, 
              tuning, and custom model options while offering more ways to interact because we 
              believe your imagination shouldn't have limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVarium;
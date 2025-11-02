"use client";
import React from "react";
import { FaCar, FaUser, FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
import styles from "./Battle.module.css";

const Battle = () => {
  return (
    <div className={styles.battleContainer}>
      {/* Main Battle Sections */}
      <div className={styles.battleSections}>
        
        {/* Challenge Section */}
        <div className={styles.battleSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <FaCar className={styles.icon} />
            </div>
            <h2 className={styles.sectionTitle}>CHOOSE CHALLENGE</h2>
            <div className={styles.sectionArrow}>
              <FaChevronDown className={styles.arrowIcon} />
            </div>
          </div>
          
          <div className={styles.sectionBody}>
            <div 
              className={styles.backgroundImage}
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop')"
              }}
            />
          </div>
        </div>

        {/* VS Section */}
        <div className={styles.battleElements}>
          <div className={styles.vsContainer}>
            <span className={styles.vsText}>VS</span>
          </div>
          <div className={styles.inviteContainer}>
            <button className={styles.inviteButton}>
              INVITE <FaLongArrowAltRight className={styles.arrowRight} />
            </button>
          </div>
        </div>

        {/* Opponent Section */}
        <div className={styles.battleSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <FaUser className={styles.icon} />
            </div>
            <h2 className={styles.sectionTitle}>RANDOM OPPONENT</h2>
            <div className={styles.sectionArrow}>
              <FaChevronDown className={styles.arrowIcon} />
            </div>
          </div>
          
          <div className={styles.sectionBody}>
            <div 
              className={styles.backgroundImage}
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop')"
              }}
            />
            <div className={styles.userImageContainer}>
              <img 
                src="https://i.pravatar.cc/150?img=12" 
                alt="Random Opponent" 
                className={styles.userImage}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Battle;














.battleContainer {
  width: 100%;
  min-height: 100vh;
  background: #000;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.battleSections {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
}

.battleSection {
  flex: 1;
  max-width: 400px;
  background: #1a1a1a;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  border: 1px solid #333;
  /* border: 1px solid white; */
}

.sectionHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: #2a2a2a;
  border-bottom: 1px solid #333;
}

.sectionIcon {
  width: 40px;
  height: 40px;
  background: #dc2626;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon {
  color: white;
  font-size: 1.2rem;
}

.sectionTitle {
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  text-align: center;
  flex: 1;
}

.sectionArrow {
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: background 0.3s;
}

.sectionArrow:hover {
  background: #444;
}

.arrowIcon {
  color: white;
  font-size: 1rem;
}

.sectionBody {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.backgroundImage {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.7);
}

.userImageContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* border: 4px solid #dc2626; */
  border: 4px solid #fff;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
}

.userImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Battle Elements Section */
.battleElements {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
}

.vsContainer {
  background: #dc2626;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(220, 38, 38, 0.5);
  border: 4px solid white;
}

.vsText {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.inviteContainer {
  display: flex;
  justify-content: center;
}

.inviteButton {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
}

.inviteButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.6);
  background: linear-gradient(135deg, #b91c1c, #991b1b);
}

.arrowRight {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .battleSections {
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  .sectionBody {
    height: 250px;
  }
  
  .userImageContainer {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .battleSections {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .battleSection {
    max-width: 100%;
    width: 100%;
  }
  
  .battleElements {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
  }
  
  .vsContainer {
    width: 70px;
    height: 70px;
  }
  
  .vsText {
    font-size: 1.3rem;
  }
  
  .sectionTitle {
    font-size: 1rem;
  }
  
  .sectionHeader {
    padding: 0.875rem 1.25rem;
  }
}

@media (max-width: 480px) {
  .battleContainer {
    padding: 1rem 0;
  }
  
  .sectionBody {
    height: 200px;
  }
  
  .userImageContainer {
    width: 80px;
    height: 80px;
  }
  
  .sectionIcon {
    width: 35px;
    height: 35px;
  }
  
  .sectionArrow {
    width: 35px;
    height: 35px;
  }
  
  .icon {
    font-size: 1rem;
  }
  
  .arrowIcon {
    font-size: 0.9rem;
  }
  
  .vsContainer {
    width: 60px;
    height: 60px;
  }
  
  .vsText {
    font-size: 1.1rem;
  }
  
  .inviteButton {
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
  }
  
  .battleElements {
    gap: 1rem;
  }
}
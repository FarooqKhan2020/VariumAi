"use client";
import Image from "next/image";
import { FaCar, FaTrophy, FaStar, FaUser } from "react-icons/fa";
import styles from "./ChallengeNotifications.module.css"; // custom css import

const challengeData = [
    {
        id: 1,
        type: "challenge",
        challenger: "farooq.khan",
        challengerImage: "/profile/profile.avif",
        battleType: "1:1 Battle",
        category: "FREESTYLE",
        date: "01.09",
        image: "/News/MERCEDES-BENZ.png", // Added image for challenge
    },
    {
        id: 2,
        type: "result",
        car: "FERRARI",
        voting: 3.33,
        place: 471,
        percentage: 21.4,
        result: "lost",
        date: "01.09",
        image: "/News/HONDACIVIC.png",
    },
    {
        id: 3,
        type: "result",
        car: "RACE INSPIRED",
        voting: 3.33,
        place: 253,
        percentage: 8.36,
        result: "lost",
        date: "29.08",
        image: "/News/TOYOTARAV4.png",
    },
    {
        id: 4,
        type: "result",
        car: "LAMBORGHINI",
        voting: 2.5,
        place: 959,
        percentage: 0.52,
        result: "won",
        date: "28.08",
        image: "/News/FORDF-350.png",
    },
];

const ChallengeNotifications = () => {
    const handleAccept = (challengeId) => {
        console.log(`Accepted challenge ${challengeId}`);
        // Add your accept logic here
    };

    const handleReject = (challengeId) => {
        console.log(`Rejected challenge ${challengeId}`);
        // Add your reject logic here
    };

    return (
        <section className={`${styles.notificationsSection}`}>

            <div className={styles.notificationsWrapper}>
                {challengeData.map((item, index) => (
                    <div key={item.id} className={styles.notificationItem}>
                        {/* Left Timeline */}
                        <div className={styles.timeline}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconCircle}>
                                    {item.type === "challenge" ? (
                                        <FaUser className={styles.icon} />
                                    ) : (
                                        <FaTrophy className={styles.icon} />
                                    )}
                                </div>
                                {/* Horizontal line */}
                                <div className={styles.line}></div>
                            </div>
                            <p className={styles.date}>{item.date}</p>
                        </div>

                        {/* Right Card */}
                        <div className={styles.card}>
                            {item.type === "challenge" ? (
                                // Challenge Request Card
                                <div className={styles.challengeContent}>
                                    <div className={styles.challengeInfo}>
                                        <div className={styles.challengeTextWrapper}>
                                            {/* First Line */}
                                            <div className={styles.notificationLine1}>
                                                <div className={styles.challengerInfo}>
                                                    <div className={styles.challengerImage}>
                                                        <Image
                                                            src={item.challengerImage}
                                                            alt={item.challenger}
                                                            width={32}
                                                            height={32}
                                                            className={styles.avatar}
                                                        />
                                                    </div>
                                                    <span className={styles.challengerName}>
                                                        {item.challenger}
                                                    </span>
                                                    <span> challenges you to </span>
                                                    <span className={styles.battleType}>
                                                        {item.battleType}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Second Line */}
                                            <div className={styles.notificationLine2}>
                                                <span>Category: </span>
                                                <span className={styles.category}>
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.challengeActions}>
                                            <button
                                                className={`${styles.actionButton} ${styles.acceptButton}`}
                                                onClick={() => handleAccept(item.id)}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className={`${styles.actionButton} ${styles.rejectButton}`}
                                                onClick={() => handleReject(item.id)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                    {/* Image for challenge */}
                                    {item.image && (
                                        <div className={styles.cardImage}>
                                            <Image
                                                src={item.image}
                                                alt="Challenge Car"
                                                fill
                                                className={styles.image}
                                            />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Result Card
                                <div className={styles.resultContent}>
                                    <div className={styles.resultInfo}>
                                        {/* First Line - Car Name */}
                                        <div className={styles.notificationLine1}>
                                            <h3 className={styles.carName}>
                                                {item.car}
                                            </h3>
                                        </div>
                                        {/* Second Line - All details in one line */}
                                        <div className={styles.notificationLine2}>
                                            <div className={styles.resultDetails}>
                                                <div className={styles.votingInfo}>
                                                    <FaStar className={styles.starIcon} />
                                                    <span>Voting: </span>
                                                    <span className={styles.votingNumber}>{item.voting}</span>
                                                </div>
                                                <div className={styles.placeInfo}>
                                                    <span>Place: </span>
                                                    <span className={styles.placeNumber}>{item.place}</span>
                                                </div>
                                                <div className={styles.percentageInfo}>
                                                    <span>(You beat {item.percentage}% of players)</span>
                                                </div>
                                                <div className={`${styles.resultStatus} ${item.result === "won" ? styles.won : styles.lost
                                                    }`}>
                                                    {item.result === "won" ? "WON" : "LOST"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image for result */}
                                    {item.image && (
                                        <div className={styles.cardImage}>
                                            <Image
                                                src={item.image}
                                                alt={item.car}
                                                fill
                                                className={styles.image}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChallengeNotifications;






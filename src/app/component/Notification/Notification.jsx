"use client";
import Image from "next/image";
import { FaCar, FaTrophy, FaStar, FaUser, FaHeart, FaComment, FaUserPlus } from "react-icons/fa";
import styles from "./Notification.module.css"; // custom css import

const notificationData = [
    {
        id: 1,
        type: "challenge",
        challenger: "farooq.khan",
        challengerImage: "/profile/profile.avif",
        battleType: "1:1 Battle",
        category: "FREESTYLE",
        date: "01.09",
        image: "/News/MERCEDES-BENZ.png",
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
        type: "friend_request",
        user: "1969fordmustangkr",
        userImage: "/profile/profile.avif",
        action: "accepted your friend request",
        date: "01.09",
        // image removed for friend request
    },
    {
        id: 4,
        type: "like",
        user: "ZC3dMY58Cr",
        userImage: "/profile/profile.avif",
        action: "likes your",
        car: "BMW M4 2019",
        date: "29.08",
        image: "/News/FORDF-350.png",
    },
    {
        id: 5,
        type: "comment",
        user: "mwaqasz1988",
        userImage: "/profile/profile.avif",
        action: "commented on your",
        car: "BMW M4 2019",
        date: "28.08",
        image: "/News/MERCEDES-BENZ.png",
    },
    {
        id: 6,
        type: "like",
        user: "mwaqasz1988",
        userImage: "/profile/profile.avif",
        action: "likes your",
        car: "BMW M4 2019",
        date: "28.08",
        image: "/News/HONDACIVIC.png",
    },
];

const Notification = () => {
    const handleAccept = (challengeId) => {
        console.log(`Accepted challenge ${challengeId}`);
        // Add your accept logic here
    };

    const handleReject = (challengeId) => {
        console.log(`Rejected challenge ${challengeId}`);
        // Add your reject logic here
    };

    const getIconForType = (type) => {
        switch (type) {
            case "challenge":
                return <FaUser className={styles.icon} />;
            case "result":
                return <FaTrophy className={styles.icon} />;
            case "friend_request":
                return <FaUserPlus className={styles.icon} />;
            case "like":
                return <FaHeart className={styles.icon} />;
            case "comment":
                return <FaComment className={styles.icon} />;
            default:
                return <FaUser className={styles.icon} />;
        }
    };

    return (
        <section className={`${styles.notificationsSection} mainPadding`}>
                {/* Heading */}
      <h2 className={`${styles.notificationsTitle} mainHeading gradientcolor`}>NOTIFICATIONS</h2>
            <div className={styles.notificationsWrapper}>
                {notificationData.map((item) => (
                    <div key={item.id} className={styles.notificationItem}>
                        {/* Left Timeline */}
                        <div className={styles.timeline}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconCircle}>
                                    {getIconForType(item.type)}
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
                            ) : item.type === "result" ? (
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
                            ) : (
                                // General Notifications (Friend Request, Like, Comment)
                                <div className={styles.generalContent}>
                                    <div className={styles.generalInfo}>
                                        <div className={styles.generalTextWrapper}>
                                            {/* First Line */}
                                            <div className={styles.notificationLine1}>
                                                <div className={styles.userInfo}>
                                                    <div className={styles.userImage}>
                                                        <Image
                                                            src={item.userImage}
                                                            alt={item.user}
                                                            width={32}
                                                            height={32}
                                                            className={styles.avatar}
                                                        />
                                                    </div>
                                                    <span className={styles.userName}>
                                                        {item.user}
                                                    </span>
                                                    <span> {item.action} </span>
                                                    {item.car && (
                                                        <span className={styles.carNameGeneral}>
                                                            {item.car}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Buttons removed for friend request */}
                                    </div>
                                    {/* Image only for like and comment notifications, not for friend request */}
                                    {item.image && item.type !== "friend_request" && (
                                        <div className={styles.cardImage}>
                                            <Image
                                                src={item.image}
                                                alt={item.car || "Notification"}
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

export default Notification;
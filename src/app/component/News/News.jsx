"use client";
import Image from "next/image";
import { FaCar, FaTruck } from "react-icons/fa";
import styles from "./News.module.css"; // custom css import
import Link from "next/link";

const newsData = [
    {
        date: "01.09",
        title: "2022 HONDA CIVIC TYPE R",
        text: "More wheels available",
        image: "/News/HONDACIVIC.png",
        type: "car",
    },
    {
        date: "01.09",
        title: "2019 TOYOTA RAV4",
        text: "Albermo XR52 Body Kit added",
        image: "/News/TOYOTARAV4.png",
        type: "car",
    },
    {
        date: "29.08",
        title: "2023 FORD F-350 DRW CREW CAB",
        text: "More wheels available",
        image: "/News/FORDF-350.png",
        type: "truck",
    },
    {
        date: "29.08",
        title: "2023 FORD F-350 DRW CREW CAB",
        text: "More wheels available",
        image: "/News/FORDF-350.png",
        type: "truck",
    },
    {
        date: "28.08",
        title: "2011 MERCEDES-BENZ SLS",
        text: "Coming Soon",
        image: "/News/MERCEDES-BENZ.png",
        type: "car",
    },
];

const News = () => {
    return (
        <section className={`${styles.newsSection} mainPadding`}>
            <h2 className={`${styles.heading} mainHeading`}>
            <span className="gradientcolor">VARIUM</span> News & Updates
            </h2>

            <div className={styles.newsWrapper}>
                {newsData.map((item, index) => (
                    <Link href="/" key={index} className={styles.newsItem}>
                        {/* Left Timeline */}
                        <div className={styles.timeline}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconCircle}>
                                    {item.type === "car" ? (
                                        <FaCar className={styles.icon} />
                                    ) : (
                                        <FaTruck className={styles.icon} />
                                    )}
                                </div>
                                {/* Horizontal line */}
                                <div className={styles.line}></div>
                            </div>
                            <p className={styles.date}>{item.date}</p>
                        </div>

                        {/* Right Card */}
                        <div className={styles.card}>
                            <div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.text}</p>
                            </div>
                            <div className={styles.cardImage}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default News;

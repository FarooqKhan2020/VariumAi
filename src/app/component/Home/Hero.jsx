"use client";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import styles from './Hero.css';
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import Link from 'next/link';

const cars = [
    "/hero/car1.png", // apni images dalen public/hero/ folder mein
    "/hero/car2.png",
    "/hero/car3.png",
    "/hero/car4.png",
    "/hero/car6.png",
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrent((prev) => (prev === cars.length - 1 ? 0 : prev + 1));

    return (
        <section
            className={`bg-hero-gradient relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16 text-white overflow-hidden ${inter.variable}`}
        >
            {/* Left Content */}
            <div className="max-w-lg space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-snug italic">
                    <span
                        className="italic"
                        style={{
                            background: "linear-gradient(180deg, #E1BC88 0%, #7B674A 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            padding: "0 5px",
                        }}
                    >
                        Your Ultimate AI
                    </span>
                    <br />
                    <span className="text-white">Car Customization Configurator</span>
                </h1>

                <p className="text-gray-300 leading-relaxed italic">
                    Explore Varium’s 3D car configurator. Customize a variety of vehicles
                    with AI-generated designs, real vendor parts, materials, and tuning
                    options. Unleash creativity and join our community.
                </p>

                <Link href="/configurator" className="px-6 py-3 rounded-full bg-[#2F2F2F] text-white font-medium border border-[#444] hover:bg-[#3A3A3A] hover:border-[#666] transition cursor-pointer">
                    Start Configurator
                </Link>

            </div>

            {/* Right Side Slider */}
            <div className="relative mt-10 md:mt-0 w-full md:w-1/2 flex justify-center items-center overflow-hidden">
                {/* Curved Line Background */}
                <svg
                    className="absolute bottom-0 w-[90%] h-40"
                    viewBox="0 0 500 100"
                    fill="none"
                >
                    <path
                        d="M10,90 Q250,10 490,90"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                        fill="transparent"
                    />
                </svg>

                {/* Car Images */}
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-[90%] h-[300px] md:h-[400px] flex justify-center items-center overflow-hidden"
                >
                    <Image
                        src={cars[current]}
                        alt="Car"
                        width={700}
                        height={400}
                        className="object-contain"
                    />
                </motion.div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-4 flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                        <FaChevronCircleLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                        <FaChevronCircleRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}

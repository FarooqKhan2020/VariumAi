// // components/OurServices.jsx
// import Image from 'next/image';
// import { FaArrowRight } from 'react-icons/fa';
// import styles from './OurServices.module.css';

// const OurServices = () => {
//   return (
//     <section className={styles.servicesSection}>
//       {/* Main Heading */}
//       <div className={styles.headingContainer}>
//         <h1 className={styles.mainHeading}>Our Services</h1>
//         <h2 className={styles.servicesHeading}>SERVICES</h2>
//       </div>

//       {/* Exterior Customization Section */}
//       <div className={styles.section}>
//         <h3 className={styles.sectionTitle}>Exterior Customization</h3>

//         {/* First Row - Body & Style Upgrades */}
//         <div className={styles.serviceRow}>
//           <div className={styles.textContent}>
//             <h4 className={styles.serviceTitle}>Body & Style Upgrades</h4>
//             <p className={styles.serviceDescription}>
//               Change wheels, rims, spoilers, wraps, lights, and full body kits to transform your car's look.
//             </p>
//             <Link href="#" className={styles.learnMoreBtn}>
//               Learn More <FaArrowRight className={styles.arrowIcon} />
//             </Link>
//           </div>
//           <div className={styles.imageContent}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src="/hero/car5.png"
//                 alt="Exterior Customization"
//                 width={400}
//                 height={300}
//                 className={styles.serviceImage}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Second Row - Paint & Effects */}
//         <div className={`${styles.serviceRow} ${styles.reverseRow}`}>
//           <div className={styles.imageContent}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src="/hero/car2.png"
//                 alt="Paint & Effects"
//                 width={400}
//                 height={300}
//                 className={styles.serviceImage}
//               />
//             </div>
//           </div>
//           <div className={styles.textContent}>
//             <h4 className={styles.serviceTitle}>Paint & Effects</h4>
//             <p className={styles.serviceDescription}>
//               Experiment with premium colors, metallic finishes, and AI-generated custom patterns for a unique style.
//             </p>
//             <Link href="#" className={styles.learnMoreBtn}>
//               Learn More <FaArrowRight className={styles.arrowIcon} />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Interior Customization Section */}
//       <div className={styles.section}>
//         <h3 className={styles.sectionTitle}>Interior Customization</h3>

//         {/* First Row - Seating & Dashboard */}
//         <div className={styles.serviceRow}>
//           <div className={styles.textContent}>
//             <h4 className={styles.serviceTitle}>Seating & Dashboard</h4>
//             <p className={styles.serviceDescription}>
//               Redesign seats, fabrics, dashboard, and steering with luxury finishes.
//             </p>
//             <Link href="#" className={styles.learnMoreBtn}>
//               Learn More <FaArrowRight className={styles.arrowIcon} />
//             </Link>
//           </div>
//           <div className={styles.imageContent}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src="/hero/interior1.png"
//                 alt="Interior Customization"
//                 width={400}
//                 height={300}
//                 className={styles.serviceImage}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Second Row - Tech & Comfort */}
//         <div className={`${styles.serviceRow} ${styles.reverseRow}`}>
//           <div className={styles.imageContent}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src="/hero/interior2.png"
//                 alt="Tech & Comfort"
//                 width={400}
//                 height={300}
//                 className={styles.serviceImage}
//               />
//             </div>
//           </div>
//           <div className={styles.textContent}>
//             <h4 className={styles.serviceTitle}>Tech & Comfort</h4>
//             <p className={styles.serviceDescription}>
//               Upgrade infotainment systems, lighting, and cabin accessories to match your lifestyle.
//             </p>
//             <Link href="#" className={styles.learnMoreBtn}>
//               Learn More <FaArrowRight className={styles.arrowIcon} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;




// components/OurServices.jsx
"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import styles from './OurServices.module.css';
import Link from "next/link";

export default function OurServices() {
    return (
        <section className={styles.servicesSection}>
            {/* Background big text "SERVICES" */}
            <h1 className={styles.backgroundText}>
                SERVICES
            </h1>

            {/* Our Services Heading */}
            <div className={styles.mainHeading}>
                <h2 className={styles.ourServicesTitle}>
                    Our Services
                </h2>
                <p className={styles.exteriorTitle}>
                    Exterior Customization
                </p>
            </div>

            {/* Exterior Customization Sections */}
            <div className={styles.serviceContainer}>
                {/* First Row - Body & Style Upgrades */}
                <div className={styles.serviceRow}>
                    <div className={styles.textContent}>
                        <h3 className={styles.serviceSubtitle}>
                            Body & Style Upgrades
                        </h3>
                        <p className={styles.serviceDescription}>
                            {/* Change wheels, rims, spoilers, wraps, lights, and full body kits to transform your car's look. */}
                            Upgrade your ride with custom wheels, rims, spoilers, wraps, and lighting options.
                            Go bold with a full body kit or keep it subtle with sleek style upgrades.
                            Whether you want a sporty edge or a luxury finish, transform your car’s look your way.
                        </p>
                        <Link href="#" className={styles.learnMoreBtn}>
                            Learn More <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>
                    <div className={styles.imageContent}>
                        <Image
                            src="/hero/BlueCar.png"
                            alt="Blue Car"
                            width={600}
                            height={400}
                            className={styles.serviceImage}
                        />
                    </div>
                </div>

                {/* Second Row - Paint & Effects */}
                <div className={`${styles.serviceRow} ${styles.reverseRow1}`}>
                    <div className={styles.imageContent}>
                        <Image
                            src="/hero/RedCar.png"
                            alt="Red Car"
                            width={600}
                            height={400}
                            className={styles.serviceImage}
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h3 className={styles.serviceSubtitle}>
                            Paint & Effects
                        </h3>
                        <p className={styles.serviceDescription}>
                            Experiment with premium colors, metallic finishes, and AI-generated custom patterns for a unique style.
                        </p>
                        <Link href="#" className={styles.learnMoreBtn}>
                            Learn More <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Interior Customization Heading */}
            <div className={styles.interiorHeading}>
                <h2 className={styles.interiorTitle}>
                    Interior Customization
                </h2>
            </div>

            {/* Interior Customization Sections */}
            <div className={styles.serviceContainer}>
                {/* First Row - Seating & Dashboard */}
                <div className={styles.serviceRow}>
                    <div className={styles.textContent}>
                        <h3 className={styles.serviceSubtitle}>
                            Seating & Dashboard
                        </h3>
                        <p className={styles.serviceDescription}>
                            Redesign seats, fabrics, dashboard, and steering with luxury finishes.
                        </p>
                        <Link href="#" className={styles.learnMoreBtn}>
                            Learn More <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>
                    <div className={styles.imageContent}>
                        <Image
                            src="/hero/interior1.png"
                            alt="Interior Car"
                            width={600}
                            height={400}
                            className={styles.serviceImage}
                        />
                    </div>
                </div>

                {/* Second Row - Tech & Comfort */}
                <div className={`${styles.serviceRow} ${styles.reverseRow1}`}>
                    <div className={styles.imageContent}>
                        <Image
                            src="/hero/interior2.png"
                            alt="Interior Car 2"
                            width={600}
                            height={400}
                            className={styles.serviceImage}
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h3 className={styles.serviceSubtitle}>
                            Tech & Comfort
                        </h3>
                        <p className={styles.serviceDescription}>
                            Upgrade infotainment systems, lighting, and cabin accessories to match your lifestyle.
                        </p>
                        <Link href="#" className={styles.learnMoreBtn}>
                            Learn More <FaArrowRight className={styles.arrowIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
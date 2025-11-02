// components/AboutPage.jsx
import React from 'react';
import Image from 'next/image';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
 {/* Gradient Background Effects */}
  <div className={styles.gradientTopLeft}></div>
  <div className={styles.gradientTopRight}></div>
  <div className={styles.gradientBottomLeft}></div>
  <div className={styles.gradientBottomRight}></div>
  <div className={styles.gradientCenter}></div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={`${styles.mainTitle} mainHeading`}>
         <span className={styles.gradientText}>About </span> Varium
        </h1>
        
        <div className={styles.heroContent}>
          <h2 className={styles.sectionSubtitle}>Who We Are</h2>
          <p className={styles.description}>
            Varium is an international platform built by passionate car lovers, creative designers, and AI innovators. Our vision goes beyond just being a simple car configurator. Varium is a next-generation ecosystem where artificial intelligence meets automotive design, giving every car enthusiast the freedom to create, customize, and transform vehicles in ways that were never possible before. At Varium, we believe that every car has a personality and through our platform, you can express your imagination, whether it's a realistic modification or a futuristic concept.
          </p>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className={styles.section}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            
            <div className={styles.paragraphGroup}>
              <p className={styles.paragraph}>
                We started small with just 20 car models and a handful of basic tuning parts. It was the foundation of our dream: to give people a platform where they could bring their creative car visions to life.
              </p>
              
              <p className={styles.paragraph}>
                Over time, Varium has grown into one of the most advanced AI-powered car customization platforms in the world. Today, we proudly offer 600+ car models, thousands of tuning options, and millions of saved builds created by users from across the globe.
              </p>
              
              <p className={styles.paragraph}>
                With a thriving community of 700,000+ registered users, Varium is no longer just a tool it has become a global hub for car lovers to design, share, and inspire each other.
              </p>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/about/YellowCar.png"
                alt="Yellow McLaren with doors open"
                width={500}
                height={350}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className={styles.section}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/about/SkyBlueCar.png"
                alt="Blue BMW M3 front view"
                width={500}
                height={350}
                className={styles.image}
              />
            </div>
          </div>
          
       <div className={styles.textContent}>
  <h2 className={styles.sectionTitle}>What We Offer</h2>

  <div className={styles.paragraphGroup}>
    <p className={styles.paragraph}>
      <strong>1- Interior Customization:</strong> Go beyond the surface. From seats and dashboards 
      to cabin lighting and trims, redesign your car's interior to perfectly match your style, 
      comfort, and personality.
    </p>

    <p className={styles.paragraph}>
      <strong>2- Exterior Tuning:</strong> Change the way the world sees your ride. Upgrade wheels, 
      spoilers, body kits, wraps, and paint finishes with photorealistic accuracy to give your car a 
      bold new identity.
    </p>

    <p className={styles.paragraph}>
      <strong>3- AI-Powered Suggestions:</strong> Stuck for ideas? Our AI engine recommends styles, 
      color palettes, and part combinations — helping you discover builds you never thought possible.
    </p>

    <p className={styles.paragraph}>
      <strong>4- Community & Sharing:</strong> Save your builds, showcase them in the community 
      gallery, and engage with other tuners worldwide. Share your creativity, get inspired, and be 
      part of a fast-growing global community of car enthusiasts.
    </p>
  </div>
</div>

        </div>
      </div>

      {/* Our Mission Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        
        <div className={styles.missionContent}>
          <p className={styles.paragraph}>
            We believe car design should be limitless not restricted by parts catalogs or imagination. That's why Varium is built with one clear mission:
          </p>
          
          <div className={styles.missionList}>
            <div className={styles.missionItem}>
              <span className={styles.bullet}>•</span>
              <p className={styles.missionText}>
                Expand the range and quality of car models & tuning parts, so enthusiasts always have more options to explore.
              </p>
            </div>
            
            <div className={styles.missionItem}>
              <span className={styles.bullet}>•</span>
              <p className={styles.missionText}>
                Provide smarter, AI-driven tools that make personalization easier, faster, and more creative than ever before.
              </p>
            </div>
            
            <div className={styles.missionItem}>
              <span className={styles.bullet}>•</span>
              <p className={styles.missionText}>
                Make customization interactive and inspiring by combining technology, design, and community in one place.
              </p>
            </div>
          </div>
          
          <p className={styles.paragraph}>
            At Varium, your imagination is our blueprint.
          </p>
        </div>
      </div>

      {/* Our Future Section */}
      <div className={styles.section}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Future</h2>
            
            <div className={styles.paragraphGroup}>
              <p className={styles.paragraph}>
                The journey has just begun. With advancements in AI technology and partnerships with real-world vendors, we are working towards bridging the gap between virtual designs and real-life customization.
              </p>
              
              <p className={styles.paragraph}>
                Very soon, Varium won't just be a digital playground it will be a platform where your dream builds can influence real automotive personalization.
              </p>
              
              <p className={styles.paragraph}>
                Because in the end, at Varium, the only limit to your car build is your imagination.
              </p>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/about/BlackCar.png"
                alt="Black Ferrari sports car"
                width={500}
                height={350}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


// import React from 'react';
// import Image from 'next/image';

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
//       {/* Hero Section */}
//       <div className="px-8 py-16 max-w-7xl mx-auto">
//         <h1 
//           className="text-6xl md:text-7xl lg:text-8xl font-bold italic mb-8"
//           style={{
//             background: 'linear-gradient(180deg, #E1BC88 0%, #7B674A 100%)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}
//         >
//           About Varium
//         </h1>
        
//         <div className="max-w-4xl">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6">Who We Are</h2>
//           <p className="text-lg md:text-xl leading-relaxed text-gray-300">
//             Varium is an international platform built by passionate car lovers, creative designers, and AI innovators. Our vision goes beyond just being a simple car configurator. Varium is a next-generation ecosystem where artificial intelligence meets automotive design, giving every car enthusiast the freedom to create, customize, and transform vehicles in ways that were never possible before. At Varium, we believe that every car has a personality and through our platform, you can express your imagination, whether it's a realistic modification or a futuristic concept.
//           </p>
//         </div>
//       </div>

//       {/* Our Journey Section */}
//       <div className="px-8 py-16 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Journey</h2>
            
//             <div className="space-y-6">
//               <p className="text-lg leading-relaxed text-gray-300">
//                 We started small with just 20 car models and a handful of basic tuning parts. It was the foundation of our dream: to give people a platform where they could bring their creative car visions to life.
//               </p>
              
//               <p className="text-lg leading-relaxed text-gray-300">
//                 Over time, Varium has grown into one of the most advanced AI-powered car customization platforms in the world. Today, we proudly offer 600+ car models, thousands of tuning options, and millions of saved builds created by users from across the globe.
//               </p>
              
//               <p className="text-lg leading-relaxed text-gray-300">
//                 With a thriving community of 700,000+ registered users, Varium is no longer just a tool it has become a global hub for car lovers to design, share, and inspire each other.
//               </p>
//             </div>
//           </div>
          
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md lg:max-w-lg">
//               <Image
//                 src="/about/YellowCar.png"
//                 alt="Yellow McLaren with doors open"
//                 width={500}
//                 height={350}
//                 className="rounded-lg"
//                 style={{ objectFit: 'cover' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* What We Offer Section */}
//       <div className="px-8 py-16 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="order-2 lg:order-1">
//             <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
//               <Image
//                 src="/hero/car1.png"
//                 alt="Blue BMW M3 front view"
//                 width={500}
//                 height={350}
//                 className="rounded-lg"
//                 style={{ objectFit: 'cover' }}
//               />
//             </div>
//           </div>
          
//           <div className="order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">What We Offer</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">1- Interior Customization</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   Go beyond the surface. From seats and dashboards to cabin lighting and trims, redesign your car's interior to perfectly match your style, comfort, and personality.
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">2- Exterior Tuning</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   Change the way the world sees your ride. Upgrade wheels, spoilers, body kits, wraps, and paint finishes with photorealistic accuracy to give your car a bold new identity.
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">3- AI-Powered Suggestions</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   Stuck for ideas? Our AI engine recommends styles, color palettes, and part combinations — helping you discover builds you never thought possible.
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">4- Community & Sharing</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   Save your builds, showcase them in the community gallery, and engage with other tuners worldwide. Share your creativity, get inspired, and be part of a fast-growing global community of car enthusiasts.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Mission Section */}
//       <div className="px-8 py-16 max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
        
//         <div className="max-w-4xl mb-8">
//           <p className="text-lg leading-relaxed text-gray-300 mb-6">
//             We believe car design should be limitless not restricted by parts catalogs or imagination. That's why Varium is built with one clear mission:
//           </p>
          
//           <div className="space-y-4 ml-6">
//             <div className="flex items-start">
//               <span className="text-yellow-400 mr-3 mt-1">•</span>
//               <p className="text-gray-300 leading-relaxed">
//                 Expand the range and quality of car models & tuning parts, so enthusiasts always have more options to explore.
//               </p>
//             </div>
            
//             <div className="flex items-start">
//               <span className="text-yellow-400 mr-3 mt-1">•</span>
//               <p className="text-gray-300 leading-relaxed">
//                 Provide smarter, AI-driven tools that make personalization easier, faster, and more creative than ever before.
//               </p>
//             </div>
            
//             <div className="flex items-start">
//               <span className="text-yellow-400 mr-3 mt-1">•</span>
//               <p className="text-gray-300 leading-relaxed">
//                 Make customization interactive and inspiring by combining technology, design, and community in one place.
//               </p>
//             </div>
//           </div>
          
//           <p className="text-lg leading-relaxed text-gray-300 mt-6">
//             At Varium, your imagination is our blueprint.
//           </p>
//         </div>
//       </div>

//       {/* Our Future Section */}
//       <div className="px-8 py-16 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Future</h2>
            
//             <div className="space-y-6">
//               <p className="text-lg leading-relaxed text-gray-300">
//                 The journey has just begun. With advancements in AI technology and partnerships with real-world vendors, we are working towards bridging the gap between virtual designs and real-life customization.
//               </p>
              
//               <p className="text-lg leading-relaxed text-gray-300">
//                 Very soon, Varium won't just be a digital playground it will be a platform where your dream builds can influence real automotive personalization.
//               </p>
              
//               <p className="text-lg leading-relaxed text-gray-300">
//                 Because in the end, at Varium, the only limit to your car build is your imagination.
//               </p>
//             </div>
//           </div>
          
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md lg:max-w-lg">
//               <Image
//                 src="/hero/car1.png"
//                 alt="Black Ferrari sports car"
//                 width={500}
//                 height={350}
//                 className="rounded-lg"
//                 style={{ objectFit: 'cover' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



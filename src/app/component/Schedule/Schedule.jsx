// "use client";
// import React, { useState } from 'react';
// import { FaThumbsUp, FaSearch  } from "react-icons/fa";

// const Schedule = () => {
//   const [activeTab, setActiveTab] = useState('American Trucks');
//   const [likedCars, setLikedCars] = useState(new Set());
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('Likes');

// //   const carsData = {
// //     'American Trucks': [
// //       { id: 8, name: 'Ford Super Duty 2023', likes: 1234, image: 'https://data.3dtuning.com/news/we9v3nloq.jpg', label: 'COMING SOON', labelColor: 'bg-red-500' },
// //       { id: 3, name: 'Toyota Tacoma 2024', likes: 2156, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 2, name: 'GMC Sierra 1500 2007', likes: 1876, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 5, name: 'Ford Bronco 1970', likes: 3421, image: '', label: 'COMING SOON', labelColor: 'bg-red-500' },
// //       { id: 4, name: 'Ford Ranger 2023', likes: 987, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 7, name: 'Toyota Hilux 2024', likes: 1654, image: '', label: 'COMING SOON', labelColor: 'bg-red-500' },
// //       { id: 6, name: 'Ford F-150 Raptor 2024', likes: 2987, image: '', label: 'COMING SOON', labelColor: 'bg-red-500' },
// //       { id: 1, name: 'Chevrolet Silverado HD 2007', likes: 1543, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 15, name: 'GMC Canyon 2024', likes: 1859, image: '' },
// //       { id: 9, name: 'GMC Sierra 2500 2024', likes: 3647, image: '' },
// //       { id: 25, name: 'Toyota 4Runner 2024', likes: 1095, image: '' },
// //       { id: 44, name: 'Dodge Dakota 1987-1996', likes: 741, image: '' },
// //       { id: 50, name: 'Dodge C series 1957', likes: 723, image: '' },
// //       { id: 46, name: 'GMC 100 1948', likes: 735, image: '' },
// //       { id: 38, name: 'Ford Bronco Sport 2021', likes: 822, image: '' },
// //       { id: 35, name: 'Chevrolet Silverado EV 2024', likes: 884, image: '' }
// //     ],
// //     'American Muscle': [
// //       { id: 101, name: 'Dodge Challenger SRT 2023', likes: 4521, image: '', label: 'AVAILABLE IN HD', labelColor: 'bg-green-500' },
// //       { id: 102, name: 'Ford Mustang GT 2024', likes: 3876, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 103, name: 'Chevrolet Camaro ZL1 2023', likes: 3234, image: '', label: 'COMING SOON', labelColor: 'bg-red-500' },
// //       { id: 104, name: 'Dodge Charger Hellcat 2022', likes: 2987, image: '', label: 'AVAILABLE IN HD', labelColor: 'bg-green-500' }
// //     ],
// //     'All Cars': [
// //       { id: 8, name: 'Ford Super Duty 2023', likes: 1234, image: 'https://data.3dtuning.com/news/we9v3nloq.jpg', label: 'COMING SOON', labelColor: 'bg-red-500' },
// //       { id: 3, name: 'Toyota Tacoma 2024', likes: 2156, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 101, name: 'Dodge Challenger SRT 2023', likes: 4521, image: '', label: 'AVAILABLE IN HD', labelColor: 'bg-green-500' },
// //       { id: 2, name: 'GMC Sierra 1500 2007', likes: 1876, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 102, name: 'Ford Mustang GT 2024', likes: 3876, image: '', label: 'UPDATED', labelColor: 'bg-yellow-500' },
// //       { id: 5, name: 'Ford Bronco 1970', likes: 3421, image: '', label: 'COMING SOON', labelColor: 'bg-red-500' }
// //     ]
// //   };

//     const carsData = {
//     'American Trucks': [
//       { id: 8, name: 'Ford Super Duty 2023', likes: 1234, image: 'https://images.unsplash.com/photo-1631433048456-42126b541bfb?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Df', label: 'COMING SOON', labelColor: 'bg-red-500' },
//       { id: 3, name: 'Toyota Tacoma 2024', likes: 2156, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 2, name: 'GMC Sierra 1500 2007', likes: 1876, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 5, name: 'Ford Bronco 1970', likes: 3421, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'COMING SOON', labelColor: 'bg-red-500' },
//       { id: 4, name: 'Ford Ranger 2023', likes: 987, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 7, name: 'Toyota Hilux 2024', likes: 1654, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'COMING SOON', labelColor: 'bg-red-500' },
//       { id: 6, name: 'Ford F-150 Raptor 2024', likes: 2987, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'COMING SOON', labelColor: 'bg-red-500' },
//       { id: 1, name: 'Chevrolet Silverado HD 2007', likes: 1543, image: 'https://images.unsplash.com/photo-1505343372103-a5df37706406?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 15, name: 'GMC Canyon 2024', likes: 1859, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
//       { id: 9, name: 'GMC Sierra 2500 2024', likes: 3647, image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
//       { id: 25, name: 'Toyota 4Runner 2024', likes: 1095, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
//       { id: 44, name: 'Dodge Dakota 1987-1996', likes: 741, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 50, name: 'Dodge C series 1957', likes: 723, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
//       { id: 46, name: 'GMC 100 1948', likes: 735, image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
//       { id: 38, name: 'Ford Bronco Sport 2021', likes: 822, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
//       { id: 35, name: 'Chevrolet Silverado EV 2024', likes: 884, image: 'https://images.unsplash.com/photo-1635975480664-d761cf657730?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ],
//     'American Muscle': [
//       { id: 101, name: 'Dodge Challenger SRT 2023', likes: 4521, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'AVAILABLE IN HD', labelColor: 'bg-green-500' },
//       { id: 102, name: 'Ford Mustang GT 2024', likes: 3876, image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 103, name: 'Chevrolet Camaro ZL1 2023', likes: 3234, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'COMING SOON', labelColor: 'bg-red-500' },
//       { id: 104, name: 'Dodge Charger Hellcat 2022', likes: 2987, image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'AVAILABLE IN HD', labelColor: 'bg-green-500' }
//     ],
//     'All Cars': [
//       { id: 8, name: 'Ford Super Duty 2023', likes: 1234, image: 'https://images.unsplash.com/photo-1631433048456-42126b541bfb?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Df', label: 'COMING SOON', labelColor: 'bg-red-500' },
//       { id: 3, name: 'Toyota Tacoma 2024', likes: 2156, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 101, name: 'Dodge Challenger SRT 2023', likes: 4521, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'AVAILABLE IN HD', labelColor: 'bg-green-500' },
//       { id: 2, name: 'GMC Sierra 1500 2007', likes: 1876, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 102, name: 'Ford Mustang GT 2024', likes: 3876, image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: 'bg-yellow-500' },
//       { id: 5, name: 'Ford Bronco 1970', likes: 3421, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'COMING SOON', labelColor: 'bg-red-500' }
//     ]
//   };

//   const handleLike = (carId) => {
//     const newLikedCars = new Set(likedCars);
//     if (newLikedCars.has(carId)) {
//       newLikedCars.delete(carId);
//     } else {
//       newLikedCars.add(carId);
//     }
//     setLikedCars(newLikedCars);
//   };

//   const filteredCars = carsData[activeTab]?.filter(car =>
//     car.name.toLowerCase().includes(searchQuery.toLowerCase())
//   ) || [];

//   const sortedCars = [...filteredCars].sort((a, b) => {
//     if (sortBy === 'Likes') {
//       return b.likes - a.likes;
//     } else if (sortBy === 'A-Z') {
//       return a.name.localeCompare(b.name);
//     }
//     return 0;
//   });

//   const totalModels = carsData[activeTab]?.length || 0;

//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       {/* First Section - Voting Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div className="text-lg">
//           <span className="text-white">{totalModels} Models Available for Voting</span>
//         </div>
//         <div className="flex space-x-1">
//           {['American Trucks', 'American Muscle', 'All Cars'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 text-sm font-medium transition-colors ${
//                 activeTab === tab
//                   ? 'bg-white text-black'
//                   : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Second Section - Filters */}
//       <div className="flex justify-between items-center mb-8">
//         <div className="flex space-x-6">
//           <button
//             onClick={() => setSortBy('Likes')}
//             className={`flex items-center space-x-2 ${
//               sortBy === 'Likes' ? 'text-white' : 'text-gray-400 hover:text-white'
//             }`}
//           >
//             <span className="text-lg">▼</span>
//             <span>Likes</span>
//           </button>
//           <button
//             onClick={() => setSortBy('A-Z')}
//             className={`flex items-center space-x-2 ${
//               sortBy === 'A-Z' ? 'text-white' : 'text-gray-400 hover:text-white'
//             }`}
//           >
//             <span className="text-lg">▼</span>
//             <span>A-Z</span>
//           </button>
//         </div>
//         <div className="relative w-96">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
//           />
//           <FaSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//         </div>
//       </div>

//       {/* Third Section - Car Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {sortedCars.map((car) => (
//           <div key={car.id} className="relative group">
//             <div className="relative overflow-hidden rounded-lg">
//               {/* Car Image */}
//               <div 
//                 className="w-full h-48 bg-cover bg-center"
//                 style={{
//                   backgroundImage: car.image 
//                     ? `url(${car.image})` 
//                     : `linear-gradient(45deg, #4a5568 25%, transparent 25%), 
//                        linear-gradient(-45deg, #4a5568 25%, transparent 25%), 
//                        linear-gradient(45deg, transparent 75%, #4a5568 75%), 
//                        linear-gradient(-45deg, transparent 75%, #4a5568 75%)`,
//                   backgroundColor: car.image ? 'transparent' : '#2d3748',
//                   backgroundSize: car.image ? 'cover' : '20px 20px',
//                   backgroundPosition: car.image ? 'center' : '0 0, 0 10px, 10px -10px, -10px 0px'
//                 }}
//               >
//                 {/* Status Label */}
//                 {car.label && (
//                   <div className={`absolute top-2 left-2 ${car.labelColor} text-white text-xs px-2 py-1 rounded font-medium`}>
//                     {car.label}
//                   </div>
//                 )}

//                 {/* Like Button */}
//                 <button
//                   onClick={() => handleLike(car.id)}
//                   className={`absolute top-2 right-2 p-2 rounded-full transition-all ${
//                     likedCars.has(car.id)
//                       ? 'bg-black bg-opacity-80 text-white'
//                       : 'bg-black bg-opacity-50 text-gray-300 hover:bg-opacity-70'
//                   }`}
//                 >
//                   <FaThumbsUp className={`h-4 w-4 ${likedCars.has(car.id) ? 'fill-white' : ''}`} />
//                 </button>

//                 {/* Likes Counter */}
//                 {car.likes > 0 && (
//                   <div className="absolute top-2 left-2 mt-8 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
//                     + {car.likes.toLocaleString()}
//                   </div>
//                 )}
//               </div>

//               {/* Car Info */}
//               <div className="bg-black bg-opacity-90 text-white p-3">
//                 <div className="text-sm font-medium">
//                   <span className="text-gray-300">#{car.id}</span>
//                   <span className="ml-2">{car.name}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Show message if no cars found */}
//       {sortedCars.length === 0 && (
//         <div className="text-center text-gray-400 mt-12">
//           No cars found matching your search criteria.
//         </div>
//       )}
//     </div>
//   );
// };

// export default Schedule;









"use client";
import React, { useState } from 'react';
import { FaThumbsUp, FaSearch } from "react-icons/fa";
import styles from './Schedule.module.css'; // CSS Module import

const Schedule = () => {
    const [activeTab, setActiveTab] = useState('American Trucks');
    const [likedCars, setLikedCars] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('Likes');

    const carsData = {
        'American Trucks': [
            { id: 8, name: 'Ford Super Duty 2023', likes: 1234, image: 'https://images.unsplash.com/photo-1631433048456-42126b541bfb?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Df', label: 'COMING SOON', labelColor: styles.labelRed },
            { id: 3, name: 'Toyota Tacoma 2024', likes: 2156, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 2, name: 'GMC Sierra 1500 2007', likes: 1876, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 5, name: 'Ford Bronco 1970', likes: 3421, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'COMING SOON', labelColor: styles.labelRed },
            { id: 4, name: 'Ford Ranger 2023', likes: 987, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 7, name: 'Toyota Hilux 2024', likes: 1654, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'COMING SOON', labelColor: styles.labelRed },
            { id: 6, name: 'Ford F-150 Raptor 2024', likes: 2987, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'COMING SOON', labelColor: styles.labelRed },
            { id: 1, name: 'Chevrolet Silverado HD 2007', likes: 1543, image: 'https://images.unsplash.com/photo-1505343372103-a5df37706406?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 15, name: 'GMC Canyon 2024', likes: 1859, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 9, name: 'GMC Sierra 2500 2024', likes: 3647, image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 25, name: 'Toyota 4Runner 2024', likes: 1095, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 44, name: 'Dodge Dakota 1987-1996', likes: 741, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 50, name: 'Dodge C series 1957', likes: 723, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 46, name: 'GMC 100 1948', likes: 735, image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 38, name: 'Ford Bronco Sport 2021', likes: 822, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { id: 35, name: 'Chevrolet Silverado EV 2024', likes: 884, image: 'https://images.unsplash.com/photo-1635975480664-d761cf657730?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ],
        'American Muscle': [
            { id: 101, name: 'Dodge Challenger SRT 2023', likes: 4521, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'AVAILABLE IN HD', labelColor: styles.labelGreen },
            { id: 102, name: 'Ford Mustang GT 2024', likes: 3876, image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 103, name: 'Chevrolet Camaro ZL1 2023', likes: 3234, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'COMING SOON', labelColor: styles.labelRed },
            { id: 104, name: 'Dodge Charger Hellcat 2022', likes: 2987, image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'AVAILABLE IN HD', labelColor: styles.labelGreen }
        ],
        'All Cars': [
            { id: 8, name: 'Ford Super Duty 2023', likes: 1234, image: 'https://images.unsplash.com/photo-1631433048456-42126b541bfb?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Df', label: 'COMING SOON', labelColor: styles.labelRed },
            { id: 3, name: 'Toyota Tacoma 2024', likes: 2156, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 101, name: 'Dodge Challenger SRT 2023', likes: 4521, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'AVAILABLE IN HD', labelColor: styles.labelGreen },
            { id: 2, name: 'GMC Sierra 1500 2007', likes: 1876, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 102, name: 'Ford Mustang GT 2024', likes: 3876, image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', label: 'UPDATED', labelColor: styles.labelYellow },
            { id: 5, name: 'Ford Bronco 1970', likes: 3421, image: 'https://images.unsplash.com/photo-1638376867769-2102c0c89b61?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'COMING SOON', labelColor: styles.labelRed }
        ]
    };

    const handleLike = (carId) => {
        const newLikedCars = new Set(likedCars);
        if (newLikedCars.has(carId)) {
            newLikedCars.delete(carId);
        } else {
            newLikedCars.add(carId);
        }
        setLikedCars(newLikedCars);
    };

    const filteredCars = carsData[activeTab]?.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    const sortedCars = [...filteredCars].sort((a, b) => {
        if (sortBy === 'Likes') {
            return b.likes - a.likes;
        } else if (sortBy === 'A-Z') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    const totalModels = carsData[activeTab]?.length || 0;

    return (
        <div className={`${styles.scheduleContainer} mainPadding`}>
            {/* First Section - Voting Header */}
            <div className={styles.votingHeader}>
                <div className={styles.modelsCount}>
                    <span>{totalModels} Models Available for Voting</span>
                </div>
                <div className={styles.tabsContainer}>
                    {['American Trucks', 'American Muscle', 'All Cars'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${styles.tabButton} ${activeTab === tab ? styles.tabActive : styles.tabInactive}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Second Section - Filters */}
            <div className={styles.filtersSection}>
                <div className={styles.filterButtons}>
                    <button
                        onClick={() => setSortBy('Likes')}
                        className={`${styles.filterButton} ${sortBy === 'Likes' ? styles.filterActive : styles.filterInactive}`}
                    >
                        <span className={styles.dropdownArrow}>▼</span>
                        <span>Likes</span>
                    </button>
                    <button
                        onClick={() => setSortBy('A-Z')}
                        className={`${styles.filterButton} ${sortBy === 'A-Z' ? styles.filterActive : styles.filterInactive}`}
                    >
                        <span className={styles.dropdownArrow}>▼</span>
                        <span>A-Z</span>
                    </button>
                </div>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                    <FaSearch className={styles.searchIcon} />
                </div>
            </div>

            {/* Third Section - Car Cards Grid */}
            <div className={styles.carsGrid}>
                {sortedCars.map((car) => (
                    <div key={car.id} className={styles.carCard}>
                        <div className={styles.cardImageContainer}>
                            {/* Car Image */}
                            <div
                                className={styles.carImage}
                                style={{
                                    backgroundImage: car.image
                                        ? `url(${car.image})`
                                        : `linear-gradient(45deg, #4a5568 25%, transparent 25%), 
                       linear-gradient(-45deg, #4a5568 25%, transparent 25%), 
                       linear-gradient(45deg, transparent 75%, #4a5568 75%), 
                       linear-gradient(-45deg, transparent 75%, #4a5568 75%)`,
                                    backgroundColor: car.image ? 'transparent' : '#2d3748',
                                    backgroundSize: car.image ? 'cover' : '20px 20px',
                                    backgroundPosition: car.image ? 'center' : '0 0, 0 10px, 10px -10px, -10px 0px'
                                }}
                            >
                                {/* Status Label */}
                                {car.label && (
                                    <div className={`${styles.statusLabel} ${car.labelColor}`}>
                                        {car.label}
                                    </div>
                                )}

                                {/* Like Button */}

                                <button
                                    onClick={() => handleLike(car.id)}
                                    className={`${styles.likeButton} ${likedCars.has(car.id) ? styles.liked : styles.likeButtonDefault}`}
                                >
                                    <FaThumbsUp className={`${styles.thumbsIcon} ${likedCars.has(car.id) ? styles.iconLiked : ''}`} />
                                </button>

                                {/* Likes Counter */}
                                {car.likes > 0 && (
                                    <div className={styles.likesCounter}>
                                        + {car.likes.toLocaleString()}
                                    </div>
                                )}
                            </div>

                            {/* Car Info */}
                            <div className={styles.carInfo}>
                                <div className={styles.carDetails}>
                                    <span className={styles.carId}>#{car.id}</span>
                                    <span className={styles.carName}>{car.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show message if no cars found */}
            {sortedCars.length === 0 && (
                <div className={styles.noCarsMessage}>
                    No cars found matching your search criteria.
                </div>
            )}
        </div>
    );
};

export default Schedule;
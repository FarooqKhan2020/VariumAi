// "use client";
// import React, { useState } from 'react';
// import { FaSearch, FaStar, FaCar, FaThumbsUp, FaComment, FaGarage, FaEnvelope, FaUserPlus, FaInfoCircle, FaTimes } from "react-icons/fa";
// import { GiHomeGarage } from "react-icons/gi";

// const Gallery = () => {
//   const [activeMainTab, setActiveMainTab] = useState('Views');
//   const [activeTimeTab, setActiveTimeTab] = useState('Today');
//   const [customBackground, setCustomBackground] = useState(false);
//   const [showBy, setShowBy] = useState('Country');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [showProfile, setShowProfile] = useState(null);

//   // Sample car gallery data
//   const galleryData = {
//     Views: [
//       {
//         id: 1,
//         image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
//         user: {
//           name: 'carmodkid',
//           avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
//           joinDate: '16 May 2025',
//           level: 'LV.7',
//           rating: 3.64,
//           cars: 56,
//           likes: 2,
//           comments: 1
//         }
//       },
//       {
//         id: 2,
//         image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop',
//         user: {
//           name: 'speedster99',
//           avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop&crop=face',
//           joinDate: '10 Mar 2025',
//           level: 'LV.5',
//           rating: 4.12,
//           cars: 34,
//           likes: 8,
//           comments: 3
//         }
//       },
//       {
//         id: 3,
//         image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
//         user: {
//           name: 'tunerking',
//           avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
//           joinDate: '22 Jan 2025',
//           level: 'LV.9',
//           rating: 4.85,
//           cars: 89,
//           likes: 15,
//           comments: 7
//         }
//       },
//       {
//         id: 4,
//         image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
//         user: {
//           name: 'musclecar',
//           avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
//           joinDate: '05 Feb 2025',
//           level: 'LV.6',
//           rating: 3.98,
//           cars: 42,
//           likes: 12,
//           comments: 5
//         }
//       },
//       {
//         id: 5,
//         image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop',
//         user: {
//           name: 'racingpro',
//           avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
//           joinDate: '18 Apr 2025',
//           level: 'LV.8',
//           rating: 4.32,
//           cars: 67,
//           likes: 25,
//           comments: 12
//         }
//       },
//       {
//         id: 6,
//         image: 'https://images.unsplash.com/photo-1549399736-37df22c532c7?w=400&h=300&fit=crop',
//         user: {
//           name: 'streetracer',
//           avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face',
//           joinDate: '12 Jun 2025',
//           level: 'LV.4',
//           rating: 3.76,
//           cars: 28,
//           likes: 6,
//           comments: 2
//         }
//       },
//       {
//         id: 7,
//         image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=400&h=300&fit=crop',
//         user: {
//           name: 'classicfan',
//           avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
//           joinDate: '28 Dec 2024',
//           level: 'LV.10',
//           rating: 4.92,
//           cars: 156,
//           likes: 89,
//           comments: 45
//         }
//       },
//       {
//         id: 8,
//         image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
//         user: {
//           name: 'luxuryrides',
//           avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d37ec3?w=50&h=50&fit=crop&crop=face',
//           joinDate: '15 Jan 2025',
//           level: 'LV.7',
//           rating: 4.15,
//           cars: 73,
//           likes: 31,
//           comments: 18
//         }
//       },
//       {
//         id: 9,
//         image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
//         user: {
//           name: 'driftmaster',
//           avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face',
//           joinDate: '03 Sep 2024',
//           level: 'LV.9',
//           rating: 4.67,
//           cars: 91,
//           likes: 56,
//           comments: 29
//         }
//       }
//     ],
//     Likes: [
//       // Similar structure with different data
//       {
//         id: 10,
//         image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop',
//         user: {
//           name: 'liked_user1',
//           avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
//           joinDate: '01 Jan 2025',
//           level: 'LV.5',
//           rating: 4.0,
//           cars: 30,
//           likes: 100,
//           comments: 20
//         }
//       }
//     ],
//     Comments: [
//       {
//         id: 11,
//         image: 'https://images.unsplash.com/photo-1561993299-2e0c00b41de3?w=400&h=300&fit=crop',
//         user: {
//           name: 'commenter1',
//           avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
//           joinDate: '15 Feb 2025',
//           level: 'LV.3',
//           rating: 3.5,
//           cars: 15,
//           likes: 50,
//           comments: 200
//         }
//       }
//     ],
//     Date: [
//       {
//         id: 12,
//         image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
//         user: {
//           name: 'newuser',
//           avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d37ec3?w=50&h=50&fit=crop&crop=face',
//           joinDate: '20 Sep 2025',
//           level: 'LV.1',
//           rating: 2.8,
//           cars: 5,
//           likes: 10,
//           comments: 2
//         }
//       }
//     ]
//   };

//   const mainTabs = ['Views', 'Likes', 'Comments', 'Date'];
//   const timeTabs = ['One Year', 'Today', 'Yesterday', 'This Week', 'This Month', 'Last Month', 'This Year'];

//   const getCurrentGalleryData = () => {
//     return galleryData[activeMainTab] || [];
//   };

//   const filteredGallery = getCurrentGalleryData().filter(item =>
//     item.user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* First Section - Top Gallery Filter */}
//       <div className="border-b border-gray-700 px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-8">
//             {mainTabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveMainTab(tab)}
//                 className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
//                   activeMainTab === tab
//                     ? 'text-white border-white'
//                     : 'text-gray-400 border-transparent hover:text-white'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}

//             <label className="flex items-center space-x-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={customBackground}
//                 onChange={(e) => setCustomBackground(e.target.checked)}
//                 className="rounded"
//               />
//               <span className="text-gray-400">Custom Background</span>
//             </label>
//           </div>

//           <div className="flex items-center space-x-4">
//             <span className="text-gray-400 text-sm">Show by</span>
//             <span className="text-gray-400">|</span>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => setShowBy('Country')}
//                 className={`flex items-center space-x-2 px-3 py-1 rounded text-sm ${
//                   showBy === 'Country'
//                     ? 'bg-gray-700 text-white'
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 <span className="w-4 h-3 bg-red-500 rounded-sm"></span>
//                 <span>Country</span>
//               </button>
//               <button
//                 onClick={() => setShowBy('World')}
//                 className={`flex items-center space-x-2 px-3 py-1 rounded text-sm ${
//                   showBy === 'World'
//                     ? 'bg-gray-700 text-white'
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 <span className="text-blue-400">🌐</span>
//                 <span>World</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Section - Time Filters & Search */}
//       <div className="border-b border-gray-700 px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-6">
//             {timeTabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTimeTab(tab)}
//                 className={`text-sm transition-colors ${
//                   activeTimeTab === tab
//                     ? 'text-white font-medium'
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           <div className="relative w-80">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-gray-900 border border-gray-600 rounded-full py-2 px-4 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
//             />
//             <FaSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       {/* Third Section - Car Gallery */}
//       <div className="p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredGallery.map((item) => (
//             <div
//               key={item.id}
//               className="relative group cursor-pointer"
//               onMouseEnter={() => setHoveredCard(item.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="relative overflow-hidden rounded-lg">
//                 <img
//                   src={item.image}
//                   alt="Car"
//                   className="w-full h-64 object-cover transition-transform group-hover:scale-105"
//                 />

//                 {/* Profile Avatar on Hover */}
//                 {hoveredCard === item.id && (
//                   <div
//                     className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setShowProfile(showProfile === item.id ? null : item.id);
//                     }}
//                   >
//                     <img
//                       src={item.user.avatar}
//                       alt={item.user.name}
//                       className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:border-blue-400"
//                     />
//                   </div>
//                 )}

//                 {/* Profile Popup */}
//                 {showProfile === item.id && (
//                   <div className="absolute top-0 left-0 bg-black bg-opacity-90 rounded-lg p-4 w-80 z-50">
//                     <div className="flex items-start space-x-3">
//                       <img
//                         src={item.user.avatar}
//                         alt={item.user.name}
//                         className="w-12 h-12 rounded-full"
//                       />
//                       <div className="flex-1">
//                         <h3 className="text-white font-semibold">{item.user.name}</h3>
//                         <p className="text-gray-400 text-sm">Since: {item.user.joinDate}</p>

//                         <div className="flex items-center space-x-4 mt-3 text-sm">
//                           <div className="flex items-center space-x-1">
//                             <span className="text-yellow-400">{item.user.level}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <FaStar className="text-yellow-400 h-3 w-3" />
//                             <span>{item.user.rating}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <FaCar className="text-blue-400 h-3 w-3" />
//                             <span>{item.user.cars}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <FaThumbsUp className="text-green-400 h-3 w-3" />
//                             <span>{item.user.likes}</span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             <FaComment className="text-purple-400 h-3 w-3" />
//                             <span>{item.user.comments}</span>
//                           </div>
//                         </div>

//                         <div className="flex items-center space-x-3 mt-4">
//                           <GiHomeGarage className="text-gray-400 cursor-pointer hover:text-white" />
//                           <FaEnvelope className="text-gray-400 cursor-pointer hover:text-white" />
//                           <FaUserPlus className="text-gray-400 cursor-pointer hover:text-white" />
//                           <FaInfoCircle className="text-gray-400 cursor-pointer hover:text-white" />
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => setShowProfile(null)}
//                         className="text-gray-400 hover:text-white"
//                       >
//                         <FaTimes />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredGallery.length === 0 && (
//           <div className="text-center text-gray-400 mt-12">
//             No gallery items found.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;










"use client";
import React, { useState } from 'react';
import { FaSearch, FaStar, FaCar, FaThumbsUp, FaComment, FaGarage, FaEnvelope, FaUserPlus, FaInfoCircle, FaTimes, FaGlobe  } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import Image from "next/image";
import styles from './Gallery.module.css';

const Gallery = () => {
    const [activeMainTab, setActiveMainTab] = useState('Views');
    const [activeTimeTab, setActiveTimeTab] = useState('Today');
    const [customBackground, setCustomBackground] = useState(false);
    const [showBy, setShowBy] = useState('Country');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [showProfile, setShowProfile] = useState(null);

    // Sample car gallery data with filters
    const galleryData = {
        Views: {
            Country: {
                'Today': [
                    {
                        id: 1,
                        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
                        user: {
                            name: 'carmodkid',
                            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
                            joinDate: '16 May 2025',
                            level: 'LV.7',
                            rating: 3.64,
                            cars: 56,
                            likes: 2,
                            comments: 1
                        }
                    },
                    {
                        id: 2,
                        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop',
                        user: {
                            name: 'speedster99',
                            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop&crop=face',
                            joinDate: '10 Mar 2025',
                            level: 'LV.5',
                            rating: 4.12,
                            cars: 34,
                            likes: 8,
                            comments: 3
                        }
                    },
                    {
                        id: 3,
                        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
                        user: {
                            name: 'tunerking',
                            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
                            joinDate: '22 Jan 2025',
                            level: 'LV.9',
                            rating: 4.85,
                            cars: 89,
                            likes: 15,
                            comments: 7
                        }
                    },
                    {
                        id: 4,
                        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
                        user: {
                            name: 'driftqueen',
                            avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop&crop=face',
                            joinDate: '05 Apr 2025',
                            level: 'LV.6',
                            rating: 4.33,
                            cars: 41,
                            likes: 12,
                            comments: 4
                        }
                    },
                    {
                        id: 5,
                        image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=400&h=300&fit=crop',
                        user: {
                            name: 'streetboss',
                            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face',
                            joinDate: '18 Feb 2025',
                            level: 'LV.8',
                            rating: 4.76,
                            cars: 73,
                            likes: 20,
                            comments: 10
                        }
                    },
                    {
                        id: 6,
                        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=300&fit=crop',
                        user: {
                            name: 'muscleman',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face',
                            joinDate: '28 Jul 2025',
                            level: 'LV.4',
                            rating: 3.95,
                            cars: 29,
                            likes: 6,
                            comments: 2
                        }
                    }
                ],


                'Yesterday': [
                    {
                        id: 4,
                        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
                        user: {
                            name: 'musclecar',
                            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
                            joinDate: '05 Feb 2025',
                            level: 'LV.6',
                            rating: 3.98,
                            cars: 42,
                            likes: 12,
                            comments: 5
                        }
                    },
                    {
                        id: 5,
                        image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop',
                        user: {
                            name: 'racingpro',
                            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
                            joinDate: '18 Apr 2025',
                            level: 'LV.8',
                            rating: 4.32,
                            cars: 67,
                            likes: 25,
                            comments: 12
                        }
                    }
                ],
                'This Week': [
                    {
                        id: 6,
                        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                        user: {
                            name: 'streetracer',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face',
                            joinDate: '12 Jun 2025',
                            level: 'LV.4',
                            rating: 3.76,
                            cars: 28,
                            likes: 6,
                            comments: 2
                        }
                    }
                ]
            },
            World: {
                'Today': [
                    {
                        id: 7,
                        image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=400&h=300&fit=crop',
                        user: {
                            name: 'classicfan',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
                            joinDate: '28 Dec 2024',
                            level: 'LV.10',
                            rating: 4.92,
                            cars: 156,
                            likes: 89,
                            comments: 45
                        }
                    },
                    {
                        id: 8,
                        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
                        user: {
                            name: 'luxuryrides',
                            avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d37ec3?w=50&h=50&fit=crop&crop=face',
                            joinDate: '15 Jan 2025',
                            level: 'LV.7',
                            rating: 4.15,
                            cars: 73,
                            likes: 31,
                            comments: 18
                        }
                    }
                ],
                'Yesterday': [
                    {
                        id: 9,
                        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
                        user: {
                            name: 'driftmaster',
                            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face',
                            joinDate: '03 Sep 2024',
                            level: 'LV.9',
                            rating: 4.67,
                            cars: 91,
                            likes: 56,
                            comments: 29
                        }
                    }
                ]
            }
        },
        Likes: {
            Country: {
                'Today': [
                    {
                        id: 10,
                        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop',
                        user: {
                            name: 'liked_country1',
                            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
                            joinDate: '01 Jan 2025',
                            level: 'LV.5',
                            rating: 4.0,
                            cars: 30,
                            likes: 100,
                            comments: 20
                        }
                    }
                ]
            },
            World: {
                'Today': [
                    {
                        id: 11,
                        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
                        user: {
                            name: 'liked_world1',
                            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
                            joinDate: '20 Sep 2025',
                            level: 'LV.8',
                            rating: 4.5,
                            cars: 45,
                            likes: 200,
                            comments: 50
                        }
                    }
                ]
            }
        },
        Comments: {
            Country: {
                'Today': [
                    {
                        id: 12,
                        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                        user: {
                            name: 'commenter_country',
                            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
                            joinDate: '15 Feb 2025',
                            level: 'LV.3',
                            rating: 3.5,
                            cars: 15,
                            likes: 50,
                            comments: 200
                        }
                    }
                ]
            },
            World: {
                'Today': [
                    {
                        id: 13,
                        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
                        user: {
                            name: 'commenter_world',
                            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
                            joinDate: '10 Apr 2025',
                            level: 'LV.6',
                            rating: 4.2,
                            cars: 35,
                            likes: 75,
                            comments: 300
                        }
                    }
                ]
            }
        },
        Date: {
            Country: {
                'Today': [
                    {
                        id: 14,
                        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
                        user: {
                            name: 'date_country',
                            avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d37ec3?w=50&h=50&fit=crop&crop=face',
                            joinDate: '20 Sep 2025',
                            level: 'LV.1',
                            rating: 2.8,
                            cars: 5,
                            likes: 10,
                            comments: 2
                        }
                    }
                ]
            },
            World: {
                'Today': [
                    {
                        id: 15,
                        image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                        user: {
                            name: 'date_world',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
                            joinDate: '25 Aug 2025',
                            level: 'LV.2',
                            rating: 3.2,
                            cars: 8,
                            likes: 15,
                            comments: 5
                        }
                    }
                ]
            }
        }
    };

    // Custom Background cars data
    const customBackgroundData = {
        Views: {
            Country: {
                'Today': [
                    {
                        id: 101,
                        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
                        user: {
                            name: 'custom_bg_user1',
                            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
                            joinDate: '12 Mar 2025',
                            level: 'LV.8',
                            rating: 4.7,
                            cars: 120,
                            likes: 500,
                            comments: 200
                        }
                    },
                    {
                        id: 102,
                        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&h=300&fit=crop',
                        user: {
                            name: 'bg_designer',
                            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
                            joinDate: '08 Jan 2025',
                            level: 'LV.9',
                            rating: 4.9,
                            cars: 180,
                            likes: 800,
                            comments: 350
                        }
                    }
                ]
            },
            World: {
                'Today': [
                    {
                        id: 103,
                        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop',
                        user: {
                            name: 'world_custom_bg',
                            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
                            joinDate: '20 Feb 2025',
                            level: 'LV.10',
                            rating: 4.95,
                            cars: 200,
                            likes: 1000,
                            comments: 500
                        }
                    }
                ]
            }
        }
    };

    const mainTabs = ['Views', 'Likes', 'Comments', 'Date'];
    const timeTabs = ['One Year', 'Today', 'Yesterday', 'This Week', 'This Month', 'Last Month', 'This Year'];

    const getCurrentGalleryData = () => {
        // Choose data source based on custom background setting
        const dataSource = customBackground ? customBackgroundData : galleryData;

        // Get data for current main tab
        const mainTabData = dataSource[activeMainTab];
        if (!mainTabData) return [];

        // Get data for current show by (Country/World)
        const showByData = mainTabData[showBy];
        if (!showByData) return [];

        // Get data for current time filter, fallback to 'Today' if not found
        const timeData = showByData[activeTimeTab] || showByData['Today'] || [];

        return timeData;
    };

    const filteredGallery = getCurrentGalleryData().filter(item =>
        item.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`${styles.Mgcontainer} `}>
            {/* First Section - Top Gallery Filter */}
            <div className={styles.filterSection}>
                <div className={styles.filterContainer}>
                    <div className={styles.tabsContainer}>
                        {mainTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveMainTab(tab)}
                                className={`${styles.tab} ${activeMainTab === tab ? styles.tabActive : ''
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}

                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={customBackground}
                                onChange={(e) => setCustomBackground(e.target.checked)}
                                className={styles.checkbox}
                            />
                            <span>Custom Background</span>
                        </label>
                    </div>

                    <div className={styles.showByContainer}>
                        <span className={styles.showByText}>Show by</span>
                        <span className={styles.showByDivider}>|</span>
                        <div className={styles.showByButtons}>
                            <button
                                onClick={() => setShowBy('Country')}
                                className={`${styles.showByButton} ${showBy === 'Country' ? styles.showByButtonActive : ''
                                    }`}
                            >
                                {/* <span className={styles.countryFlag}></span> */}
                                <Image
                                    src="/flag/us.png"
                                    alt="Profile"
                                    width={23}
                                    height={16}
                                    className={styles.countryFlag}
                                />
                                <span>Country</span>
                            </button>
                            <button
                                onClick={() => setShowBy('World')}
                                className={`${styles.showByButton} ${showBy === 'World' ? styles.showByButtonActive : ''
                                    }`}
                            >
                                {/* <span className={styles.worldIcon}>🌐</span> */}
                                 <FaGlobe className={styles.worldIcon} />
                                <span>World</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section - Time Filters & Search */}
            <div className={styles.timeSection}>
                <div className={styles.timeContainer}>
                    <div className={styles.timeTabs}>
                        {timeTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTimeTab(tab)}
                                className={`${styles.timeTab} ${activeTimeTab === tab ? styles.timeTabActive : ''
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
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
            </div>

            {/* Third Section - Car Gallery */}
            <div className={styles.gallerySection}>
                <div className={styles.galleryGrid}>
                    {filteredGallery.map((item) => (
                        <div
                            key={item.id}
                            className={styles.galleryCard}
                            onMouseEnter={() => setHoveredCard(item.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={styles.cardImageContainer}>
                                <img
                                    src={item.image}
                                    alt="Car"
                                    className={styles.cardImage}
                                />

                                {/* Profile Avatar on Hover */}
                                {hoveredCard === item.id && (
                                    <div
                                        className={styles.avatarContainer}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowProfile(showProfile === item.id ? null : item.id);
                                        }}
                                    >
                                        <img
                                            src={item.user.avatar}
                                            alt={item.user.name}
                                            className={styles.avatarImage}
                                        />
                                    </div>
                                )}

                                {/* Profile Popup */}
                                {showProfile === item.id && (
                                    <div className={styles.profilePopup}>
                                        <div className={styles.profileHeader}>
                                            <img
                                                src={item.user.avatar}
                                                alt={item.user.name}
                                                className={styles.profileAvatar}
                                            />
                                            <div className={styles.profileInfo}>
                                                <h3 className={styles.profileName}>{item.user.name}</h3>
                                                <p className={styles.joinDate}>Since: {item.user.joinDate}</p>

                                                <div className={styles.profileStats}>
                                                    <div className={styles.statItem}>
                                                        <span className={styles.level}>{item.user.level}</span>
                                                    </div>
                                                    <div className={styles.statItem}>
                                                        <FaStar className={styles.rating} />
                                                        <span>{item.user.rating}</span>
                                                    </div>
                                                    <div className={styles.statItem}>
                                                        <FaCar className={styles.cars} />
                                                        <span>{item.user.cars}</span>
                                                    </div>
                                                    <div className={styles.statItem}>
                                                        <FaThumbsUp className={styles.likes} />
                                                        <span>{item.user.likes}</span>
                                                    </div>
                                                    <div className={styles.statItem}>
                                                        <FaComment className={styles.comments} />
                                                        <span>{item.user.comments}</span>
                                                    </div>
                                                </div>

                                                <div className={styles.profileActions}>
                                                    <GiHomeGarage className={styles.actionIcon} />
                                                    <FaEnvelope className={styles.actionIcon} />
                                                    <FaUserPlus className={styles.actionIcon} />
                                                    <FaInfoCircle className={styles.actionIcon} />
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setShowProfile(null)}
                                                className={styles.closeButton}
                                            >
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredGallery.length === 0 && (
                    <div className={styles.emptyState}>
                        No gallery items found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
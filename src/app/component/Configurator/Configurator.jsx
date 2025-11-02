'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Configurator.module.css';
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import Link from 'next/link';

const Configurator = () => {
    // State for active tabs, selected types, brands, etc.
    const [activeTypeTab, setActiveTypeTab] = useState('ALL');
    const [selectedBrand, setSelectedBrand] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    // Refs for horizontal scrolling containers
    const typeTabsRef = useRef(null);
    const brandsRef = useRef(null);
    const modelsContainerRef = useRef(null);

    // State for scroll positions
    const [brandsScroll, setBrandsScroll] = useState({ top: 0, height: 1 });
    const [modelsScroll, setModelsScroll] = useState({ top: 0, height: 1 });

    // Your existing car data arrays (carTypes, carBrands, carModels) go here
    const carTypes = [
        'ALL', 'TRUCK', 'MUSCLE', 'JDM', 'EURO', 'USDM', 'S.SPORT', 'SUV',
        'SEMIS', 'BIKE', 'ASIA', 'VAN', 'COUPE', 'CONVERTIBLE', 'SEDAN',
        'HATCHBACK', 'WAGON', 'CREW', 'EXTENDED', 'REG', 'DRW'
    ];

    // Sample data for car brands
    const carBrands = [
        { id: 'ALL', name: 'ALL', logo: 'hero/car1.png' },
        { id: 'LAST_ADDED', name: 'LAST ADDED', logo: 'configurator/refresh.png' },
        { id: 'MOST_PARTS', name: 'MOST PARTS', logo: 'configurator/LAST_ADDED.png' },
        { id: 'AC', name: 'AC', logo: 'http://cdn2.3dtuning.com/logos/big/AC.png' },
        { id: 'ACURA', name: 'ACURA', logo: '	https://cdn1.3dtuning.com/logos/big/Acura.png' },
        { id: 'ALFA_ROMEO', name: 'ALFA ROMEO', logo: 'https://cdn5.3dtuning.com/logos/big/Alfa%20Romeo.png' },
        { id: 'AUDI', name: 'AUDI', logo: 'https://cdn6.3dtuning.com/logos/big/Audi.png' },
        { id: 'BMW', name: 'BMW', logo: 'https://cdn1.3dtuning.com/logos/big/BMW.png' },
        { id: 'BENTLEY', name: 'BENTLEY', logo: '	https://cdn1.3dtuning.com/logos/big/Bentley.png' },
        { id: 'LAMBORGHINI', name: 'LAMBORGHINI', logo: 'https://cdn6.3dtuning.com/logos/big/Lamborghini.png' },
        { id: 'CHEVROLET', name: 'CHEVROLET', logo: 'https://cdn2.3dtuning.com/logos/big/Chevrolet.png' },
        { id: 'DODGE', name: 'DODGE', logo: 'https://cdn6.3dtuning.com/logos/big/Dodge.png' },
        { id: 'FERRARI', name: 'FERRARI', logo: 'https://cdn6.3dtuning.com/logos/big/Ferrari.png' },
        { id: 'FORD', name: 'FORD', logo: 'https://cdn2.3dtuning.com/logos/big/Ford.png' },
        { id: 'HARLEYDAVIDSON', name: 'HARLEY DAVIDSON', logo: 'https://cdn2.3dtuning.com/logos/big/Harley-Davidson.png' },
        { id: 'HONDA', name: 'HONDA', logo: 'https://cdn1.3dtuning.com/logos/big/Honda.png' },
        { id: 'HYUNDAI', name: 'HYUNDAI', logo: 'https://cdn2.3dtuning.com/logos/big/Hyundai.png' },
        { id: 'JEEP', name: 'JEEP', logo: 'https://cdn5.3dtuning.com/logos/big/Jeep.png' },
        { id: 'KIA', name: 'KIA', logo: '	https://cdn4.3dtuning.com/logos/big/Kia.png' },
        { id: 'MAZDA', name: 'MAZDA', logo: 'http://cdn1.3dtuning.com/logos/big/Mazda.png' },
        { id: 'MERCEDES', name: 'MERCEDES', logo: 'https://cdn3.3dtuning.com/logos/big/Mercedes.png' },
        { id: 'NISSAN', name: 'NISSAN', logo: 'https://cdn4.3dtuning.com/logos/big/Nissan.png' },
        { id: 'PORSCHE', name: 'PORSCHE', logo: 'https://cdn3.3dtuning.com/logos/big/Porsche.png' },
        { id: 'SUBARU', name: 'SUBARU', logo: 'https://cdn2.3dtuning.com/logos/big/Subaru.png' },
        { id: 'TESLA', name: 'TESLA', logo: 'https://cdn6.3dtuning.com/logos/big/Tesla.png' },
        { id: 'TOYOTA', name: 'TOYOTA', logo: 'https://cdn1.3dtuning.com/logos/big/Toyota.png' },
        { id: 'VOLKSWAGEN', name: 'VOLKSWAGEN', logo: 'https://cdn6.3dtuning.com/logos/big/Volkswagen.png' },
        { id: 'VOLVO', name: 'VOLVO', logo: '	https://cdn2.3dtuning.com/logos/big/Volvo.png' }
    ];

    // Sample data for car models
    const carModels = [
        // TRUCK models
        {
            id: 101,
            name: 'Ford F-150',
            years: '2015 - 2020',
            image: 'configurator/ford_f150.png',
            brand: 'FORD',
            type: 'TRUCK'
        },
        {
            id: 102,
            name: 'Chevrolet Silverado',
            years: '2014 - 2018',
            image: 'configurator/ChevroletSilverado.png',
            brand: 'CHEVROLET',
            type: 'TRUCK'
        },

        // MUSCLE models
        {
            id: 201,
            name: 'Dodge Challenger',
            years: '2015 - 2021',
            image: 'configurator/DodgeChallenger.png',
            brand: 'DODGE',
            type: 'MUSCLE'
        },
        {
            id: 202,
            name: 'Ford Mustang',
            years: '2015 - 2023',
            image: 'configurator/FordMustang.png',
            brand: 'FORD',
            type: 'MUSCLE'
        },

        // JDM models
        {
            id: 301,
            name: 'Nissan Skyline R34',
            years: '1999 - 2002',
            image: 'configurator/NissanSkyline.png',
            brand: 'NISSAN',
            type: 'JDM'
        },
        {
            id: 302,
            name: 'Toyota Supra MK4',
            years: '1993 - 2002',
            image: 'configurator/ToyotaSupraMK4.png',
            brand: 'TOYOTA',
            type: 'JDM'
        },

        // EURO models
        {
            id: 401,
            name: 'BMW M3',
            years: '2018 - 2023',
            image: 'configurator/BMWM3.png',
            brand: 'BMW',
            type: 'EURO'
        },
        {
            id: 402,
            name: 'Mercedes C63 AMG',
            years: '2016 - 2021',
            image: 'configurator/MercedesC63AMG.png',
            brand: 'MERCEDES',
            type: 'EURO'
        },

        // USDM models
        {
            id: 501,
            name: 'Chevrolet Camaro',
            years: '2016 - 2023',
            image: 'configurator/ChevroletCamaro.png',
            brand: 'CHEVROLET',
            type: 'USDM'
        },
        {
            id: 502,
            name: 'Dodge Charger',
            years: '2015 - 2023',
            image: 'configurator/DodgeCharger.png',
            brand: 'DODGE',
            type: 'USDM'
        },

        // S.SPORT models
        {
            id: 601,
            name: 'Porsche 911',
            years: '2019 - 2023',
            image: 'configurator/Porsche911.png',
            brand: 'PORSCHE',
            type: 'S.SPORT'
        },
        {
            id: 602,
            name: 'Audi R8',
            years: '2016 - 2023',
            image: 'configurator/AudiR8.png',
            brand: 'AUDI',
            type: 'S.SPORT'
        },

        // SUV models
        {
            id: 701,
            name: 'Range Rover Sport',
            years: '2018 - 2023',
            image: 'configurator/RangeRoverSport.png',
            brand: 'LAND ROVER',
            type: 'SUV'
        },
        {
            id: 702,
            name: 'BMW X5',
            years: '2019 - 2023',
            image: 'configurator/BMWX5.png',
            brand: 'BMW',
            type: 'SUV'
        },

        // SEMIS models
        {
            id: 801,
            name: 'Freightliner Cascadia',
            years: '2018 - 2023',
            image: 'configurator/FreightlinerCascadia.png',
            brand: 'FREIGHTLINER',
            type: 'SEMIS'
        },

        // BIKE models
        {
            id: 901,
            name: 'Harley Davidson Sportster',
            years: '2020 - 2023',
            image: 'configurator/HarleyDavidsonSportster.png',
            brand: 'HARLEYDAVIDSON',
            type: 'BIKE'
        },

        // ASIA models
        {
            id: 1001,
            name: 'Hyundai Sonata',
            years: '2020 - 2023',
            image: 'configurator/HyundaiSonata.png',
            brand: 'HYUNDAI',
            type: 'ASIA'
        },

        // VAN models
        {
            id: 1101,
            name: 'Mercedes Sprinter',
            years: '2019 - 2023',
            image: 'configurator/MercedesSprinter.png',
            brand: 'MERCEDES',
            type: 'VAN'
        },

        // COUPE models
        {
            id: 1201,
            name: 'Audi A5',
            years: '2017 - 2023',
            image: 'configurator/AudiA5.png',
            brand: 'AUDI',
            type: 'COUPE'
        },
        {
            id: 1202,
            name: 'BMW 4 Series',
            years: '2020 - 2023',
            image: 'configurator/BMW4Series.png',
            brand: 'BMW',
            type: 'COUPE'
        },

        // CONVERTIBLE models
        {
            id: 1301,
            name: 'Porsche 718 Boxster',
            years: '2016 - 2023',
            image: 'configurator/Porsche718Boxster.png',
            brand: 'PORSCHE',
            type: 'CONVERTIBLE'
        },

        // SEDAN models
        {
            id: 1401,
            name: 'Toyota Camry',
            years: '2018 - 2023',
            image: 'configurator/ToyotaCamry.png',
            brand: 'TOYOTA',
            type: 'SEDAN'
        },
        {
            id: 1402,
            name: 'Honda Accord',
            years: '2018 - 2023',
            image: 'configurator/HondaAccord.png',
            brand: 'HONDA',
            type: 'SEDAN'
        },

        // HATCHBACK models
        {
            id: 1501,
            name: 'Volkswagen Golf GTI',
            years: '2017 - 2023',
            image: 'configurator/VolkswagenGolfGTI.png',
            brand: 'VOLKSWAGEN',
            type: 'HATCHBACK'
        },

        // WAGON models
        {
            id: 1601,
            name: 'Volvo V90',
            years: '2018 - 2023',
            image: 'configurator/VolvoV90.png',
            brand: 'VOLVO',
            type: 'WAGON'
        },

        // CREW models
        {
            id: 1701,
            name: 'Ford F-250 Crew',
            years: '2020 - 2023',
            image: 'configurator/FordF-250Crew.png',
            brand: 'FORD',
            type: 'CREW'
        },

        // EXTENDED models
        {
            id: 1801,
            name: 'Chevrolet Express',
            years: '2019 - 2023',
            image: 'configurator/ChevroletExpress.png',
            brand: 'CHEVROLET',
            type: 'EXTENDED'
        },

        // REG models
        {
            id: 1901,
            name: 'Ford F-350 Regular',
            years: '2021 - 2023',
            image: 'configurator/FordF-350Regular.png',
            brand: 'FORD',
            type: 'REG'
        },

        // DRW models
        {
            id: 2001,
            name: 'Ram 3500 DRW',
            years: '2020 - 2023',
            image: 'configurator/Ram3500DRW.png',
            brand: 'RAM',
            type: 'DRW'
        }
    ];


    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // If search query is empty, reset to ALL filters
        if (query === '') {
            setActiveTypeTab('ALL');
            setSelectedBrand('ALL');
            return;
        }

        // Find the first matching model for the search query
        const matchingModel = carModels.find(model =>
            model.name.toLowerCase().includes(query.toLowerCase()) ||
            model.brand.toLowerCase().includes(query.toLowerCase()) ||
            model.type.toLowerCase().includes(query.toLowerCase())
        );

        // If a matching model is found, set the appropriate type and brand
        if (matchingModel) {
            setActiveTypeTab(matchingModel.type);
            setSelectedBrand(matchingModel.brand);
        }
    };

    // Get unique brands based on selected type
    const getFilteredBrands = () => {
        if (activeTypeTab === 'ALL') {
            return carBrands;
        }

        // Get brands that have models of the selected type
        const brandsWithType = [...new Set(carModels
            .filter(model => model.type === activeTypeTab)
            .map(model => model.brand)
        )];

        // Include ALL option and brands that have models of selected type
        return [
            carBrands.find(brand => brand.id === 'ALL'),
            ...carBrands.filter(brand =>
                brand.id !== 'ALL' && brandsWithType.includes(brand.id)
            )
        ].filter(Boolean);
    };

    // Filter models based on selected type, brand, and search query
    const filteredModels = carModels.filter(model => {
        const matchesType = activeTypeTab === 'ALL' || model.type === activeTypeTab;
        const matchesBrand = selectedBrand === 'ALL' || model.brand === selectedBrand;
        const matchesSearch = searchQuery === '' ||
            model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            model.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            model.type.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesType && matchesBrand && matchesSearch;
    });

    // Handle type tab click
    const handleTypeTabClick = (type) => {
        setActiveTypeTab(type);
        setSelectedBrand('ALL'); // Reset brand filter when type changes
    };

    // Handle brand click
    const handleBrandClick = (brandId) => {
        setSelectedBrand(brandId);
    };

    // Handle horizontal scroll with buttons
    const scrollTabs = (direction) => {
        if (typeTabsRef.current) {
            const scrollAmount = 200;
            typeTabsRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
        }
    };

    // Check if scroll arrows should be visible
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // Update scroll position for brands
    const updateBrandsScroll = () => {
        if (brandsRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = brandsRef.current;
            const scrollRatio = clientHeight / scrollHeight;
            const scrollPosition = scrollTop / (scrollHeight - clientHeight);

            setBrandsScroll({
                top: scrollPosition,
                height: scrollRatio
            });

            // Update CSS custom properties
            document.documentElement.style.setProperty('--brands-scroll-top', scrollPosition);
            document.documentElement.style.setProperty('--brands-scroll-height', scrollRatio);
        }
    };

    // Update scroll position for models
    const updateModelsScroll = () => {
        if (modelsContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = modelsContainerRef.current;
            const scrollRatio = clientHeight / scrollHeight;
            const scrollPosition = scrollTop / (scrollHeight - clientHeight);

            setModelsScroll({
                top: scrollPosition,
                height: scrollRatio
            });

            // Update CSS custom properties
            document.documentElement.style.setProperty('--models-scroll-top', scrollPosition);
            document.documentElement.style.setProperty('--models-scroll-height', scrollRatio);
        }
    };

    // Add scroll event listeners
    useEffect(() => {
        const checkScroll = () => {
            if (typeTabsRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = typeTabsRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }
        };

        if (typeTabsRef.current) {
            typeTabsRef.current.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }

        if (brandsRef.current) {
            brandsRef.current.addEventListener('scroll', updateBrandsScroll);
            // Initial calculation after a small delay to allow rendering
            setTimeout(updateBrandsScroll, 100);
        }

        if (modelsContainerRef.current) {
            modelsContainerRef.current.addEventListener('scroll', updateModelsScroll);
            // Initial calculation after a small delay to allow rendering
            setTimeout(updateModelsScroll, 100);
        }

        return () => {
            if (typeTabsRef.current) {
                typeTabsRef.current.removeEventListener('scroll', checkScroll);
            }
            if (brandsRef.current) {
                brandsRef.current.removeEventListener('scroll', updateBrandsScroll);
            }
            if (modelsContainerRef.current) {
                modelsContainerRef.current.removeEventListener('scroll', updateModelsScroll);
            }
        };
    }, []);

    return (
        <div className={styles.configurator}>
            {/* First Section - Title and Search */}
            <section className={styles.titleSection}>
                <h1>CLICK ON THE DESIRED MODEL TO START</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search Make & Model"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    <FaSearch className={styles.searchIcon} />
                </div>
            </section>

            {/* Second Section - Car Type Tabs */}
            <section className={styles.typeSection}>
                <div className={styles.typeTabsContainer}>
                    {showLeftArrow && (
                        <button
                            className={`${styles.scrollButton} ${styles.scrollLeft}`}
                            onClick={() => scrollTabs('left')}
                        >
                            <FaChevronLeft />
                        </button>
                    )}

                    <div className={styles.typeTabs} ref={typeTabsRef}>
                        {carTypes.map(type => (
                            <button
                                key={type}
                                className={`${styles.typeTab} ${activeTypeTab === type ? styles.active : ''}`}
                                onClick={() => handleTypeTabClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {showRightArrow && (
                        <button
                            className={`${styles.scrollButton} ${styles.scrollRight}`}
                            onClick={() => scrollTabs('right')}
                        >
                            <FaChevronRight />
                        </button>
                    )}
                </div>
            </section>

            {/* Third Section - Brands and Models */}
            <section className={styles.modelsSection}>
                {/* Left Side - Brand Selection */}
                <div className={styles.brandsContainer}>
                    <div className={styles.brandsList} ref={brandsRef}>
                        {getFilteredBrands().map(brand => (
                            <div
                                key={brand.id}
                                className={`${styles.brandItem} ${selectedBrand === brand.id ? styles.active : ''}`}
                                onClick={() => handleBrandClick(brand.id)}
                            >
                                <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
                                <span className={styles.brandName}>{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Model Display */}
                <div className={styles.modelsContainer} ref={modelsContainerRef}>
                    <div className={styles.modelsGrid}>
                        {filteredModels.length > 0 ? (
                            filteredModels.map(model => (
                                <Link
                                    key={model.id}
                                    // href={`/configurator/${model.id}`}
                                    href="#"
                                    className={styles.modelCard}
                                >
                                    <div className={styles.modelImageWrapper}>
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            className={styles.modelImage}
                                        />
                                    </div>
                                    <div className={styles.modelOverlay}>
                                        <h3 className={styles.modelName}>{model.name}</h3>
                                        <p className={styles.modelYears}>{model.years}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                <p>No models found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Configurator;
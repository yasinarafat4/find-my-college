"use client"

import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { GiClick } from "react-icons/gi";

const Banner = () => {
    const slides = [
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-5 h-full md:h-[300px] items-center">
                {/* Banner Section */}
                <div className="md:col-span-3 relative overflow-hidden shadow-lg">
                    <div className="w-full h-[300px] relative">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-item absolute w-full h-full transition-all duration-500 ${index === currentSlide ? "block z-10" : "hidden"
                                    }`}
                            >
                                <img
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                        <button
                            onClick={handlePrev}
                            className="btn btn-sm btn-circle"
                        >
                            ❮
                        </button>
                        <button
                            onClick={handleNext}
                            className="btn btn-sm btn-circle"
                        >
                            ❯
                        </button>
                    </div>
                </div>
 {/* Facilities Section */}
                <div className="md:col-span-2 lg:col-span-1 h-full p-2 shadow-md space-y-2">
                    <ul className="space-y-2 text-gray-600">
                        <li className="p-2 bg-white shadow-sm">
                            🏫 Modern Classrooms
                        </li>
                        <li className="p-2 bg-white shadow-sm">
                            📚 Well-equipped Libraries
                        </li>
                        <li className="p-2 bg-white shadow-sm">
                            🛏️ Comfortable Dormitories
                        </li>
                        <li className="p-2 bg-white shadow-sm">
                            🍽️ Cafeteria with Healthy Meals
                        </li>
                        <li className="p-2 bg-white shadow-sm">
                            🏀 Sports Facilities
                        </li>
                    </ul>
                    <div className="flex items-center justify-around gap-2 lg:gap-1 xl:gap-2">
                        <button
                            className="w-full flex items-center gap-1 font-medium px-[6px] py-[4px] xl:px-[9px] xl:py-[6px] text-sm lg:text-xs text-white bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                        >
                            <span className="bg-white p-[5px] xl:p-[7px] rounded-full">
                                <GiClick className="text-base text-green-500" />
                            </span>
                            Book Now!
                        </button>
                        <button
                            className="group w-full"
                        >
                            <div className="flex items-center gap-1 font-medium px-[6px] py-[4px] xl:px-[9px] xl:py-[6px] text-sm lg:text-xs border border-blue-400 text-blue-600 group-hover:bg-blue-600 group-hover:text-white rounded-full shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all">
                                <span className="bg-blue-600 group-hover:bg-white p-[5px] xl:p-[7px] rounded-full">
                                    <FaInfoCircle className="text-base text-white group-hover:text-blue-600" />
                                </span>
                                <span>Learn More!</span></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

"use client";

import React, { useEffect, useState } from 'react';
import NumberTicker from "@/components/ui/number-ticker"; // Ensure the correct path to your NumberTicker component

const staticsData = [
    { title: "Happy Students", value: 1000, image: "/media/1.png" },
    { title: "Years of Experience", value: 10, image: "/media/2.png" },
    { title: "Followers", value: 10000, image: "/media/3.png" },
];

export const Statistics = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="pt-40 pb-32 relative overflow-hidden w-full flex flex-row justify-between">
            {/* Fixed Parallax Background */}
            <div
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/media/1.png)",
                    backgroundAttachment: "fixed", // This creates the parallax effect
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            />
            {/* Overlay to darken the background */}
            <div className="absolute w-full h-full top-0 left-0 bg-slate-900 opacity-70"></div>

            {/* Title Section */}
            <div className="relative z-10 text-center w-[40%] flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                    Join us and Let's Start Learning Today and
                </h1>
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Join Now
                </button>
            </div>

            {/* Statistics Cards */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4">
                {staticsData.map((stat, index) => (
                    <div
                        key={index}
                        className="flex justify-center flex-col bg-white rounded-3xl shadow-lg p-6 text-center relative overflow-hidden transition-transform duration-500 hover:scale-105"
                    >
                        {/* Circular Box */}
                        <div
                            className="absolute w-24 h-24 bg-blue-600 rounded-full top-[-50%] left-1/2 transform -translate-x-1/2 transition-all duration-500 hover:bg-cover hover:bg-center"
                            style={{
                                backgroundImage: `url(${stat.image})`,
                            }}
                        />
                        <h2 className="text-3xl font-bold text-neutral-900 mt-12">
                            <NumberTicker value={stat.value} /> +
                        </h2>
                        <p className="text-neutral-600 mt-2 text-lg">{stat.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;

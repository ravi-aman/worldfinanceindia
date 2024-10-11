"use client"

import React, { useEffect, useState } from 'react';
import NumberTicker from "@/components/ui/number-ticker"; // Ensure the correct path to your NumberTicker component

const staticsData = [
    { title: "Happy Students", value: 56000 },
    { title: "Years of Experience", value: 20 },
    { title: "Followers", value: 100000 },
    { title: "Courses Offered", value: 5 },
];

export const Statistics = () => {
    const [scrollY, setScrollY] = useState(0);

    // Update scroll position to create a parallax effect
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
        <section className="pt-40 pb-32 relative overflow-hidden">
            {/* Parallax background with blue overlay */}
            <div
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{
                    backgroundImage: "url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)",
                    transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect (moves slower than scrolling)
                }}
            />
            {/* Blue overlay */}
            <div className="absolute w-full h-full top-0 left-0 bg-blue-600 opacity-10"></div>

            {/* Title */}
            <div className="relative z-10 text-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to WFI Platform</h1>
            </div>

            {/* Statistics Cards */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4">
                {staticsData.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-3xl font-bold text-neutral-800">
                            <NumberTicker value={stat.value} /> {/* NumberTicker for animated number */}
                        </h2>
                        <p className="text-neutral-600 mt-2 text-lg">{stat.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;

"use client"
import { motion } from 'framer-motion';
import { FiClock, FiDollarSign, FiTarget, FiBook } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// Course data
const courses = [
    {
        title: "WFI Online 6 Months Stock Market Training",
        description: "Comprehensive course with live trading sessions and lifetime mentoring by Mr. Sunil Kumar Tiwari.",
        duration: "6 months",
        price: "₹10,000 - ₹15,000",
        features: ["Live trading sessions", "Lifetime mentoring", "Interactive workshops", "Real-time market analysis"],
        idealFor: "Beginners and intermediate traders looking to build a strong foundation in stock trading."
    },
    {
        title: "WFI Online Intraday Trading Room",
        description: "Focus on intraday trading strategies, including risk management and live trading tactics.",
        duration: "Ongoing access",
        price: "₹10,000 - ₹15,000",
        features: ["Live trading room access", "Daily market insights", "Interactive Q&A sessions"],
        idealFor: "Traders who want to refine their quick decision-making skills."
    },
    {
        title: "WFI Online Options Trading Room",
        description: "Overview of options trading strategies and market condition analysis.",
        duration: "Ongoing access",
        price: "₹10,000 - ₹15,000",
        features: ["Live trading room access", "Strategy workshops", "Market trend analysis"],
        idealFor: "Those looking to diversify their portfolios."
    },
    {
        title: "WFI Online Investors Club",
        description: "Community-focused club offering networking opportunities and investment insights.",
        duration: "Membership-based",
        price: "₹10,000 - ₹15,000",
        features: ["Monthly webinars", "Networking events", "Exclusive resources"],
        idealFor: "Individuals looking to expand their investment knowledge."
    },
    {
        title: "WFI Online Algo Trading Room",
        description: "Learn the fundamentals of algorithmic trading with a focus on coding and statistical analysis.",
        duration: "Ongoing access",
        price: "₹10,000 - ₹15,000",
        features: ["Coding workshops", "Backtesting strategies", "Expert guidance"],
        idealFor: "Tech-savvy individuals interested in automated trading strategies."
    }
];

// Personal training program data
const personalTraining = {
    title: "Personal Training Program",
    description: "Exclusive mentorship tailored to your individual needs and goals.",
    duration: "1 month",
    price: "₹20,000",
    features: ["Customized training plan", "Direct mentorship", "Flexible scheduling"],
    idealFor: "Students seeking intensive, personalized guidance."
};

// Courses component
function Courses() {

    // GSAP Scroll Animation Effect
    useEffect(() => {
        gsap.from(".course-card", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: .5,
            scrollTrigger: {
                trigger: ".course-card",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    WFI Courses
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            className="course-card bg-gray rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{course.title}</h2>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="flex items-center mb-2">
                                    <FiClock className="text-blue-500 mr-2" />
                                    <span className="text-gray-700">{course.duration}</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <FiDollarSign className="text-green-500 mr-2" />
                                    <span className="text-gray-700">{course.price}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-600 mb-4">
                                    {course.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center">
                                    <FiTarget className="text-red-500 mr-2" />
                                    <span className="text-gray-700"><strong>Ideal For:</strong> {course.idealFor}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-12 bg-blue-100 rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-2">{personalTraining.title}</h2>
                        <p className="text-blue-700 mb-4">{personalTraining.description}</p>
                        <div className="flex items-center mb-2">
                            <FiClock className="text-blue-500 mr-2" />
                            <span className="text-blue-700">{personalTraining.duration}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <FiDollarSign className="text-green-500 mr-2" />
                            <span className="text-blue-700">{personalTraining.price}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Features:</h3>
                        <ul className="list-disc list-inside text-blue-700 mb-4">
                            {personalTraining.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <div className="flex items-center">
                            <FiTarget className="text-red-500 mr-2" />
                            <span className="text-blue-700"><strong>Ideal For:</strong> {personalTraining.idealFor}</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <a
                        href="#enroll"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                    >
                        <FiBook className="mr-2" />
                        Explore Courses and Enroll Now
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Courses), { ssr: false });
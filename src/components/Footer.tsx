"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="relative w-full bg-slate-900 text-gray-200">
            <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <div className="relative z-30 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between md:my-100">
                    <div>
                        <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
                            <div className="flex flex-col space-y-4">
                                <h2 className="text-xl font-semibold text-white mb-4">Navigation</h2>
                                <nav className="flex flex-col space-y-2">
                                    <a href="#about" className="hover:text-white">About Us</a>
                                    <a href="#services" className="hover:text-white">Services</a>
                                    <a href="#contact" className="hover:text-white">Contact</a>
                                    <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                                </nav>
                            </div>
                            <div className="flex flex-col space-y-4 mt-6 md:mt-0">
                                <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
                                <div className="flex space-x-4">
                                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        <FaTwitter className="text-2xl" /> Twitter
                                    </a>
                                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        <FaLinkedin className="text-2xl" /> LinkedIn
                                    </a>
                                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        <FaInstagram className="text-2xl" /> Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Subscribe to Blog */}
                    <div className="flex flex-col items-start md:items-end">
                        <h2 className="text-xl font-semibold text-white mb-4">Subscribe to Our Blog</h2>
                        <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between py-20 px-20">
                    <span className="text-sm sm:text-center ">© 2023 Your Company. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:mt-0 sm:justify-center space-x-5">
                        <a href="https://facebook.com/yourprofile" className=" ">
                            <FaFacebook className="text-2xl" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://instagram.com/yourprofile" className="">
                            <FaInstagram className="text-2xl" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://twitter.com/yourprofile" className="">
                            <FaTwitter className="text-2xl" />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

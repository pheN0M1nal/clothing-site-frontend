import React from "react"
import facebooklogo from "../assets/svg/icon-facebook.svg"
import instagramlogo from "../assets/svg/icon-instagram.svg"
import pinterestlogo from "../assets/svg/icon-pinterest.svg"
import twitterlogo from "../assets/svg/icon-twitter.svg"
const Footer = () => {
    return (
        <>
            <footer className="py-16 bg-slate-800 mt-5 subcateg sm:max-w-full">
                <div className="container flex flex-col items-center justify-between w-10/12 mx-auto space-y-6 bg-slate-800 md:flex-row md:space-y-0 md:items-start">
                    <div className="flex flex-col text-gray-500 res">
                        <div className="text-3xl">
                            Stay up to date with our story
                        </div>
                        <div className="join mt-5">
                            Join and be the first to get the latest news about
                            trend, promotions, and much more!
                        </div>
                        <div className="flex flex-row items-center mt-5 border border-slate-700 rounded-md">
                            <form action="">
                                <input
                                    type="email"
                                    className="w-[12rem] h-14 ml-4 items-center focus:outline-none text-gray-400 bg-slate-800 transition-all placeholder:text-sm"
                                    placeholder="Enter your email address"
                                />
                                <div className="inline w-[5rem] ml-4">
                                    <button className="  text-gray-500 hover:text-gray-400">
                                        Join now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-16 bg-slate-800 md:flex-row md:space-x-32 md:space-y-0">
                        {/* Menu 2 */}
                        <div className="flex flex-col items-center text-gray-500 bg-slate-800">
                            <div className="flex flex-col items-center space-y-3">
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    Blog
                                </a>
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    Developers
                                </a>
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    Support
                                </a>
                            </div>
                        </div>
                        {/* Menu  3 */}
                        <div className="flex flex-col items-center text-gray-500 bg-slate-800">
                            <div className="flex flex-col items-center space-y-3">
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    Team
                                </a>
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    Careers
                                </a>
                                <a
                                    href="#"
                                    className="capitalize hover:text-gray-400"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Social Containers */}
                    <div className="flex space-x-6">
                        <a href="#">
                            <img src={facebooklogo} alt="" className="ficon" />
                        </a>
                        <a href="#">
                            <img src={twitterlogo} alt="" className="ficon" />
                        </a>
                        <a href="#">
                            <img src={instagramlogo} alt="" className="ficon" />
                        </a>
                        <a href="#">
                            <img src={pinterestlogo} alt="" className="ficon" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import "remixicon/fonts/remixicon.css"

import { logout } from "../store/actions/userActions"
import { logo } from "../assets/svg/logo"
const Navbar = () => {
    let showMenu = false

    //Toggle Mobile Menu
    const onClick = () => {
        showMenu = !showMenu
        toggleMenu()
    }

    document.addEventListener("click", (e) => {
        if (
            showMenu &&
            e.target.closest("#menu") &&
            !e.target.closest(".dropdown")
        ) {
            showMenu = false
            toggleMenu()
        } else if (e.target.closest(".dropdown-links")) {
            drop()
        } else if (e.target.closest(".dropdown-links1") && showMenu) {
            showMenu = false
            drop1()
            toggleMenu()
        }
    })

    function toggleMenu() {
        console.log("I am from mobile view")
        var btn = document.getElementById("menu-btn")
        var menu = document.getElementById("menu")
        btn.classList.toggle("open")
        if (showMenu) {
            menu.classList.remove("hidden")
        } else if (!showMenu) {
            menu.classList.add("hidden")
        }
    }

    const drop = () => {
        var menu = document.querySelector(".dropdown-links")
        menu.classList.toggle("hidden")
        // if (menu.classList.contains("hidden")) {
        //   menu.classList.remove("hidden");
        // } else {
        //   menu.classList.add("hidden");
        // }
    }
    const drop1 = () => {
        var menu = document.querySelector(".dropdown-links1")
        menu.classList.toggle("hidden")

        // if (menu.classList.contains("hidden")) {
        //   menu.classList.remove("hidden");
        // } else {
        //   menu.classList.add("hidden");
        // }
    }

    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <>
            <div className="bg-gray-300 min-w-[320px] sm:w-full">
                <nav className="ml-2 sm:ml-8 p-5 nav-bar">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-80">
                            {/* Logo */}
                            <div className="flex flex-row items-center justify-center space-x-1">
                                <span>{logo()}</span>
                                <Link to="/">
                                    <h1 className="font-bold cursor-pointer nav-link">
                                        STee
                                    </h1>
                                </Link>
                            </div>
                            {/* left Menu */}
                            <div className="hidden lg:flex font-bold space-x-14 text-sm">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                                <Link to="/" className="nav-link">
                                    Category
                                </Link>
                                <Link
                                    to="/create-shop
"
                                    className="nav-link"
                                >
                                    Start Creating
                                </Link>
                                <Link to="/admin" className="nav-link">
                                    Admin Panel
                                </Link>
                            </div>
                        </div>

                        <div className="space-x-4">
                            <Link to="/cart">
                                <i
                                    className="ri-shopping-cart-line cursor-pointer nav-link"
                                    title="Cart"
                                ></i>
                            </Link>
                            <Link to="/cart">
                                <i
                                    className="ri-notification-line cursor-pointer nav-link"
                                    title="Notification"
                                ></i>
                            </Link>
                        </div>
                        {/* Right Menu */}

                        <div className="items-center hidden lg:flex font-boldh ">
                            <div className="px-7 py-3">
                                {user?.myName ? (
                                    <div className="relative inline-block text-left">
                                        <div className="inline-flex w-full">
                                            <button
                                                className="dropdown"
                                                type="button"
                                                onClick={drop}
                                            >
                                                {user?.myName}
                                                <i className="ri-arrow-drop-down-line"></i>
                                            </button>
                                        </div>
                                        <div
                                            id="asd"
                                            className="absolute hidden dropdown-links right-0 z-10 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div className="" role="none">
                                                <Link
                                                    to="/profile"
                                                    className="block px-4 py-2 text-sm nav-link2"
                                                >
                                                    Profile
                                                </Link>
                                                <button
                                                    className="nav-link2 block px-4 py-2 text-sm "
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="group relative inline-block text-left">
                                        <div className="inline-flex w-full">
                                            <button
                                                className="dropdown group-hover:block"
                                                type="button"
                                                onClick={drop}
                                            >
                                                Account
                                                <i className="ri-arrow-drop-down-line"></i>
                                            </button>
                                        </div>
                                        <div
                                            id="asd"
                                            className="absolute hidden dropdown-links right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div className="" role="none">
                                                <Link
                                                    to="/sign-in"
                                                    className="block px-4 py-2 text-sm nav-link2"
                                                >
                                                    Sign In
                                                </Link>
                                                <Link
                                                    to="/sign-up"
                                                    className="block px-4 py-2 text-sm nav-link2"
                                                >
                                                    Sign Up
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* HamBurger */}
                        <button
                            id="menu-btn"
                            className="block hamburger mr-0 lg:hidden focus:outline-none"
                            onClick={onClick}
                        >
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                    {/* Mobile View */}
                    {/* {showMenu && ( */}
                    <div
                        id="menu"
                        className="absolute hidden p-6 left-6 right-6 top-20 z-40 bg-gray-300 lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                            <Link to="/" className="nav-links">
                                Category
                            </Link>
                            <Link to="/create-shop" className="nav-links">
                                Start Creating
                            </Link>
                            <Link to="/admin" className="nav-links">
                                Admin Panel
                            </Link>
                            <div>
                                {user?.myName ? (
                                    <div className="relative inline-block text-left">
                                        <div className="inline-flex w-full">
                                            <button
                                                className="dropdown"
                                                type="button"
                                                onClick={drop1}
                                            >
                                                {user?.myName}
                                                <i className="ri-arrow-drop-down-line"></i>
                                            </button>
                                        </div>
                                        <div className="dropdown-links1 absolute hidden z-10 mt-2 w-44 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="" role="none">
                                                <Link
                                                    to="/profile"
                                                    className="block px-4 py-2 text-sm nav-link2"
                                                >
                                                    Profile
                                                </Link>

                                                <button
                                                    className="nav-link block px-4 py-2 text-sm nav-link2"
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative inline-block text-left">
                                        <div className="inline-flex w-full">
                                            <button
                                                className="dropdown"
                                                type="button"
                                                onClick={drop1}
                                            >
                                                Account
                                                <i className="ri-arrow-drop-down-line"></i>
                                            </button>
                                        </div>
                                        <div className="dropdown-links1 absolute hidden right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="" role="none">
                                                <Link
                                                    to="/sign-in"
                                                    className="block px-4 py-2 text-sm nav-link2"
                                                >
                                                    Sign In
                                                </Link>
                                                <Link
                                                    to="/sign-up"
                                                    className="block px-4 py-2 text-sm nav-link2"
                                                >
                                                    Sign Up
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar

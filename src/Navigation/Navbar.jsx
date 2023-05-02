import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import { logout } from "../store/actions/userActions";
import { logo } from "../assets/svg/logo";
const Navbar = () => {
  let showMenu = false;

  //Toggle Mobile Menu
  const onClick = () => {
    showMenu = !showMenu;
    toggleMenu();
  };

  document.addEventListener("click", e => {
    if (showMenu && e.target.closest("#menu")) {
      showMenu = false;
      toggleMenu();
    }
  });

  function toggleMenu() {
    var btn = document.getElementById("menu-btn");
    var menu = document.getElementById("menu");
    btn.classList.toggle("open");
    if (showMenu) {
      menu.classList.remove("hidden");
    } else if (!showMenu) {
      menu.classList.add("hidden");
    }
  }

  const drop = () => {
    var menu = document.querySelector(".dropdown");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  const drop1 = () => {
    var menu = document.querySelector(".dropdown1");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="container mx-auto p-5 max-w-full subcateg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-80">
            {/* Logo */}
            <div className="flex flex-row items-center justify-center space-x-2 ml-10">
              <span>{logo()}</span>
              <Link to="/">
                <h1 className="font-bold cursor-pointer">STee</h1>
              </Link>
            </div>
            {/* left Menu */}
            <div className="hidden lg:flex font-bold space-x-14">
              <Link to="/" className="text-zinc-700 hover:text-veryDarkViolet">
                Home
              </Link>
              <Link to="/" className="text-zinc-700 hover:text-veryDarkViolet">
                Category
              </Link>
              <Link to="/" className="text-zinc-700 hover:text-veryDarkViolet">
                StartCreating
              </Link>
              <Link
                to="/admin"
                className="text-zinc-700 hover:text-veryDarkViolet"
              >
                Admin Panel
              </Link>
            </div>
          </div>

          <div className="space-x-4">
            <Link to="/cart">
              <i
                className="ri-shopping-cart-line cursor-pointer"
                title="Cart"
              ></i>
            </Link>
            <Link to="/cart">
              <i
                className="ri-notification-line cursor-pointer"
                title="Notification"
              ></i>
            </Link>
          </div>
          {/* Right Menu */}

          <div className="items-center hidden lg:flex font-boldh text-zinc-700">
            <div className="px-7 py-3">
              {user?.myName ? (
                <div className="relative inline-block text-left">
                  <div className="inline-flex w-full">
                    <button
                      className="text-zinc-700 hover:text-veryDarkViolet"
                      type="button"
                      onClick={drop}
                    >
                      {user?.myName}
                      <i className="ri-arrow-drop-down-line"></i>
                    </button>
                  </div>
                  <div className="dropdown absolute right-0 z-10 hidden mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='class="py-1"' role="none">
                      <Link
                        to="/profile"
                        className="text-gray-700 block px-4 py-2 text-sm hover:text-black"
                      >
                        Profile
                      </Link>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:text-black"
                        onClick={logoutHandler}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/sign-in"
                  className="text-zinc-700 hover:text-veryDarkViolet"
                >
                  SignIn/SignUp
                </Link>
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
          className="absolute hidden p-6 left-6 right-6 top-20 z-40 bg-white"
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white ">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/" className="nav-links">
              Category
            </Link>
            <Link to="/" className="nav-links">
              StartCreating
            </Link>
            <Link to="/admin" className="nav-links">
              Admin Panel
            </Link>
            <div>
              {user?.myName ? (
                <div className="relative inline-block text-left">
                  <div className="inline-flex w-full">
                    <button
                      className="text-zinc-700 hover:text-veryDarkViolet"
                      type="button"
                      onClick={drop1}
                    >
                      {user?.myName}
                      <i className="ri-arrow-drop-down-line"></i>
                    </button>
                  </div>
                  <div className="dropdown1 absolute z-10 hidden mt-2 w-44 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='class="py-1"' role="none">
                      <Link
                        to="/profile"
                        className="text-gray-700 block px-4 py-2 text-sm hover:text-veryDarkViolet"
                      >
                        Profile
                      </Link>

                      <a
                        className="text-gray-700 block px-4 py-2 text-sm"
                        onClick={logoutHandler}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/sign-in"
                  className="text-zinc-700 hover:text-veryDarkViolet"
                >
                  SignIn/SignUp
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* )} */}
      </nav>
    </>
  );
};

export default Navbar;

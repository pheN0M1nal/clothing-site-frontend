import React from "react";
import img1 from "../assets/images/snowman-cute-doll-plush-toys-winter-5k-6000x4001-8676.jpg";
import img2 from "../assets/images/snowman-snow-covered-winter-snow-4608x3456-9163.jpg";
import img3 from "../assets/images/sydney-sweeney-7680x4320-9661.jpg";
import img4 from "../assets/images/winter-forest-trees-landscape-frost-snow-covered-sunrise-3840x2160-8001.jpg";

import "remixicon/fonts/remixicon.css";

import { sweaterSvg } from "../assets/svg/sweater.jsx";
import { tShirtsvg } from "../assets/svg/tShirt";
import { jacketsvg } from "../assets/svg/jacket";
import { creator1 } from "../assets/svg/creator1";
import { creator2 } from "../assets/svg/creator2";
import { creator3 } from "../assets/svg/creator3";

import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container flex flex-col min-w-full">
        {/* First Section: Main heading with search bar and Picture */}
        <section className="search">
          <div className="container flex flex-col mx-0 sm:mx-auto sm:items-start">
            {/* Main Heading with search bar */}
            <div className="flex flex-col w-80 h-80 search">
              <span className="capitalize text-4xl font-bold text-zinc-700 mt-5">
                Create & Wear on demand
              </span>
              <p className="mt-5 text-zinc-700">
                Create & sell custom products with your designs, we'll print and
                ship them to your customers
              </p>
              <div className="flex flex-row mt-5 rounded-lg shadow-2xl bg-white">
                <form action="">
                  <input
                    type="email"
                    className="h-14 ml-4 items-center focus:outline-none placeholder:text-zinc-700 transition-all"
                    placeholder="Search product here"
                  />
                  <div className="inline ml-12 py-2 px-3 rounded-md search searchbtn">
                    <button className="text-zinc-700">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Best Product Category */}
        <section className="mt-20">
          <div className="container flex flex-col mx-auto max-w-full sm:flex-row">
            <div className="flex flex-col w-80 h-40 mx-0 sm:items-start">
              <span className="capitalize text-4xl font-bold text-zinc-700 ml-7">
                Best Product Category
              </span>
              <div className="allproduct">
                <button className="text-zinc-700">
                  <Link to="/allProducts">See all product</Link>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="container flex flex-col items-end overflow-hidden productadjust sm:w-180 sm:mx-auto ">
              <div className="flex flex-row space-x-2">
                <img src={img1} className="w-40 h-30" alt="" />
                <img src={img2} className="w-40 h-30" alt="" />
                <img src={img3} className="w-40 h-30" alt="" />
                <img src={img4} className="w-40 h-30" alt="" />
              </div>
              <div className="arrows space-y-3 space-x-4">
                <button>
                  {/* <i className="fa fa-long-arrow-left" aria-hidden="true"></i> */}
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="h-20"></div>
        {/* Trendy Categories section*/}
        <section>
          <div className="flex flex-col items-center">
            {/* heading*/}
            <div className="flex flex-col space-y-4 text-center w-80 mx-auto">
              <div>
                <span className="text-3xl text-zinc-700 font-bold">
                  Trendy Categories
                </span>
              </div>
              <div className="text-center">
                <span>
                  Create & sell custom products with your designs, we'll print
                  and ship them to your customers
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="h-20"></div>
        {/*Sub Categories button*/}
        <div className="flex">
          <div className="flex flex-col items-center space-y-6 space-x-0 subcateg mx-auto text-zinc-700 font-bold sm:flex-row sm:space-x-16 sm:space-y-0">
            <div className="flex flex-col w-52 h-52 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto ">
              <div className="">{sweaterSvg()}</div>
              <div>Sweater Custom</div>
            </div>
            <div className="flex flex-col w-52 h-52 bg-zinc-700 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto">
              <div>{tShirtsvg()}</div>
              <div className="text-white">T-Shirt Custom</div>
            </div>
            <div className="flex flex-col w-52 h-52 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto">
              <div>{jacketsvg()}</div>
              <div>Jacket Custom</div>
            </div>
          </div>
        </div>
        <div className="h-20"></div>
        {/* Best Product Category */}
        <section className="mt-20 space-y-16">
          <div className="flex items-center mx-auto w-80">
            <span className="text-center capitalize textsize font-bold text-zinc-700">
              start creating your designs from scratch
            </span>
          </div>
          <div className="container flex flex-col mx-auto max-w-full sm:flex-row">
            <div className="allproduct">
              <button className="text-zinc-700">
                See all product{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
            <div className="container flex flex-col items-end overflow-hidden productadjust sm:w-180 sm:mx-auto ">
              <div className="flex flex-row space-x-2">
                <img src={img1} className="w-40 h-30" alt="" />
                <img src={img2} className="w-40 h-30" alt="" />
                <img src={img3} className="w-40 h-30" alt="" />
                <img src={img4} className="w-40 h-30" alt="" />
              </div>
              <div className="arrows space-y-3 space-x-4">
                <button>
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="h-16"></div>
        {/* Featured section*/}
        <section className="search">
          <div className="flex flex-col items-center">
            {/* heading*/}
            <div className="flex flex-col space-y-4 text-center mx-auto search">
              <div className="w-80 mx-auto mt-5">
                <span className="text-3xl text-zinc-700 font-bold">
                  Featured Creators
                </span>
              </div>
              <div className="text-center">
                <span>The top rated creators of our designing community</span>
              </div>
            </div>
          </div>
        </section>
        {/*Sub Categories button*/}
        <div className="flex search">
          <div className="flex flex-col items-center subcateg mx-auto space-y-6 space-x-0 text-zinc-700 font-bold search categ sm:flex-row sm:h-96 sm:space-x-16 sm:space-y-0 sm:mt-0">
            <div className="shadow-2xl rounded-2xl mt-5 sm:mt-0">
              {creator1()}
            </div>
            <div className="shadow-xl rounded-2xl">{creator2()}</div>
            <div className="shadow-xl rounded-2xl">{creator3()}</div>
          </div>
        </div>
        <div className="h-20"></div>
        {/* Best Product Category */}
        <section className="mt-20">
          <div className="container flex flex-col mx-auto max-w-full sm:flex-row">
            <div className="flex flex-col w-80 h-40 mx-0 sm:mx- sm:items-start">
              <span className="capitalize text-4xl font-bold text-zinc-700 ml-7">
                Sell your designs
              </span>
              <div className="allproduct">
                <button className="text-zinc-700">
                  See all product{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="container flex flex-col items-end overflow-hidden productadjust sm:w-180 sm:mx-auto ">
              <div className="flex flex-row space-x-2">
                <img src={img1} className="w-40 h-30" alt="" />
                <img src={img2} className="w-40 h-30" alt="" />
                <img src={img3} className="w-40 h-30" alt="" />
                <img src={img4} className="w-40 h-30" alt="" />
              </div>
              <div className="arrows space-y-3 space-x-4">
                <button>
                  <i class="ri-arrow-left-line"></i>
                </button>
                <button>
                  <i class="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="h-20"></div>
      </div>
    </>
  );
}

export default Home;

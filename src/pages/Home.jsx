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

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllProducts } from "../store/actions/productActions";

import Carousel from "../components/product/Carousel";

function Home() {
  return (
    <>
      <div className="flex flex-col min-w-full">
        {/* First Section: Main heading with search bar and Picture */}
        <section className="bg-slate-600">
          <div className="flex flex-col sm:mx-auto sm:items-start bg-slate-600">
            <div className="flex flex-col w-72 sm:w-80 h-80 bg-slate-600 mx-14">
              <span className="capitalize text-4xl font-bold text-white mt-5 w-auto">
                Create & Wear on demand
              </span>
              <p className="mt-5 text-white w-auto">
                Create & sell custom products with your designs, we'll print and
                ship them to your customers
              </p>
              <div className="flex flex-row mt-5 w-[275px] sm:w-auto rounded-lg shadow-2xl bg-white">
                <form action="">
                  <input
                    type="email"
                    className="h-14 ml-1 sm:ml-4 items-center focus:outline-none placeholder:text-zinc-700 transition-all"
                    placeholder="Search product here"
                  />
                  <div className="inline ml-3 sm:ml-12 py-2 px-3 rounded-md bg-slate-600 searchbtn">
                    <button className="text-white">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Best Product Category */}
        <section className="mt-20">
          {/* <div className="container flex flex-col items-center justify-center mx-auto w-80 sm:max-w-full"> */}
          {/* <div className="flex flex-col items-center justify-center"> */}
          <div className="flex items-center mx-auto w-72">
            <span className="flex flex-row text-center text-3xl font-bold text-zinc-700">
              Best Product Category
            </span>
            {/* </div> */}
          </div>
          <div className="mt-7">
            {/* allProducts Carousel */}
            {/* <Carousel /> */}
            <div className="flex flex-col items-center">
              <button className="text-zinc-700">
                <Link to="/allProducts">See all product</Link>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          {/* </div> */}
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
            <div className="flex flex-col w-52 h-52 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto subcategRes">
              <div className="">{sweaterSvg()}</div>
              <div>Sweater Custom</div>
            </div>
            <div className="flex flex-col w-52 h-52 bg-zinc-700 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto subcategRes">
              <div>{tShirtsvg()}</div>
              <div className="text-white">T-Shirt Custom</div>
            </div>
            <div className="flex flex-col w-52 h-52 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto subcategRes">
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
            <div className="container flex flex-col items-end overflow-hidden productadjust sm:w-180 sm:mx-auto ">
              <div className="flex flex-row space-x-2">
                <img src={img1} className="w-40 h-30" alt="" />
                <img src={img2} className="w-40 h-30" alt="" />
                <img src={img3} className="w-40 h-30" alt="" />
                <img src={img4} className="w-40 h-30" alt="" />
              </div>
              <div className="">
                <button className="text-zinc-700">
                  See all product
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="h-16"></div>
        {/* Featured section*/}
        <section className="flex flex-col items-center bg-slate-600">
          <div className="flex flex-col items-center">
            {/* heading*/}
            <div className="flex flex-col space-y-4 text-center mx-auto bg-slate-600 text-white">
              <div className="w-80 mx-auto mt-5">
                <span className="text-3xl  font-bold">Featured Creators</span>
              </div>
              <div className="text-center">
                <span>The top rated creators of our designing community</span>
              </div>
            </div>
          </div>
          {/*Sub Categories button*/}
          <div className="flex flex-col items-center subcateg mx-auto space-y-6 space-x-0 text-white font-bold bg-slate-600 categ sm:flex-row sm:h-96 sm:space-x-16 sm:space-y-0 sm:mt-0">
            <div className="shadow-2xl rounded-2xl sm:mt-0">{creator1()}</div>
            <div className="shadow-xl rounded-2xl">{creator2()}</div>
            <div className="shadow-xl rounded-2xl">{creator3()}</div>
          </div>
        </section>
        <div className="h-20"></div>
        {/* Best Product Category */}
        <section className="mt-20">
          <div className="container flex flex-col items-center justify-center mx-auto w-80 sm:max-w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-80 text-center">
                <span className="capitalize text-3xl font-bold text-zinc-700 ml-7">
                  Sell your Designs
                </span>
              </div>
            </div>
            <div className="container flex flex-col items-center productadjust sm:w-180 sm:mx-auto mt-7">
              <div className="flex flex-row space-x-2">
                {/* <img src={img1} className="w-40 h-30" alt="" />
                <img src={img2} className="w-40 h-30" alt="" />
                <img src={img3} className="w-40 h-30" alt="" />
                <img src={img4} className="w-40 h-30" alt="" /> */}
              </div>
              <div className="">
                <button className="text-zinc-700">
                  <Link to="/allProducts">See all product</Link>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
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

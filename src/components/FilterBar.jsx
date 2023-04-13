import React from "react";

const FilterBar = () => {
  return (
    <>
      <div className="flex items-center justify-center border-2 border-blue-400 rounded-md h-10">
        <form action="">
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none w-20 sm:w-auto"
          />
          <select name="categories" id="" className="outline-none">
            <option value="disabled selected">All Categories</option>
            <option value="">3-5 star</option>
            <option value="">less than $500</option>
            <option value="">less than $2000</option>
          </select>
          <button className=" sm:w-24 h-[36px] rounded-r-md search">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default FilterBar;

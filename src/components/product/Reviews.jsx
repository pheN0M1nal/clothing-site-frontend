import React from "react";
import ReviewItem from "./ReviewItem";

import { useState } from "react";
import { useSelector } from "react-redux";

const Reviews = () => {
  const [formData, setFormData] = useState({
    comment: "",
  });

  const { comment } = formData;

  const ratingNum = [0, 1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const userDetails = useSelector(state => state.userDetails);

  const onChange = async e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex items-center w-full h-12 text-white bg-slate-600 rounded-b">
        <div className="mx-7 space-x-8">
          <span>Reviews</span>
        </div>
      </div>

      {userDetails ? (
        <div className="flex items-center justify-center w-80 h-40 border border-zinc-300 mt-5">
          <span className="text-base text-center text-zinc-400">
            Please Login First to place a review
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center w-[300px] sm:w-96 border border-slate-300 rounded-lg mt-5 space-y-4">
          <div className="flex flex-col items-center space-y-3 w-[300px]">
            <span className="text-center text-lg text-slate-400">
              Place a Review
            </span>
            <div className="flex space-x-3">
              {ratingNum?.map(number => (
                <button
                  key={number}
                  className={`w-8 h-8 border rounded-full hover:bg-slate-600 hover:text-[#D2FF28] ${
                    number === rating
                      ? "bg-slate-600 text-[#D2FF28]"
                      : "bg-slate-200 text-slate-500"
                  }`}
                  onClick={() => setRating(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col items-center justify-center space-y-3 w-[300px]">
              <textarea
                name="comment"
                id="comment"
                value={comment}
                onChange={onChange}
                className="w-[279px] h-24 border text-slate-500 outline-none text-xs rounded-md text-center"
                placeholder="Enter comment here....."
              ></textarea>
            </div>
            <div className="flex items-center justify-center mt-5 mb-5">
              <div className="flex items-center justify-center bg-slate-600 w-36 rounded-3xl">
                <button
                  type="submit"
                  className="p-2 text-[#D2FF28] transition-all duration-200"
                >
                  SUBMIT
                </button>

                <i className="ri-arrow-right-line text-[#D2FF28]"></i>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Review Form */}

      <div className="mt-2">
        <ReviewItem />
      </div>
    </>
  );
};

export default Reviews;

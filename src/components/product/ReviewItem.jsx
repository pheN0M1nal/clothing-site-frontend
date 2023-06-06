import React from "react";

import { DynamicStar } from "react-dynamic-star";

const ReviewItem = () => {
  return (
    <>
      <div className="border border-zinc-300">
        <div className="flex flex-col mx-4 my-2 space-y-2">
          {/* Rating */}
          {/* Rating Starts */}
          <DynamicStar
            rating={4}
            outlined={true}
            outlinedColor={"#D2FF28"}
            fullStarColor={"#D2FF28"}
            height={20}
            width={13}
          />
          {/* User name  and Date*/}
          <div className="flex justify-between">
            <span className="text-sm font-serif text-zinc-500">By Talha</span>
            {/* Date */}
            <span className="text-sm font-serif text-zinc-500">
              06 oct, 2022
            </span>
          </div>
          {/* Comment */}
          <span className="text-sm text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            cupiditate eligendi labore explicabo beatae, ea placeat cum.
            Eligendi suscipit, unde harum aut, dignissimos excepturi dolorem
            incidunt, molestiae aspernatur modi eum.
          </span>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;

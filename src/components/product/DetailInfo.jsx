import React from "react";
import Description from "./Description";
import Reviews from "./Reviews";

const DetailInfo = ({ descr }) => {
  return (
    <>
      <div className="space-y-7">
        <Description descr={descr} />
        <Reviews />
      </div>
    </>
  );
};

export default DetailInfo;

import React from "react";

const Description = ({ descr }) => {
  return (
    <>
      <div className="flex items-center w-full h-12 text-white bg-slate-600 rounded-t">
        <div className="mx-7 space-x-8">
          <span>Description</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto mt-5">
        <div>
          <div className="mx-4 space-y-10">{descr}</div>
          <div className="w-[280px] mx-2 sm:mx-4 sm:w-180 h-64 border"></div>
          <div className="mx-4">
            Some great features name here <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur <br /> <br />
            adipisicing elit. Quam vitae rem maiores <br />
            <br />
            Some Great features name here <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;

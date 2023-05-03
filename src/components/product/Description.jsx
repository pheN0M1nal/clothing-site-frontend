import React from "react";

const Description = ({ descr }) => {
  return (
    <>
      <div className="mx-4 space-y-10">{descr}</div>
      <div className="mx-4 w-180 h-64 border"></div>
      <div className="mx-4">
        Some great features name here <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur <br /> <br />
        adipisicing elit. Quam vitae rem maiores <br />
        <br />
        Some Great features name here <br />
        <br />
      </div>
    </>
  );
};

export default Description;

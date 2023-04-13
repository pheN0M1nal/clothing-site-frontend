import React from "react";

const UserDetails = () => {
  return (
    <>
      <div className="absolute top-48 right-76 w-60 h-40 text-zinc-400">
        <div className="flex flex-col space-y-7">
          <span className="text-zinc-300">Your Name</span>
          <span className="text-xs ml-2">Talha Mazhar</span>
          <span className="text-zinc-300">Email</span>
          <span className="text-xs ml-2">contacttalhamazhar@gmail.com</span>
          <div className="h-[0.05rem] w-[250px] bg-indigo-500"></div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

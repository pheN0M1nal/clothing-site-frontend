import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;

  return (
    <>
      <div className="flex flex-col justify-center space-y-6 w-60 h-52 text-zinc-400">
        <span className="text-zinc-300">Your Name</span>
        <span className="text-xs ml-2">{user.myName}</span>
        <span className="text-zinc-300">Email</span>
        <span className="text-xs ml-2">{user.email}</span>
        <div className="h-[0.05rem] w-[250px] bg-indigo-500"></div>
      </div>
    </>
  );
};

export default UserDetails;

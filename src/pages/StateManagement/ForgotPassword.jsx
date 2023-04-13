import React from "react";

function ForgotPassword() {
  const onSubmit = () => {};

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto space-y-14 h-180">
        <h1 className="text-3xl font-semibold">Forgot Password ?</h1>
        <form onSubmit={onSubmit} className="space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-black p-4 rounded-xl"
          />
          <button className="w-32 h-14 bg-blue-500 text-yellow-50 text-sm rounded-xl hover:bg-blue-600">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;

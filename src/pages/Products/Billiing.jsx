import React, { useState } from "react";

const Billiing = () => {
  const [formData, setFormData] = useState({
    number: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const { number, address, city, state, postalCode } = formData;

  const onChange = async e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    //dispatch(login(formData.email, formData.password));
  };
  return (
    <>
      <div className="flex items-center justify-center min-w-full">
        <div className="flex w-80 sm:w-full">
          <form onSubmit={onSubmit}>
            {/* Contact Details */}
            <div className="">
              <span>Contact Details</span>
              <div className="flex flex-col text-sm font-extralight ">
                <label className="text-zinc-400">Phone Number</label>
                <input
                  type="tel"
                  id="number"
                  value={number}
                  onChange={onChange}
                  className="border border-slate-200 outline-none text-zinc-600"
                />
              </div>
            </div>

            {/* Shipping Details */}
            <div>
              <span>Shipping Details</span>
              <div className="flex flex-col text-sm font-extralight">
                <label className="text-zinc-400">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={onChange}
                  className="border border-slate-200 outline-none text-zinc-600"
                />
              </div>

              <div className="flex flex-col  text-sm font-extralight">
                <label className="text-zinc-400">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={onChange}
                  id="city"
                  className="border border-slate-200 outline-none text-zinc-600"
                />
              </div>

              <div className="flex flex-col  text-sm font-extralight">
                <label className="text-zinc-400">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={onChange}
                  id="state"
                  className="border border-slate-200 outline-none text-zinc-600"
                />
              </div>

              <div className="flex flex-col  text-sm font-extralight">
                <label className="text-zinc-400">Postal Code</label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={onChange}
                  id="postalCode"
                  className="border border-slate-200 outline-none text-zinc-600"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="h-8 w-24 m-3 p-[0.2rem] font-serif search rounded-sm"
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Billiing;

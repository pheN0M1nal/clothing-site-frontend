import React, { useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logo } from '../../assets/svg/logo'
import { addBillingInfo } from '../../store/actions/billingActions'
const Billiing = () => {
    const { user } = useSelector((state) => state.userDetails)

    const [formData, setFormData] = useState({
        number: '',
        address: '',
        fullname: '',
        postalCode: '',
    })

    const { number, address, fullname, postalCode } = formData

    const onChange = async (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addBillingInfo(formData))
        navigate('/order-place')
    }

    return (
        <>
            <div className="flex flex-row signIn md:justify-between sm:w-full h-full">
                <div className="flex items-center justify-center sm:w-3/4">
                    <div className="flex flex-col my-12 p-3 w-80 md:w-[500px]">
                        <div className="shadow-lg rounded-xl">
                            <div className="p-8">
                                <div className="flex flex-col space-y-5">
                                    <div className="flex text-2xl font-mono font-semibold space-x-2 mt-8">
                                        <span>{logo()}</span>
                                        <span>STee</span>
                                    </div>

                                    <span className="text-4xl font-medium">
                                        Order Place
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <form onSubmit={onSubmit}>
                                        <span className="text-base text-zinc-500">
                                            Contact Details !!!
                                        </span>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="number"
                                                value={number}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        {/* {emailerror && (
                    <span className='mt-1 italic text-white'>
                      {emailerror}
                    </span>
                  )} */}
                                        <div className="mt-5">
                                            <span className="text-base text-zinc-500">
                                                Shipping Details !!!
                                            </span>
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="fullname"
                                                value={fullname}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="address"
                                                value={address}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Postal Code
                                            </label>
                                            <input
                                                type="number"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="postalCode"
                                                value={postalCode}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center justify-center mt-5 ">
                                            <div className="flex items-center justify-center bg-slate-600 w-36 rounded-3xl">
                                                <button
                                                    type="submit"
                                                    className="p-2 text-[#D2FF28] transition-all duration-200"
                                                >
                                                    Next
                                                </button>

                                                <i className="ri-arrow-right-line text-[#D2FF28]"></i>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden dis md:block">
                    <div className="w-96 h-full search"></div>
                </div>
            </div>
        </>
    )
}

export default Billiing

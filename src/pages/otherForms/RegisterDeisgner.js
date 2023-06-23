import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '../../components/Spinner'
import { logo } from '../../assets/svg/logo'
import { toast } from 'react-toastify'
import signInMain from '../../assets/images/signInMain.svg'

import {
    createShop,
    registerDesigner,
} from '../../store/actions/designerActions'

function RegisterDeisgner() {
    const [formData, setFormData] = useState({})
    //Indentifying Api response
    const { loading, error, designerInfo } = useSelector(
        (state) => state.registerDesigner
    )

    const { user } = useSelector((state) => state.userDetails)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user?._id) {
            navigate('/sign-in')
            toast.info('Please sign in to continue.')
        }
    }, [user?._id])

    useEffect(() => {
        setFormData({
            myName: '',
            accountName: '',
            email: user?.email,
            bankName: '',
            accountNo: '',
        })
    }, [user])

    //adding input data to form
    const onChange = async (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    //Calling Api and sending data
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(registerDesigner(formData))
    }

    //Navigating to Profile on Success

    designerInfo?.email && navigate('/create-shop')
    //Api error
    useEffect(() => {
        designerInfo?.email && navigate('/create-shop')

        if (error && !user?.userType === 'Customer') {
            toast.info(error)
            if (error === 'Please login to continue.') {
                navigate('/sign-in')
            }
        }

        if (designerInfo) {
            toast.success('Designer registered.')
            navigate('/create-shop')
        }
    }, [designerInfo, error])

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

                                    <span className="text-xs text-zinc-500">
                                        Lets be creative.
                                    </span>
                                    <span className="text-4xl font-medium">
                                        Be a designer!
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <form onSubmit={onSubmit}>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Designer Name
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="myName"
                                                value={formData.myName}
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                email
                                            </label>
                                            <input
                                                disabled
                                                type="text"
                                                className="opacity-70 p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="email"
                                                value={formData.email}
                                            />
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Bank Name
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="bankName"
                                                value={formData.bankName}
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Account Name
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="accountName"
                                                value={formData.accountName}
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Account number
                                            </label>
                                            <input
                                                type="number"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="accountNo"
                                                value={formData.accountNo}
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div className="flex items-center justify-center mt-5 ">
                                            {loading ? (
                                                <Spinner />
                                            ) : (
                                                <div className="flex items-center justify-center bg-slate-600 w-56 rounded-3xl">
                                                    <button
                                                        type="submit"
                                                        className="p-2 text-[#D2FF28] transition-all duration-200"
                                                    >
                                                        Continue to shop
                                                    </button>

                                                    <i className="ri-arrow-right-line text-[#D2FF28]"></i>
                                                </div>
                                            )}
                                        </div>
                                    </form>

                                    <div className="flex flex-row items-center justify-center mt-8 text-xs sm:text-sm space-x-2 mb-10">
                                        <Link
                                            to="/profile"
                                            className="hover:text-slate-700"
                                        >
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden dis md:block">
                    <img src={signInMain} alt="" />
                </div>
            </div>
        </>
    )
}

export default RegisterDeisgner

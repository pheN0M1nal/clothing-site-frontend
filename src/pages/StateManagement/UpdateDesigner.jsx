import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import validator from "validator"
import { register } from "../../store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "../../components/Spinner"

import { logo } from "../../assets/svg/logo"
import axiosInstance from "../../api/axios"
import { USER_DETAILS_SUCCESS } from "../../store/constants/userConstants"
function UpdateDesigner() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [emailerror, setError] = useState(false)
    const [check, setCheck] = useState(false)

    const { user } = useSelector((state) => state.userDetails)

    const [loading, setLoading] = useState(false)

    //form data contains all fields data in application like input fields {represents object}
    const [formData, setFormData] = useState({
        accountName: "",
        bankName: "",
        myName: "",
        accountNo: "",
    })

    useEffect(() => {
        setFormData({
            accountName: user.accountName,
            bankName: user.bankName,
            myName: user.myName,
            accountNo: user.accountNo,
        })
    }, [user])

    //to use email/pasword anywhere in our app we need to de-structure them from formData
    const { accountName, bankName, myName, accountNo } = formData

    function isValidEmail(mail) {
        return /\S+@\S+\. \S+/.test(mail)
    }

    const addName = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const addEmail = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
        if (!isValidEmail(e.target.value)) {
            setError("Invalid Email")
        } else {
            setError(null)
            var errorMsg = document.querySelector(".errorMsg")
            axios
                .get("url", {
                    email: e.target.value,
                })
                .then((data) => {
                    errorMsg.classList.remove("hidden")
                })
                .catch((error) => {
                    errorMsg.classList.add("hidden")
                })
        }
    }

    const validate = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
        if (
            validator.isStrongPassword(user.email, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            })
        ) {
            setCheck(true)
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            }))
        } else {
            setCheck(false)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        axiosInstance()
            .put(`/designers/updateDesigner/?id=${user._id}`, formData)
            .then(({ data }) => {
                setLoading(false)

                toast.success(data.message)
                dispatch({
                    type: USER_DETAILS_SUCCESS,
                    payload: data.designer,
                })
            })
            .err(() => {
                setLoading(false)

                console.log("error in update user")
            })
    }

    return (
        <>
            <div className="flex flex-row signIn ">
                <div className="flex  sm:w-3/4">
                    <div className="flex flex-col ml-4 my-8 w-80 md:w-[400px]">
                        <div className="rounded-xl">
                            <div className="">
                                <div className="flex flex-col space-y-5">
                                    <span className="text-2xl font-medium">
                                        Update Profile
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <form onSubmit={onSubmit}>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                UserName
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="myName"
                                                value={myName}
                                                onChange={addName}
                                            />
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Bank name
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="bankName"
                                                value={bankName}
                                                onChange={addName}
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
                                                value={accountName}
                                                onChange={addName}
                                            />
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Account Number
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="accountNo"
                                                value={accountNo}
                                                onChange={addName}
                                            />
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                disabled
                                                className="opacity-50 p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="email"
                                                value={user.email}
                                                onChange={addEmail}
                                            />
                                        </div>
                                        <span className="mt-1 italic hidden errorMsg text-red-400">
                                            Email already exist
                                        </span>

                                        <div className="flex items-center justify-center mt-5 ">
                                            {loading ? (
                                                <Spinner />
                                            ) : (
                                                <div className="flex items-center justify-center bg-slate-600 w-36 rounded-3xl">
                                                    <button
                                                        type="submit"
                                                        className="p-2 text-[#D2FF28] transition-all duration-200"
                                                    >
                                                        Update
                                                    </button>

                                                    <i className="ri-arrow-right-line text-[#D2FF28]"></i>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateDesigner

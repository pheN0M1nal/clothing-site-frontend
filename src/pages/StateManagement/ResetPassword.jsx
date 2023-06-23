import React from 'react'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '../../components/Spinner'
import axiosInstance from '../../api/axios'

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //form data contains all fields data in application like input fields {represents object}
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        cnewPassword: '',
    })
    //to use email/pasword anywhere in our app we need to de-structure them from formData
    const { oldPassword, newPassword, cnewPassword } = formData

    const togglePasswordEye = () => {
        var set_signin_eye = document.querySelector('.changeeye')
        if (showPassword) {
            set_signin_eye.classList.remove('fa-eye-slash')
            set_signin_eye.classList.add('fa-eye')
        } else {
            set_signin_eye.classList.add('fa-eye-slash')
            set_signin_eye.classList.remove('fa-eye')
        }
        setShowPassword((prevState) => !prevState)
    }
    const { user } = useSelector((state) => state.userDetails)

    const validate = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
        // if (
        //     validator.isStrongPassword(email, {
        //         minLength: 8,
        //         minLowercase: 1,
        //         minUppercase: 1,
        //         minNumbers: 1,
        //         minSymbols: 1,
        //     })
        // ) {
        //     setCheck(true)
        //     setFormData((prevState) => ({
        //         ...prevState,
        //         [e.target.id]: e.target.value,
        //     }))
        // } else {
        //     setCheck(false)
        // }
    }
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        if (newPassword !== cnewPassword) {
            toast.error("Passwords does'nt match.")
            return
        }

        setLoading(true)
        axiosInstance()
            .put(`/users/resetPassword/?id=${user._id}`, {
                oldPassword,
                newPassword,
            })
            .then(({ data }) => {
                setLoading(false)
                setFormData({
                    oldPassword: '',
                    newPassword: '',
                    cnewPassword: '',
                })
                toast.success(data.message)
            })
            .catch(({ response }) => {
                setLoading(false)

                toast.error(response.data.message)
            })
    }

    return (
        <>
            <div className="flex flex-row signIn ">
                <div className="flex  sm:w-3/4">
                    <div className="flex flex-col ml-4 w-80 md:w-[400px]">
                        <div className="srounded-xl">
                            <div className="">
                                <div className="flex flex-col space-y-5">
                                    <span className="text-2xl font-medium">
                                        Reset Password
                                    </span>
                                </div>
                                <div className="">
                                    <form onSubmit={onSubmit}>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Old Password
                                            </label>
                                            <input
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="oldPassword"
                                                value={oldPassword}
                                                onChange={validate}
                                            />
                                            <label className="text-sm font-mono text-zinc-700">
                                                New Password
                                            </label>
                                            <input
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="newPassword"
                                                value={newPassword}
                                                onChange={validate}
                                            />
                                            <label className="text-sm font-mono text-zinc-700">
                                                Confirm Password
                                            </label>
                                            <input
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="cnewPassword"
                                                value={cnewPassword}
                                                onChange={validate}
                                            />
                                            {/* {check ? (
                          <span className="absolute top-3 right-9 transition-all duration-200">
                            <i
                              className="checkIcon fa fa-check "
                              style={{ color: "green" }}
                            ></i>
                          </span>
                        ) : (
                          <span className="absolute top-3 right-9 transition-all duration-200">
                            <i
                              className="checkIcon fa fa-times "
                              style={{ color: "red" }}
                            ></i>
                          </span>
                        )} */}

                                            <span
                                                className="absolute top-9 right-2"
                                                onClick={togglePasswordEye}
                                            >
                                                {/* <i className="checkIcon hidden fa cursor-pointer text-white"></i> */}
                                                <i className="changeeye fa fa-eye-slash cursor-pointer text-white"></i>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center mt-5 ">
                                            {loading ? (
                                                <Spinner />
                                            ) : (
                                                <div className="flex items-center justify-center bg-slate-600 w-36 rounded-3xl">
                                                    <button
                                                        type="submit"
                                                        className="p-2 text-[#D2FF28] transition-all duration-200"
                                                    >
                                                        Reset
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

export default ResetPassword

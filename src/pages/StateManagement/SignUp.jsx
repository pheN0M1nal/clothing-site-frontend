import React from "react"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import validator from "validator"
import { register } from "../../store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "../../components/Spinner"
import signInMain from "../../assets/images/signInMain.svg"

import { logo } from "../../assets/svg/logo"
function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [emailerror, setError] = useState(false)
    const [check, setCheck] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginInfo = useSelector((state) => state.userRegister)
    const { loading, userInfo } = loginInfo

    userInfo?.email && navigate("/")

    //form data contains all fields data in application like input fields {represents object}
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    //to use email/pasword anywhere in our app we need to de-structure them from formData
    const { name, email, password } = formData

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
            validator.isStrongPassword(email, {
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
    const togglePasswordEye = () => {
        var set_signin_eye = document.querySelector(".changeeye")
        if (showPassword) {
            set_signin_eye.classList.remove("fa-eye-slash")
            set_signin_eye.classList.add("fa-eye")
        } else {
            set_signin_eye.classList.add("fa-eye-slash")
            set_signin_eye.classList.remove("fa-eye")
        }
        setShowPassword((prevState) => !prevState)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(register(formData.name, formData.email, formData.password))
        } catch (error) {
            toast.error("Something went wrong with registration")
        }
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

                                    <span className="text-xs text-zinc-500">
                                        Welcome !!!
                                    </span>
                                    <span className="text-4xl font-medium">
                                        Sign Up
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <form onSubmit={onSubmit}>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                UserName
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="name"
                                                value={name}
                                                onChange={addName}
                                            />
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="email"
                                                value={email}
                                                onChange={addEmail}
                                            />
                                        </div>
                                        <span className="mt-1 italic hidden errorMsg text-red-400">
                                            Email already exist
                                        </span>
                                        {/* {emailerror && (
                        <span className="mt-1 italic text-red-400">
                          {emailerror}
                        </span>
                      )} */}
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Password
                                            </label>
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="password"
                                                value={password}
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
                                                        Register
                                                    </button>

                                                    <i className="ri-arrow-right-line text-[#D2FF28]"></i>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                    <div className="flex flex-row items-center justify-center mt-8 text-xs sm:text-sm space-x-2 mb-10">
                                        <div className="text-zinc-400">
                                            Already have an account?
                                        </div>

                                        <Link
                                            to="/sign-in"
                                            className="hover:text-slate-700"
                                        >
                                            Sign In
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

export default SignUp

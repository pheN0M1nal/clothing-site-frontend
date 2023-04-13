import React from "react"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import validator from "validator"
function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [emailerror, setError] = useState(false)
    const [check, setCheck] = useState(false)

    //form data contains all fields data in application like input fields {represents object}
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    //to use email/pasword anywhere in our app we need to de-structure them from formData
    const { name, email, password } = formData

    const navigate = useNavigate()

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
            navigate("/")
        } catch (error) {
            toast.error("Something went wrong with registration")
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div
                    className="flex flex-col my-12 p-3"
                    style={{ width: "340px" }}
                >
                    <div className="shadow-2xl shadow-black text-white hover:shadow-indigo-500/40 duration-200">
                        <div className="p-8 bg-slate-800">
                            <div className="italic text-center">
                                Let's Get Started
                            </div>
                            <div className="mt-2">
                                <form onSubmit={onSubmit}>
                                    <div
                                        className="relative mt-3
                  "
                                    >
                                        <input
                                            type="text"
                                            className="p-3 w-full rounded-md text-slate-700 placeholder:font-sans placeholder:font-light italic transition-all focus:outline-violet-600"
                                            placeholder="Enter your name"
                                            id="name"
                                            value={name}
                                            onChange={addName}
                                        />
                                    </div>
                                    <div
                                        className="relative mt-3
                  "
                                    >
                                        <input
                                            type="email"
                                            className="p-3 w-full rounded-md text-slate-700 placeholder:font-sans placeholder:font-light italic transition-all focus:outline-violet-600"
                                            placeholder="Enter your email address"
                                            id="email"
                                            value={email}
                                            onChange={addEmail}
                                        />
                                    </div>
                                    <span className="mt-1 italic hidden errorMsg text-red-400">
                                        Email already exist
                                    </span>
                                    {emailerror && (
                                        <span className="mt-1 italic text-red-400">
                                            {emailerror}
                                        </span>
                                    )}
                                    <div className="relative mt-3">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className="p-3 w-full rounded-md text-xs text-slate-700 placeholder:font-sans placeholder:font-light italic transition-all focus:outline-violet-600"
                                            placeholder="Enter your password"
                                            id="password"
                                            value={password}
                                            onChange={validate}
                                        />
                                        {check ? (
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
                                        )}

                                        <span
                                            className="absolute top-3 right-2"
                                            onClick={togglePasswordEye}
                                        >
                                            <i className="checkIcon hidden fa cursor-pointer text-slate-900"></i>
                                            <i className="changeeye fa fa-eye-slash cursor-pointer text-slate-900"></i>
                                        </span>
                                    </div>
                                    <div className="relative flex justify-center mt-3">
                                        <button className="p-3 w-full text-center border border-violet-600 rounded-lg hover:bg-violet-800 transition-all duration-200">
                                            Register
                                        </button>
                                    </div>
                                </form>
                                <div className="relative mt-5 italic">
                                    <p>
                                        Have an account?
                                        <Link
                                            to="/sign-in"
                                            className="pl-4 hover:text-violet-600"
                                        >
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp

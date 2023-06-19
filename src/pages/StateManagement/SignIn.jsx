import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/actions/userActions"
import { Spinner } from "../../components/Spinner"
import { logo } from "../../assets/svg/logo"
import signInMain from "../../assets/images/signInMain.svg"
import { toast } from "react-toastify"

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    // const [emailerror, setError] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData

    // function isValidEmail(mail) {
    //   return /\S+@\S+\. \S+/.test(mail)
    // }

    const navigate = useNavigate()

    const { loading, userInfo, error } = useSelector((state) => state.userLogin)
    useEffect(() => {
        userInfo?._id && navigate("/")
    }, [userInfo?._id])

    useEffect(() => {
        userInfo?.email && navigate("/")

        error && toast.error(error)
    }, [userInfo?._email, error])

    const dispatch = useDispatch()

    const onChange = async (e) => {
        // if (!isValidEmail(email)) {
        //   setError("Invalid Email")
        // } else {
        //   setError(null)
        //   var errorMsg = document.querySelector(".errorMsg")
        //   axios
        //     .get("url", {
        //       email: email,
        //     })
        //     .then((data) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))

        // console.log('formData', formData)

        //   errorMsg.classList.add("hidden")
        // })
        //     .catch((error) => {
        //       errorMsg.classList.remove("hidden")
        //     })
        // }
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

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(login(formData.email, formData.password))
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
                                        Welcome Back !!!
                                    </span>
                                    <span className="text-4xl font-medium">
                                        Sign In
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <form onSubmit={onSubmit}>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="email"
                                                value={email}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <span className="mt-1 italic hidden errorMsg text-white">
                                            Email doesn't exist
                                        </span>
                                        {/* {emailerror && (
                      <span className='mt-1 italic text-white'>
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
                                                onChange={onChange}
                                            />
                                            <span
                                                className="absolute top-9 right-2"
                                                onClick={togglePasswordEye}
                                            >
                                                <i className="changeeye fa fa-eye-slash cursor-pointer text-white"></i>
                                            </span>
                                        </div>
                                        <div className="flex justify-end mt-2">
                                            <Link
                                                to="/forgot-password"
                                                className="hover:text-zinc-800 text-sm text-zinc-400"
                                            >
                                                Forgot Password?
                                            </Link>
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
                                                        SIGN IN
                                                    </button>

                                                    <i className="ri-arrow-right-line text-[#D2FF28]"></i>
                                                </div>
                                            )}
                                        </div>
                                    </form>

                                    <div className="flex flex-row items-center justify-center mt-8 text-xs sm:text-sm space-x-2 mb-10">
                                        <div className="text-zinc-400">
                                            I don't have an account?
                                        </div>
                                        <Link
                                            to="/sign-up"
                                            className="hover:text-slate-700"
                                        >
                                            Sign Up
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

export default SignIn

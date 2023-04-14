import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../store/actions/userActions"
import { Spinner } from "../../components/Spinner"

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    // const [emailerror, setError] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData
    const navigate = useNavigate()

    // function isValidEmail(mail) {
    //   return /\S+@\S+\. \S+/.test(mail)
    // }

    const loginInfo = useSelector((state) => state.userLogin)
    const { loading, userInfo } = loginInfo

    userInfo && navigate("/")

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
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <div
                        className="flex flex-col my-12 p-3"
                        style={{ width: "340px" }}
                    >
                        <div className="shadow-2xl shadow-black text-white hover:shadow-indigo-500/40 duration-200">
                            <div className="p-8 bg-slate-800">
                                <div className="text-center uppercase">
                                    Login
                                </div>
                                <div className="mt-2">
                                    <form onSubmit={onSubmit}>
                                        <div
                                            className="relative mt-3
                  "
                                        >
                                            <input
                                                type="test"
                                                className="p-3 w-full rounded-md text-slate-700 placeholder:font-sans placeholder:font-light italic transition-all focus:outline-violet-600"
                                                placeholder="Enter your email address"
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
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                className="p-3 w-full rounded-md text-slate-700 placeholder:font-sans placeholder:font-light italic transition-all focus:outline-violet-600"
                                                placeholder="Enter your password"
                                                id="password"
                                                value={password}
                                                onChange={onChange}
                                            />
                                            <span
                                                className="absolute top-3 right-2"
                                                onClick={togglePasswordEye}
                                            >
                                                <i className="changeeye fa fa-eye-slash cursor-pointer text-slate-900"></i>
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <Link
                                                to="/forgot-password"
                                                className="hover:text-violet-600 text-sm italic"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>

                                        <div className="relative flex justify-center mt-3">
                                            <button
                                                type="submit"
                                                className="p-3 w-full text-center border border-violet-600 rounded-lg hover:bg-violet-800 transition-all duration-200"
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>

                                    <div className="flex flex-row relative mt-5 italic text-sm space-x-2">
                                        <div>Don't have an account?</div>
                                        <Link
                                            to="/sign-up"
                                            className="hover:text-violet-600"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignIn

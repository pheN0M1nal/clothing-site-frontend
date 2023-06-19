import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import signInMain from "../../assets/images/signInMain.svg"

import { Spinner } from "../../components/Spinner"
import { logo } from "../../assets/svg/logo"
import { toast } from "react-toastify"
import { createShop } from "../../store/actions/designerActions"
import { notifyFailure } from "../../components/helpers/notifications/notifyFailure"

function CreateShop() {
    const [formData, setFormData] = useState({
        shopName: "",
        description: "",
    })

    const navigate = useNavigate()

    const { designerInfo } = useSelector((state) => state.registerDesigner)

    const { shopName, description } = formData

    // const loginInfo = useSelector(state => state.userRegister);
    // const { loading, userInfo } = loginInfo;

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
        dispatch(createShop(formData, designerInfo._id))
    }

    //Indentifying Api response
    const { loading, error, shopInfo } = useSelector(
        (state) => state.createShop
    )

    //Api error
    useEffect(() => {
        if (shopInfo) {
            toast.success("Shop created successfully.")
            navigate("/designer")
        }
    }, [shopInfo, error, designerInfo])

    //Navigating to Profile on Success

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
                                        Welcome!!!
                                    </span>
                                    <span className="text-4xl font-medium">
                                        Create Shop
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <form onSubmit={onSubmit}>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Shop Name
                                            </label>
                                            <input
                                                type="text"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                id="shopName"
                                                value={shopName}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                value={description}
                                                rows="10"
                                                cols="30"
                                                className="p-2 mt-2 w-full rounded-md text-white bg-slate-600 outline-none text-xs"
                                                onChange={onChange}
                                            >
                                                Type here...
                                            </textarea>
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
                                                        CREATE SHOP
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

export default CreateShop

import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { logo } from "../../assets/svg/logo"

import { placeAnOrder } from "../../store/actions/billingActions"
import axiosInstance from "../../api/axios"
import { toast } from "react-toastify"
import { fetchUserOrders } from "../../store/actions/userActions"

const OrderPlace = () => {
    const shippingDetails = useSelector((state) => state.billingInfo)

    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails
    const cartItems = useSelector((state) => state.cartItems)
    const totalBill = localStorage.getItem("userBill")
        ? JSON.parse(localStorage.getItem("userBill"))
        : 0
    const dispatch = useDispatch()
    const orderDetails = {
        userID: user._id,

        // phNum: shippingDetails.number,
        address: shippingDetails.address,
        fullName: shippingDetails.fullname,
        postalCode: shippingDetails.postalCode,
        cartItems: cartItems, //array of products
    }
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const { placedOrder } = useSelector((state) => state.placeOrder)

    useEffect(() => {
        if (pathname.split("/")[2] === "payment-verified" && user._id) {
            toast.success("Payment successful.")
        }
    }, [user])

    useEffect(() => {
        if (pathname.split("/")[2] === "payment-verified" && user?._id) {
            user?._id && dispatch(placeAnOrder(orderDetails, user?._id))
            navigate("/profile")
        }
    }, [user?._id])

    const url =
        process.env.REACT_APP_NODE_ENV === "development"
            ? process.env.LOCAL_SITE_URL
            : process.env.LIVE_SITE_URL

    const verifyPayment = () => {
        axiosInstance()
            .post("/stripe/create-checkout-session", {
                cartItems,
                success_url: `${url}/order-place/payment-verified`,
                cancel_url: "http://localhost:3000/order-place/cancel-success",
            })
            .then(({ data }) => {
                console.log(data)
                window.location.replace(data.url)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="flex flex-col items-center sm:w-full h-full">
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
                                        Welcome to Final Confirmation !!!
                                    </span>
                                    <span className="text-4xl font-medium">
                                        Finalize Order
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <div>
                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Your Username
                                            </label>

                                            <div className="mt-2 w-full h-8 rounded-md text-zinc-500  text-sm">
                                                {user?.myName}
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Your Email
                                            </label>

                                            <div className="mt-2 w-full h-8 rounded-md text-zinc-500  text-sm">
                                                {user?.email}
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Your Number
                                            </label>

                                            <div className="mt-2 w-full h-8 rounded-md text-zinc-500 text-sm">
                                                {shippingDetails?.number}
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Shipping Address
                                            </label>

                                            <div className="flex items-center mt-2 w-full h-8 rounded-md text-zinc-500 text-sm">
                                                {shippingDetails?.address}
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Full name
                                            </label>

                                            <div className="flex items-center mt-2 w-full h-8 rounded-md text-zinc-500 text-sm">
                                                {shippingDetails?.fullname}
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <label className="text-sm font-mono text-zinc-700">
                                                Postal Code
                                            </label>

                                            <div className="mt-2 w-full h-8 rounded-md text-zinc-500  text-sm">
                                                {shippingDetails?.postalCode}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-slate-600 w-40 rounded-3xl">
                    <button
                        className="p-2 text-xs text-[#D2FF28] transition-all duration-200"
                        onClick={() => verifyPayment()}
                    >
                        Confirm Order <br /> Total: ${totalBill}
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrderPlace

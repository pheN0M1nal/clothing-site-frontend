import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Bill from "../../components/cart/Bill"
import { deleteFromCart } from "../../store/actions/cartActions"
import Items from "../../components/cart/Items"
import { decQty, incQty } from "../../store/actions/cartActions"
import { toast } from "react-toastify"

const Cart = () => {
    var bill = 0

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [items, setItems] = useState([])

    //getting cart data from local storage
    const data = useSelector((state) => state.cartItems)

    useEffect(() => {
        setItems(data)
    }, [data])

    //deleting data from cart regarding product id

    const deleteItem = (id) => {
        dispatch(deleteFromCart(id))
    }

    //calculating total bill and sending it to Bill component
    items.length > 0 &&
        items.map((item) => {
            return (bill += item.price * item.purchaseQty)
        })

    const decrementQty = (item) => {
        const updatedItems = items.map((i) => {
            if (i._id === item._id) {
                const newQuantity = i.purchaseQty > 1 ? i.purchaseQty - 1 : 1
                return {
                    ...i,
                    purchaseQty: newQuantity,
                }
            }
            return i
        })
        setItems(updatedItems)
        dispatch(decQty(updatedItems))
    }

    const incrementQty = (item) => {
        const updatedItems = items.map((i) => {
            if (i._id === item._id) {
                const newQuantity =
                    i.purchaseQty < i.quantity
                        ? i.purchaseQty + 1
                        : i.purchaseQty
                return {
                    ...i,
                    purchaseQty: newQuantity,
                }
            }
            return i
        })
        setItems(updatedItems)
        dispatch(incQty(updatedItems))
    }
    const { user } = useSelector((state) => state.userDetails)

    const placeOrder = (totalbill) => {
        if (totalbill > 0) {
            if (user?._id) {
                localStorage.setItem("userBill", JSON.stringify(totalbill))
                navigate("/billing")
            } else {
                toast.info("Please login to continue.")
                navigate("/sign-in")
            }
        }
    }

    return (
        <>
            <div className="cartInfo">
                {/* Left Side Cart */}
                <div className="">
                    <div className="flex flex-col items-center w-72 sm:items-start">
                        {/* Heading + Back Button */}
                        <span className="text-zinc-500">
                            <Link to="/">
                                <i className="ri-arrow-left-s-line cursor-pointer"></i>
                                Shopping Continue
                            </Link>
                        </span>

                        {/* Heading Bar */}

                        <div className="bg-zinc-300 h-[0.10rem] w-72 sm:w-full mt-5"></div>
                        <div className="mt-2 text-sm">Shopping cart</div>
                        {/* Total Items in Cart */}
                        <span className="text-xs text-zinc-600">
                            You have {items.length} items in your cart
                        </span>
                        {/* Product Lists & Info in Cart */}
                    </div>
                    {items.length > 0 && (
                        <Items
                            items={items}
                            onDelete={deleteItem}
                            onInc={incrementQty}
                            onDec={decrementQty}
                        />
                    )}
                </div>
                {/* Right Side Payment Info */}
                <div className="flex items-center justify-center  w-[288px] h-[450px] bg-zinc-600 rounded-2xl">
                    <Bill bill={bill} placeOrder={placeOrder} />
                </div>
            </div>
        </>
    )
}

export default Cart

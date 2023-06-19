import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "../components/Spinner"
import styled from "styled-components"

import DesignerSubNav from "../components/DesignerSubNav"
import {
    deleteProduct,
    getdesignerProducts,
} from "../store/actions/productActions"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { fetchDesignerProducts } from "../store/actions/designerActions"
import axiosInstance from "../api/axios"
import { toast } from "react-toastify"

const Wrapper = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;

    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
        small {
            font-size: 0.5em;
        }
    }

    .section1 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background-color: #d2ff28;
            padding: 0.8em 1em;
            border-radius: 50px;
            border: 1px solid black;
        }
        button:hover {
            text-decoration: underline;
        }
    }

    .responsive-table {
        font-size: small;
        li {
            border-radius: 3px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .table-header {
            background-color: #d2ff28;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }
        .table-row {
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
        }
        .col {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .col-1 {
            flex-basis: 10%;
        }
        .col-2 {
            flex-basis: 25%;
            cursor: pointer;
            font-weight: 500;
        }
        .col-2:hover {
            text-decoration: underline;
        }
        .col-3 {
            flex-basis: 15%;
        }
        .col-4 {
            flex-basis: 10%;
        }
        .col-5 {
            flex-basis: 10%;
        }
        .col-6 {
            flex-basis: 8%;
            svg {
                height: 20px;
                width: 20 px;
                cursor: pointer;
            }
        }
        .col-7 {
            flex-basis: 3%;
        }
        .col img {
            width: 70px;
            height: 70px;
        }

        @media all and (max-width: 767px) {
            .table-header {
                display: none;
            }
            .table-row {
            }
            li {
                display: block;
            }
            .col {
                flex-basis: 100%;
            }
            .col {
                display: flex;
                padding: 10px 0;
                &:before {
                    color: #6c7a89;
                    padding-right: 10px;
                    content: attr(data-label);
                    flex-basis: 50%;
                    text-align: right;
                }
            }
        }
    }
`
const DesignerProducts = () => {
    const dispatch = useDispatch()
    const { loading, loading_delete, designerProducts } = useSelector(
        (state) => state.designerProducts
    )

    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchDesignerProducts(user._id))
    }, [])

    const addProduct = () => {
        navigate("/designer/addProduct")
    }

    const navigateToProduct = (id) => {
        navigate(`/product/${id}`)
    }
    const { pathname } = useLocation()

    const url =
        process.env.REACT_APP_NODE_ENV === "development"
            ? process.env.REACT_APP_LOCAL_SITE_URL
            : process.env.REACT_APP_LIVE_SITE_URL

    useEffect(() => {
        if (pathname.split("/")[2] === "payment-verified" && user._id) {
            toast.success("Payment successful.")
        }
        if (pathname.split("/")[2] === "payment-cancelled" && user._id) {
            toast.error("Payment unsuccessful! Please try again.")
        }
    }, [user])

    const makeProductFeautured = (id) => {
        axiosInstance()
            .put(`products/featureProduct?id=${id}`, {
                success_url: `${url}/designer/products/payment-verified`,
                cancel_url: `${url}/designer/products/payment-cancelled`,
            })
            .then(({ data }) => {
                window.location.replace(data.url)
            })
            .catch((err) => {
                toast.error("Error in featured product placement.")
                console.log(err)
            })
    }

    return (
        <Wrapper>
            <DesignerSubNav />
            <div className="section1">
                {" "}
                <h2>Your Products</h2>
                <button onClick={addProduct}>Add Product</button>{" "}
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Image</div>
                        <div className="col col-2">Id</div>
                        <div className="col col-3">name</div>
                        <div className="col col-4">Category</div>
                        <div className="col col-5">Price</div>
                        <div className="col col-6">Featured</div>

                        <div className="col col-7">#</div>
                        <div className="col col-8">#</div>
                    </li>

                    {!loading && designerProducts?.products?.length === 0 && (
                        <h3>Zero products.</h3>
                    )}

                    {designerProducts?.products?.map((item) => (
                        <li className="table-row" key={item._id}>
                            <div className="col col-1" data-label="Id">
                                <img src={item.image[0]} />
                            </div>

                            <div
                                className="col col-2"
                                onClick={() => navigateToProduct(item._id)}
                                data-label="Id"
                            >
                                {item._id}
                            </div>
                            <div className="col col-3" data-label="Name">
                                {item.productName}
                            </div>
                            <div className="col col-4" data-label="Email">
                                {item.category}
                            </div>
                            <div className="col col-5" data-label="Email">
                                {item.price} Rs
                            </div>
                            <div
                                className="col col-6"
                                data-label="Feautured"
                                onClick={() => makeProductFeautured(item._id)}
                            >
                                {item?.featured ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path>
                                    </svg>
                                )}
                            </div>

                            {}

                            <div className="col col-7" data-label="# #">
                                {loading_delete === item._id ? (
                                    <Spinner />
                                ) : (
                                    <i
                                        onClick={() =>
                                            dispatch(deleteProduct(item._id))
                                        }
                                        className="ri-delete-bin-line w-[20px] cursor-pointer mx-2"
                                    ></i>
                                )}
                            </div>

                            <div className="col col-8" data-label="# #">
                                <Link to={`/update-product/${item._id}`}>
                                    <i className="ri-edit-box-line cursor-pointer mx-2"></i>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Wrapper>
    )
}

export default DesignerProducts

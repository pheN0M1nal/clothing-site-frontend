import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "../../components/Spinner"
import styled from "styled-components"

import AdminSubNav from "../../components/AdminSubNav"
import {
    deleteProduct,
    getAllProducts,
} from "../../store/actions/productActions"
import { useNavigate } from "react-router-dom"

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
            background-color: #95a5a6;
            padding: 0.8em 1em;
            border-radius: 50px;
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
            background-color: #95a5a6;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }
        .table-row {
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
        }
        .col-1 {
            flex-basis: 10%;
        }
        .col-2 {
            flex-basis: 20%;
            cursor: pointer;
            font-weight: 500;
        }
        .col-2:hover {
            text-decoration: underline;
        }
        .col-3 {
            flex-basis: 30%;
        }
        .col-4 {
            flex-basis: 10%;
        }
        .col-5 {
            flex-basis: 10%;
        }
        .col-6 {
            flex-basis: 3%;
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
const AllProducts = () => {
    const dispatch = useDispatch()
    const { loading, loading_delete, allProducts } = useSelector(
        (state) => state.allProducts
    )

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const addProduct = () => {
        navigate("/admin/addProduct")
    }

    const navigateToProduct = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <Wrapper>
            <AdminSubNav />
            <div className="section1">
                {" "}
                <h2>All Products</h2>
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
                        <div className="col col-6">#</div>
                        <div className="col col-7">#</div>
                    </li>

                    {!loading && allProducts?.products?.length === 0 && (
                        <h3>Zero products.</h3>
                    )}

                    {allProducts?.products?.map((item) => (
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
                                {item.price}$
                            </div>

                            {}

                            <div className="col col-6" data-label="# #">
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

                            <div className="col col-7" data-label="# #">
                                <i className="ri-edit-box-line cursor-pointer mx-2"></i>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Wrapper>
    )
}

export default AllProducts

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Spinner } from '../../components/Spinner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { deleteAdmin } from '../../store/actions/adminActions'
import 'remixicon/fonts/remixicon.css'

import { fetchUserOrders } from '../../store/actions/userActions'
import ResetPassword from './ResetPassword'
import UpdateUser from './UpdateUser'
import UpdateDesigner from './UpdateDesigner'
import axiosInstance from '../../api/axios'
import { fetchDesignerOrder } from '../../store/actions/designerActions'
import { toast } from 'react-toastify'
import moment from 'moment'

const DeliveryStatus = styled.div`
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 3px;
    font-size: xx-small;

    background-color: ${(props) =>
        props.order.status === 'pending'
            ? 'aliceblue'
            : props.order.status === 'processing'
            ? '#c6f4e88d '
            : '#c5f6c5 '};
`

const Wrapper = styled.div`
    max-width: 95%;

    padding-left: 10px;
    padding-right: 10px;
    display: flex;

    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
        small {
            font-size: 0.5em;
        }
    }

    .responsive-table {
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
            flex-basis: 25%;
            font-size: x-small;
        }
        .col-2 {
            flex-basis: 25%;
        }
        .col-3 {
            flex-basis: 10%;
        }
        .col-4 {
            flex-basis: 25%;
        }
        .col-5 {
            flex-basis: 10%;
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

const Profile = () => {
    const dispatch = useDispatch()
    const { loading, error, orders } = useSelector((state) => state.userOrders)

    const { user } = useSelector((state) => state.userDetails)

    useEffect(() => {
        user?.userType === 'Customer'
            ? user?._id && dispatch(fetchUserOrders(user?._id))
            : user?._id && dispatch(fetchDesignerOrder(user?._id))
    }, [dispatch, user?.userType, user?._id])

    const delivereyStatus = (order) => {
        if (order?.status === 'delivered') return

        order?.status === 'pending'
            ? axiosInstance()
                  .put(`/orders/updateOrderStatusToProcessing?id=${order._id}`)
                  .then(({ data }) => {
                      toast.success(data.message)
                      user?._id && dispatch(fetchDesignerOrder(user?._id))
                  })
            : axiosInstance()
                  .put(`/orders/updateOrderStatusToDelivered?id=${order._id}`)
                  .then(({ data }) => {
                      toast.success(data.message)
                      user?._id && dispatch(fetchDesignerOrder(user?._id))
                  })
    }
    return (
        <Wrapper>
            {user?.userType && (
                <div>
                    {user.userType === 'Designer' ? (
                        <UpdateDesigner />
                    ) : (
                        <UpdateUser />
                    )}

                    <ResetPassword />
                </div>
            )}

            <div>
                <h2>Orders</h2>
                {loading ? (
                    <Spinner className="flex items-center justify-center mx-auto" />
                ) : (
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Id</div>
                            <div className="col col-2">Name</div>
                            <div className="col col-3">Price</div>
                            <div className="col col-4">Date and Time</div>
                            <div className="col col-5">Status</div>
                        </li>

                        {!loading && orders?.length === 0 && (
                            <h3>Zero Orders.</h3>
                        )}

                        {orders?.map((order) => (
                            <li className="table-row" key={order._id}>
                                <div className="col col-1" data-label="Id">
                                    {order._id}
                                </div>
                                <div className="col col-2" data-label="Name">
                                    {order.fullName}
                                </div>
                                <div className="col col-3" data-label="Price">
                                    {order.price}
                                </div>

                                {}

                                <div className="col col-4" data-label="# #">
                                    {moment(order.createdAt).format(
                                        'MMMM Do YYYY, h:mm:ss a'
                                    )}
                                </div>
                                <div className="col col-5" data-label="Status">
                                    <DeliveryStatus order={order}>
                                        {user?.userType === 'Designer' ? (
                                            <button
                                                onClick={() =>
                                                    delivereyStatus(order)
                                                }
                                            >
                                                {order?.status === 'pending'
                                                    ? 'Mark as processing'
                                                    : order?.status ===
                                                      'processing'
                                                    ? 'Mark as delivered'
                                                    : 'Delivered'}
                                            </button>
                                        ) : (
                                            <div>
                                                {order?.status
                                                    ? order.status
                                                    : 'Delivered'}
                                            </div>
                                        )}
                                    </DeliveryStatus>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Wrapper>
    )
}

export default Profile

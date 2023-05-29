import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAllAdmins,
    fetchAllDesigners,
    fetchAllUsers,
    fetchRatedDesigners,
} from "../../store/actions/adminActions"

import styled from "styled-components"
import Dashboard from "../../dashboard/pages/Dashboard"
import { Link, useNavigate } from "react-router-dom"

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
            flex-basis: 10%;
        }
        .col-2 {
            flex-basis: 40%;
        }
        .col-3 {
            flex-basis: 25%;
        }
        .col-4 {
            flex-basis: 25%;
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
const AdminDashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllAdmins())
        dispatch(fetchAllDesigners())
        dispatch(fetchAllUsers())
        dispatch(fetchRatedDesigners())
    }, [])
    const navigate = useNavigate()
    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails

    useEffect(() => {
        user?.userType !== "Admin" && navigate("/")
    }, [user])

    return (
        <div>
            {" "}
            <Dashboard />
        </div>
    )
}

export default AdminDashboard

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAdmins } from "../../store/actions/adminActions"
import { Spinner } from "../../components/Spinner"
import styled from "styled-components"
import { Link } from "react-router-dom"

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
const AllAdmins = () => {
    const dispatch = useDispatch()
    const { loading, admins } = useSelector((state) => state.allAdmins)

    useEffect(() => {
        dispatch(fetchAllAdmins())
    }, [])
    return (
        <Wrapper>
            <Link to="/admin/allAdmins">All Admins</Link>
            <Link to="/admin/allUsers">All Users</Link>
            <Link to="/admin/allDesigners">All Designers</Link>
            <h2>All Admins</h2>
            {loading ? (
                <Spinner />
            ) : (
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Id</div>
                        <div className="col col-2">Name</div>
                        <div className="col col-3">Email</div>
                        <div className="col col-4"># #</div>
                    </li>

                    {!loading && admins.length === 0 && (
                        <h3>Zero Admin users.</h3>
                    )}

                    {admins.map((user) => (
                        <li className="table-row">
                            <div className="col col-1" data-label="Id">
                                {user._id}
                            </div>
                            <div className="col col-2" data-label="Name">
                                {user.myName}
                            </div>
                            <div className="col col-3" data-label="Email">
                                {user.email}
                            </div>
                            <div className="col col-4" data-label="# #">
                                Pending
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Wrapper>
    )
}

export default AllAdmins

import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'

import WelcomeBanner from '../dashboard/partials/dashboard/WelcomeBanner'

import TopRatedDesigners from '../dashboard/partials/dashboard/TopRatedDesigners'

import DesignerSubNav from '../components/DesignerSubNav'
import { useEffect, useState } from 'react'
import DashboardCard06 from '../dashboard/partials/dashboard/DashboardCard06'
import { fetchDesignerProductsData } from '../store/actions/designerActions'

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
const DesignerDasboard = () => {
    const navigate = useNavigate()
    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails

    const [month, setMonth] = useState(6)

    const dispatch = useDispatch()

    useEffect(() => {
        user?.userType !== 'Designer'
            ? navigate('/')
            : dispatch(fetchDesignerProductsData(user._id, month, 2023))
    }, [user, month])

    return (
        <div>
            {' '}
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                {/* <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            /> */}
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <DesignerSubNav />
                    {/*  Site header */}
                    {/* <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                /> */}
                    <main>
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            {/* Welcome banner */}
                            <WelcomeBanner />
                            <label for="bdaymonth">Select a month:</label>
                            <input
                                type="month"
                                id="bdaymonth"
                                name="bdaymonth"
                                onChange={(e) =>
                                    setMonth(
                                        parseInt(e.target.value.split('-')[1])
                                    )
                                }
                            />
                            <DashboardCard06 />

                            {/* Cards */}
                            <div className="grid grid-cols-12 gap-6">
                                {/* Table (Top Channels) */}
                                {/* <TopRatedDesigners /> */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DesignerDasboard

import React, { useEffect, useState } from "react"

import Sidebar from "../partials/Sidebar"
import Header from "../partials/Header"
import WelcomeBanner from "../partials/dashboard/WelcomeBanner"
import DashboardAvatars from "../partials/dashboard/DashboardAvatars"
import FilterButton from "../partials/actions/FilterButton"
import Datepicker from "../partials/actions/Datepicker"
import DashboardCard01 from "../partials/dashboard/DashboardCard01"
import DashboardCard02 from "../partials/dashboard/DashboardCard02"
import DashboardCard03 from "../partials/dashboard/DashboardCard03"
import DashboardCard04 from "../partials/dashboard/DashboardCard04"
import DashboardCard05 from "../partials/dashboard/DashboardCard05"
import DashboardCard06 from "../partials/dashboard/DashboardCard06"
import TopRatedDesigners from "../partials/dashboard/TopRatedDesigners"
import DashboardCard08 from "../partials/dashboard/DashboardCard08"
import DashboardCard09 from "../partials/dashboard/DashboardCard09"
import DashboardCard10 from "../partials/dashboard/DashboardCard10"
import DashboardCard11 from "../partials/dashboard/DashboardCard11"
import DashboardCard12 from "../partials/dashboard/DashboardCard12"
import DashboardCard13 from "../partials/dashboard/DashboardCard13"
import { fetchRatedDesigners } from "../../store/actions/adminActions"
import { useDispatch } from "react-redux"

import AdminSubNav from "../../components/AdminSubNav"

function Dashboard() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRatedDesigners())
    }, [])
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {/* <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            /> */}
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <AdminSubNav />
                {/*  Site header */}
                {/* <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                /> */}

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {/* Welcome banner */}
                        <WelcomeBanner />

                        {/* Cards */}
                        <div className="grid grid-cols-12 gap-6">
                            {/* Table (Top Channels) */}
                            <TopRatedDesigners />

                            {/* <DashboardCard04 /> */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard

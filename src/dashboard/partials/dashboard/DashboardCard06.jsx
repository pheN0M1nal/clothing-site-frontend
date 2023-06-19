import React, { useEffect, useState } from "react"
import DoughnutChart from "../../charts/DoughnutChart"

// Import utilities
import { tailwindConfig } from "../../utils/Utils"
import { useSelector } from "react-redux"
import { Spinner } from "../../../components/Spinner"

function DashboardCard06() {
    const { designerProductsInfo, loading } = useSelector(
        (state) => state.designerData
    )

    const chartData = {
        labels: designerProductsInfo
            ? Object.keys(designerProductsInfo?.productsCount).map((item) => {
                  return designerProductsInfo?.productsCount[item].productName
              })
            : [],
        datasets: [
            {
                label: "Sales",
                data:
                    designerProductsInfo &&
                    Object.keys(designerProductsInfo?.productsCount).map(
                        (item) => {
                            return designerProductsInfo?.productsCount[item]
                                .count
                        }
                    ),
                backgroundColor: [" #bac690", "#8d9868", "#D2FF28"],
                hoverBackgroundColor: ["#D2FF28", "#8d9868", " #bac690"],
                hoverBorderColor: tailwindConfig().theme.colors.white,
            },
        ],
    }

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 text-center bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Product sales</h2>
            </header>
            {/* Chassrt built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            {loading ? (
                <Spinner />
            ) : chartData?.labels.length === 0 ? (
                <div className="p-2">You sales data graph will show here.</div>
            ) : (
                <DoughnutChart data={chartData} width={389} height={260} />
            )}
        </div>
    )
}

export default DashboardCard06

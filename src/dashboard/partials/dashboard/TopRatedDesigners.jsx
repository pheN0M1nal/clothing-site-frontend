import React from 'react'
import { useSelector } from 'react-redux'
import HighestOrdersDesignersChart from './HighestOrdersDesignersChart'

function TopRatedDesigners() {
    const { maxRated, maxSales, maxProductsSales } = useSelector(
        (state) => state.ratedDesigners
    )

    return (
        <>
            {' '}
            <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100 w-full">
                    <h2 className="font-semibold text-slate-800 ">
                        Highest Orders Designers
                    </h2>
                </header>

                <div className="p-3">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                <tr>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">
                                            Designer
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Orders
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Sales
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Average Product Rating
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}

                            <tbody className="text-sm font-medium divide-y divide-slate-100 w-full">
                                {maxRated?.map((item) => {
                                    return (
                                        <>
                                            {' '}
                                            <tr>
                                                <td className="p-2">
                                                    <div className="flex items-center">
                                                        <div className="text-slate-800">
                                                            {item.myName}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">
                                                        {item.totalNoOfOrders}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center text-green-500">
                                                        {item.totalSales}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">
                                                        {
                                                            item.avgRatingOfProducts
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex w-full">
                    {maxRated && (
                        <HighestOrdersDesignersChart
                            maxRated={maxRated}
                            text={'Orders'}
                            values={maxRated.map(
                                (item) => item.totalNoOfOrders
                            )}
                        />
                    )}
                    {maxRated && (
                        <HighestOrdersDesignersChart
                            maxRated={maxRated}
                            text={'Sales'}
                            values={maxRated.map((item) => item.totalSales)}
                        />
                    )}{' '}
                    {maxRated && (
                        <HighestOrdersDesignersChart
                            maxRated={maxRated}
                            text={'Rating'}
                            values={maxRated.map(
                                (item) => item.avgRatingOfProducts
                            )}
                        />
                    )}
                </div>
            </div>
            <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">
                        Highest Revenue
                    </h2>
                </header>

                <div className="p-3">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                <tr>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">
                                            Designer
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Orders
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Sales
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Average Product Rating
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}

                            <tbody className="text-sm font-medium divide-y divide-slate-100">
                                {maxSales?.map((item) => {
                                    return (
                                        <>
                                            {' '}
                                            <tr>
                                                <td className="p-2">
                                                    <div className="flex items-center">
                                                        <div className="text-slate-800">
                                                            {item.myName}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">
                                                        {item.totalNoOfOrders}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center text-green-500">
                                                        {item.totalSales}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">
                                                        {
                                                            item.avgRatingOfProducts
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex w-full">
                    {maxSales && (
                        <HighestOrdersDesignersChart
                            maxRated={maxSales}
                            text={'Orders'}
                            values={maxSales.map(
                                (item) => item.totalNoOfOrders
                            )}
                        />
                    )}
                    {maxSales && (
                        <HighestOrdersDesignersChart
                            maxRated={maxSales}
                            text={'Sales'}
                            values={maxSales.map((item) => item.totalSales)}
                        />
                    )}{' '}
                    {maxSales && (
                        <HighestOrdersDesignersChart
                            maxRated={maxSales}
                            text={'Rating'}
                            values={maxSales.map(
                                (item) => item.avgRatingOfProducts
                            )}
                        />
                    )}
                </div>
            </div>
            <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
                <header className="px-5 py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-800">
                        Highest Product Sales
                    </h2>
                </header>

                <div className="p-3">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                <tr>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">
                                            Designer
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Orders
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Sales
                                        </div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-center">
                                            Average Product Rating
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}

                            <tbody className="text-sm font-medium divide-y divide-slate-100">
                                {maxProductsSales?.map((item) => {
                                    return (
                                        <>
                                            {' '}
                                            <tr>
                                                <td className="p-2">
                                                    <div className="flex items-center">
                                                        <div className="text-slate-800">
                                                            {item.myName}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">
                                                        {item.totalNoOfOrders}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center text-green-500">
                                                        {item.totalSales}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">
                                                        {
                                                            item.avgRatingOfProducts
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex w-full">
                    {maxProductsSales && (
                        <HighestOrdersDesignersChart
                            maxRated={maxProductsSales}
                            text={'Orders'}
                            values={maxProductsSales.map(
                                (item) => item.totalNoOfOrders
                            )}
                        />
                    )}
                    {maxProductsSales && (
                        <HighestOrdersDesignersChart
                            maxRated={maxProductsSales}
                            text={'Sales'}
                            values={maxProductsSales.map(
                                (item) => item.totalSales
                            )}
                        />
                    )}{' '}
                    {maxProductsSales && (
                        <HighestOrdersDesignersChart
                            maxRated={maxProductsSales}
                            text={'Rating'}
                            values={maxProductsSales.map(
                                (item) => item.avgRatingOfProducts
                            )}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default TopRatedDesigners

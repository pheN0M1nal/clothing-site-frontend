import moment from 'moment'
import React from 'react'

import { DynamicStar } from 'react-dynamic-star'
import { useSelector } from 'react-redux'

const ReviewItem = () => {
    const { reviews } = useSelector((state) => state.reviews)

    return (
        <>
            <div className="border border-zinc-300">
                {reviews?.length === 0 ? (
                    <span>No reviews</span>
                ) : (
                    <div>
                        {reviews?.map((item) => (
                            <div className="flex border-b-1 border-zinc-500 flex-col mx-4 my-1 space-y-2">
                                {/* Rating */}
                                {/* Rating Starts */}
                                <div className="mt-8">
                                    <DynamicStar
                                        rating={item.rating}
                                        outlined={true}
                                        outlinedColor={'#D2FF28'}
                                        fullStarColor={'#D2FF28'}
                                        height={20}
                                        width={13}
                                    />
                                </div>

                                {/* User name  and Date*/}
                                <div className="flex justify-between">
                                    <span className="text-sm font-serif text-zinc-500">
                                        By {item.myName}
                                    </span>
                                    {/* Date */}
                                    <span className="text-sm font-serif text-zinc-500">
                                        {moment(item.createdAt).format(
                                            'MMMM Do YYYY, h:mm:ss a'
                                        )}
                                    </span>
                                </div>
                                {/* Comment */}
                                <span className="text-sm text-zinc-400">
                                    {item.comment}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default ReviewItem

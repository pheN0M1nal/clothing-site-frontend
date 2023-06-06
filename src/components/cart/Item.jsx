import "remixicon/fonts/remixicon.css"
const Item = ({ item, onDelete, onIncrement, onDecrement }) => {
    return (
        <>
            <div className="flex flex-row items-center justify-center mx-auto space-x-4 sm:space-x-6 md:space-x-11 border border-x-[1px] border-t-[1px] border-b-2 border-zinc-300 rounded-md drop-shadow-lg h-20 my-3 w-72 sm:w-full md:w-full lg:w-full">
                <div className="hidden sm:block sm:w-20 mx-2">
                    <img
                        src={item?.productImage}
                        alt="Error in loading..."
                        className="w-16 h-16"
                    />
                </div>
                <div className="flex flex-col w-full sm:w-16 md:w-[150px] mx-2">
                    <h2 className="text-xs sm:text-sm">
                        {item.productName.substring(0, 15).concat("...")}
                    </h2>
                    <h3 className="text-xs">Size: {item.size}</h3>
                </div>
                <div className="flex flex-row space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-7 items-center text-sm">
                    <i className="ri-star-fill w-[10px] hidden sm:block"></i>
                    <h3 className="w-[30px] hidden sm:block">
                        {item.rating}/5
                    </h3>

                    <div className="flex flex-row w-[60px] sm:w-[120px] md:w-[150px] space-x-2">
                        <i
                            className="ri-arrow-left-s-fill fa-2x cursor-pointer hover:text-red"
                            onClick={() => onDecrement(item)}
                        ></i>
                        <h1>{item.purchaseQty}</h1>
                        <i
                            className="ri-arrow-right-s-fill fa-2x cursor-pointer hover:text-green-500"
                            onClick={() => onIncrement(item)}
                        ></i>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-xs w-[30px] sm:w-[40px]">
                        ${item.price}
                    </span>
                    <i
                        className="ri-delete-bin-line w-[20px] cursor-pointer mx-2 hover:text-red"
                        onClick={() => onDelete(item._id)}
                    ></i>
                </div>
            </div>
        </>
    )
}

export default Item

import "remixicon/fonts/remixicon.css";
const Item = ({ item, onDelete, onIncrement, onDecrement }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-24 border border-x-[1px] border-t-[1px] border-b-2  border-zinc-300 rounded-md drop-shadow-lg h-20 mx-auto my-3">
        <div className="mx-2">
          <img
            src={item?.productImage}
            alt="Error in loading..."
            className="w-16 h-16"
          />
        </div>
        <div className="flex flex-col w-[150px] mx-2">
          <h2 className="text-sm">
            {item.productName.substring(0, 15).concat("...")}
          </h2>
          <h3 className="text-xs">Size: {item.size}</h3>
        </div>
        <div className="flex flex-row space-x-7 items-center text-sm">
          <i className="ri-star-fill w-[10px]"></i>
          <h3 className="w-[30px]">{item.rating}/5</h3>

          <div className="flex flex-row w-[90px] space-x-2">
            <i
              className="ri-arrow-left-s-fill fa-2x cursor-pointer"
              onClick={() => onDecrement(item)}
            ></i>
            <h1>{item.purchaseQty}</h1>
            <i
              className="ri-arrow-right-s-fill fa-2x cursor-pointer"
              onClick={() => onIncrement(item)}
            ></i>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-xs w-[40px]">${item.price}</span>
          <i
            className="ri-delete-bin-line w-[20px] cursor-pointer mx-2"
            onClick={() => onDelete(item._id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Item;

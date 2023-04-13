import React from "react";
import "remixicon/fonts/remixicon.css";
const Item = ({ item, onDelete }) => {
  return (
    // <tr className=" border border-x-[1px] border-t-[1px] border-b-2  border-zinc-300 rounded-">
    //   <td className="w-40 h-14">
    //     <h2 className="text-sm">{item.name}</h2>
    //     <h3 className="text-xs">{item.size}</h3>
    //   </td>
    //   <td className="text-sm w-32">
    //     <div className="flex flex-row space-x-2">
    //       <i className="ri-star-fill"></i>
    //       <h3 className="">{item.rating}</h3>
    //     </div>
    //   </td>
    //   <td className="text-sm">
    //     <h3>{item.quantity}</h3>
    //   </td>
    //   <td className="">
    //     <span className="text-xs">{item.price}</span>
    //   </td>
    //   <td>
    //     <i className="ri-delete-bin-line"></i>
    //   </td>
    // </tr>
    <>
      <div className="flex flex-row items-center justify-center space-x-24 border border-x-[1px] border-t-[1px] border-b-2  border-zinc-300 rounded-md drop-shadow-lg h-14 mx-auto my-3">
        <div className="flex flex-col w-[150px] mx-2">
          <h2 className="text-sm">{item.name}</h2>
          <h3 className="text-xs">{item.size}</h3>
        </div>
        <div className="flex flex-row space-x-7 items-center text-sm">
          <i className="ri-star-fill w-[10px]"></i>
          <h3 className="w-[30px]">{item.rating}</h3>
          <h3 className="w-90px">{item.quantity}</h3>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-xs w-[40px]">{item.price}</span>
          <i
            className="ri-delete-bin-line w-[20px] cursor-pointer mx-2"
            onClick={() => onDelete(item.id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Item;

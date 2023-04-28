import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bill from "../../components/cart/Bill";
import { deleteFromCart } from "../../store/actions/cartActions";
import Items from "../../components/cart/Items";
import { decQty, incQty } from "../../store/actions/cartActions";

const Cart = () => {
  var bill = 0;

  const [items, setItems] = useState([]);

  const data = useSelector(state => state.cartItems);
  useEffect(() => {
    //getting cart data from local storage
    setItems(data);
  }, [data]);

  const [actQuantity, setActQuantity] = useState(0);

  //deleting data from cart regarding product id
  const dispatch = useDispatch();
  const deleteItem = id => {
    dispatch(deleteFromCart(id));
  };

  //calculating total bill and sending it to Bill component
  items.length > 0 &&
    items.map(item => {
      return (bill += item.price);
    });

  const decrementQty = item => {
    const updatedItems = items.map(i => {
      if (i._id === item._id) {
        const newQuantity = i.purchaseQty > 1 ? i.purchaseQty - 1 : 1;
        return {
          ...i,
          purchaseQty: newQuantity,
        };
      }
      return i;
    });
    setItems(updatedItems);
    dispatch(decQty(updatedItems));
  };

  const incrementQty = item => {
    const updatedItems = items.map(i => {
      if (i._id === item._id) {
        const newQuantity =
          i.purchaseQty < i.quantity ? i.purchaseQty + 1 : i.purchaseQty;
        return {
          ...i,
          purchaseQty: newQuantity,
        };
      }
      return i;
    });
    setItems(updatedItems);
    dispatch(incQty(updatedItems));
  };

  // const decrementQty = item => {
  //   setActQuantity(item.purchaseQty);
  //   setActQuantity(actQuantity - 1);
  //   if (actQuantity > 1) {
  //     dispatch(
  //       decQty(
  //         items.map(i => {
  //           if (i._id === item._id) {
  //             const newQuantity =
  //               actQuantity >= 0 ? actQuantity : actQuantity + 1;

  //             return {
  //               ...item,
  //               purchaseQty: newQuantity,
  //             };
  //           }
  //           return i;
  //         })
  //       )
  //     );
  //   }
  // };
  // const incrementQty = item => {
  //   setActQuantity(item.purchaseQty);
  //   setActQuantity(actQuantity + 1);
  //   dispatch(
  //     incQty(
  //       items.map(i => {
  //         if (i._id === item._id) {
  //           return {
  //             ...item,
  //             purchaseQty: actQuantity,
  //           };
  //         }
  //         return i;
  //       })
  //     )
  //   );
  // };
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 space-x-0 mx-auto md:flex-row md:space-x-10 md:space-y-0">
        {/* Left Side Cart */}
        <div>
          {/* Heading + Back Button */}
          <span className="text-zinc-500">
            <Link to="/">
              {" "}
              <i className="ri-arrow-left-s-line cursor-pointer"></i>Shopping
              Continue
            </Link>
          </span>

          {/* Heading Bar */}

          <div className="bg-zinc-300 h-[0.10rem] w-full mt-5"></div>
          <div className="mt-2 text-sm">Shopping cart</div>
          {/* Total Items in Cart */}
          <span className="text-xs text-zinc-600">
            You have {items.length} items in your cart
          </span>
          {/* Product Lists & Info in Cart */}

          {items.length > 0 && (
            <Items
              items={items}
              onDelete={deleteItem}
              onInc={incrementQty}
              onDec={decrementQty}
            />
          )}
        </div>
        {/* Right Side Payment Info */}
        <div className="w-[290px] h-[450px] bg-zinc-600 rounded-2xl">
          <Bill bill={bill} />
        </div>
      </div>
    </>
  );
};

export default Cart;

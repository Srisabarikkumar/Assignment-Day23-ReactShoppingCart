/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button, List, ListItem, Typography } from "@material-tailwind/react";
import CartItem from "./CartItem";

function Cart({
  total,
  cartItems,
  showCartHandler,
  addCartItemsHandler,
  removeCartItemsHandler,
}) {
  return (
    <div className="flex sticky top-0 flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="flex w-full justify-between mb-2">
        <h5 className="block p-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Cart Items({cartItems.length})
        </h5>
        <Button
          onClick={showCartHandler}
          className="text-white shadow-lg active:bg-white active:text-black"
        >
          X
        </Button>
      </div>
      <List className="w-96">
        {cartItems.length === 0 ? (
          <Typography variant="h6" className="text-center m-3 p-3">
            Your cart is empty!!!.
          </Typography>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addCartItemsHandler={addCartItemsHandler}
              removeCartItemsHandler={removeCartItemsHandler}
            />
          ))
        )}
        <ListItem>
          <Typography variant="h5">Total Price: Rs.{total}</Typography>
        </ListItem>
      </List>
    </div>
  );
}

export default Cart;

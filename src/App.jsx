/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Typography } from "@material-tailwind/react";
import "./App.css";
import Product from "./Product";

import productData from "./productData";
import NavbarComp from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const addCartItemsHandler = (product) => {
    setCartItems([...cartItems, product]);
    setTotal(Math.round(total + product.price));
  };

  const removeCartItemsHandler = (product) => {
    const index = cartItems.findIndex((item) => item.name === product.name);

    if (index != -1) {
      cartItems.splice(index, 1);
    }
    setCartItems([...cartItems]);
    setTotal(Math.round(total - product.price));
  };

  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col">
        <div className="row-span-3">
          <NavbarComp
            badge={cartItems.length}
            showCartHandler={showCartHandler}
          />
          <div className="p-40 bg-gray-900">
            <Typography
              variant="h1"
              className="block font-sans text-center text-white text-5xl antialiased font-extrabold leading-tight tracking-normal"
            >
              React Shopping Cart
            </Typography>
            <Typography className="mt-3 block font-sans text-center text-white text-base antialiased font-medium leading-relaxed">
              Here is the collection of all electronic gadgets.
            </Typography>
          </div>
          <div className="flex flex-wrap justify-center gap-0">
            {productData.map((product) => (
              <Product
                key={product.id}
                product={product}
                addCartItemsHandler={addCartItemsHandler}
                removeCartItemsHandler={removeCartItemsHandler}
              />
            ))}
          </div>
          <div className="p-10 mt-12 bg-gray-900">
            <Typography className="mt-3 block font-sans text-center text-white text-base antialiased font-medium leading-relaxed">
              Copyright @ Shopping Cart 2024
            </Typography>
          </div>
        </div>
        <div className="sticky top-0">
          {showCart && (
            <Cart
              total={total}
              cartItems={cartItems}
              addCartItemsHandler={addCartItemsHandler}
              removeCartItemsHandler={removeCartItemsHandler}
              showCartHandler={showCartHandler}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

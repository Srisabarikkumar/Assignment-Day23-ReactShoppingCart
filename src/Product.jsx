/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Product({ product, addCartItemsHandler, removeCartItemsHandler }) {
  const [btnClick, setBtnClick] = useState(true);

  const btnClickHandler = () => {
    setBtnClick(!btnClick);
  };

  return (
    <Card className="m-4 mt-20 w-80 h-auto">
      <CardHeader color="blue-gray" className="h-56">
        <img
          src={product.image_url}
          className="w-full h-full"
          alt="product-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {product.name}
        </Typography>
        <Typography>{product.description}</Typography>
        <Typography className="font-bold mt-5">Rs.{product.price}</Typography>
      </CardBody>
      <CardFooter className="flex justify-center">
        {btnClick ? (
          <Button
            className="w-64"
            onClick={() => {
              btnClickHandler();
              addCartItemsHandler(product);
            }}
          >
            Add to cart <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Button>
        ) : (
          <Button
            className="w-64"
            onClick={() => {
              btnClickHandler();
              removeCartItemsHandler(product);
            }}
          >
            Remove from cart{" "}
            <FontAwesomeIcon icon={faXmark} size="lg"></FontAwesomeIcon>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default Product;

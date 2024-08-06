/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { ListItem, Typography } from "@material-tailwind/react";

function CartItem({ item }) {
  return (
    <ListItem className="flex gap-6 justify-start">
        <img src={item.image_url} width={100} height={100} />
      <div>
        <Typography variant="h6">{item.name}</Typography>
        <Typography><span className="font-semibold">Rs.</span>{" "}{item.price}</Typography>
      </div>
    </ListItem>
  );
}

export default CartItem;

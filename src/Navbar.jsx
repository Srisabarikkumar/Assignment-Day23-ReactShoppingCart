/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Typography,
  Badge,
  Button,
} from "@material-tailwind/react";

function NavbarComp({ badge, showCartHandler }) {
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          React Shopping Cart
        </Typography>
        <div className="flex items-center gap-4">
          {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
          <div className="flex items-center gap-x-1">
            <Badge content={badge}>
              <Button
                className="px-4 py-2 font-sans text-xs font-bold text-center hover:text-gray-900 uppercase align-middle transition-all rounded-lg select-none active:bg-gray-900/10 hover:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                onClick={showCartHandler}
                type="button"
              >
                <span>
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </span>{" "}
                <span>Cart</span>
              </Button>
            </Badge>
          </div>
        </div>
      </div>
    </Navbar>
    
  );
}

export default NavbarComp;

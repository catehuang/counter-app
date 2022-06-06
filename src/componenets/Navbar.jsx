import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// stateless functional component
const Navbar = ({ totalCounters }) => {
  return (
    <div class="m-10 ">
      <span class="text-xl font-bold mr-10">Counter App</span>
      <ShoppingCartIcon fontSize="large" />
      <span class="px-2 py-1 rounded-full bg-green-600 text-white">{totalCounters}</span>
    </div>
  );
};

export default Navbar;

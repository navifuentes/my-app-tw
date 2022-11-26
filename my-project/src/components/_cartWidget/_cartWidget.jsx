import React from "react";

const CartWidget = () => {
  return (
    <li className="flex">
      <button className="border rounded p-2 mr-2 hover:bg-teal-800 transition duration-500 ease-in-out">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <p className="text-white py-2">0</p>
    </li>
  );
};

export default CartWidget;

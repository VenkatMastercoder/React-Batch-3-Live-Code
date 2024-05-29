/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartContext } from "../hooks/useCart";

const CartProvider = ({ children }) => {
  const [cart, SetCart] = useState([]);

  const addCart = (item) => {
    SetCart([item, ...cart]);
  };

  const updateCart = (itemId, quantity) => {
    const updatedCartItem = cart.map((e) => {
      if (itemId === e.u_id) {
        return { ...e, quantity: quantity };
      }
    });
    SetCart(updatedCartItem);
  };

  const removeCart = (productId) => {
    const updatedCartItem = cart.filter((e) => {
      return e.id !== productId;
    });

    SetCart(updatedCartItem);
  };

  const clearCart = () => {
    SetCart([]);
  };

  return (
    <>
      <CartContext.Provider
        value={{ addCart, updateCart, removeCart, clearCart, cart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;

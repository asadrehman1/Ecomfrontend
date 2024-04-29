import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeCartItem, decreaseCartItem } = useCart();

  const handleIncreaseQuantity = (itemId) => {
    addToCart(
      cartItems.find((item) => item.id === itemId),
      1
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseCartItem(itemId);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-4 relative">
      <h2 className="md:text-3xl text-[20px] font-bold mb-4 text-center">
        Cart
      </h2>
      {cartItems.length === 0 ? (
        <h2 className="text-center md:text-3xl font-bold italic underline">
          No Cart Items
        </h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-200 py-4"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="px-3 py-2 bg-blue-500 text-white rounded-md mr-2"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <button
                  className="px-3 py-2 bg-green-500 text-white rounded-md mr-2"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="px-3 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => removeCartItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="bg-white p-4 rounded-md shadow-md ">
            <p className="font-semibold">Total Price: ${totalPrice}</p>
            <Link to="/payment">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md mt-2">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

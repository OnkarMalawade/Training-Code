import React, { useContext } from "react";
import { UserContext } from "../App";

const Cart = () => {
  const { state, dispatch } = useContext(UserContext);

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleBuy = () => {
    alert("Thank you for your purchase!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {state.cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px", height: "50px" }}
                />
                <span>{item.title}</span>
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#dc3545",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={clearCart}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#6c757d",
                color: "white",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Clear Cart
            </button>
            <button
              onClick={handleBuy}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#28a745",
                color: "white",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

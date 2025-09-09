import React from "react";
import CartItem from "./CartItem";

function CartTable({ cart, onRemove }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "16px",
      }}
    >
      <tbody>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;

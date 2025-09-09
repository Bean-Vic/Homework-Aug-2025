import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <tr>
      <td>
        {item.name} x {item.quantity}
      </td>
      <td align="right">${(item.price * item.quantity).toFixed(2)}</td>
      <td align="center">
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </td>
    </tr>
  );
}

export default CartItem;

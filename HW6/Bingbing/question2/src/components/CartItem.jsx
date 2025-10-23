import React from "react";

export default function CartItem({item,onRemove}){
return (
  <tr>
          <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>{item.quantity}</td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td><button onClick={() => onRemove(item.id)}>Remove</button></td>
  </tr>
)
}


// export default function CartItem({ item, onRemove }) {
//   return (
//     <tr>
      // <td>{item.name}</td>
      // <td>${item.price.toFixed(2)}</td>
      // <td>{item.quantity}</td>
      // <td>${(item.price * item.quantity).toFixed(2)}</td>
      // <td>
//         <button onClick={() => onRemove(item.id)}>Remove</button>
//       </td>
//     </tr>
//   );
// }
// import React from "react";

// function CartItem({ item, onRemove }) {
//   return (
//     <tr>
//       <td>
//         {item.name} x {item.quantity}
//       </td>
//       <td align="right">${(item.price * item.quantity).toFixed(2)}</td>
//       <td align="center">
//         <button onClick={() => onRemove(item.id)}>Remove</button>
//       </td>
//     </tr>
//   );
// }

// export default CartItem;

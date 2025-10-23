import React from "react";
import CartItem from "./CartItem";

export default function CartTable({cart, onRemove}){
  if (cart.length===0){
    return <p>Cart is empty.</p>
  }else{
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
// export default function CartTable({ cart, onRemove }) {
//   if (cart.length === 0) {
//     return <p>Cart is empty.</p>;
//   }

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Item</th>
//           <th>Price</th>
//           <th>Qty</th>
//           <th>Subtotal</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cart.map((item) => (
//           <CartItem key={item.id} item={item} onRemove={onRemove} />
//         ))}
//       </tbody>
//     </table>
//   );
// }
// import React from "react";
// import CartItem from "./CartItem";

// function CartTable({ cart, onRemove }) {
//   return (
//     <table
//       style={{
//         width: "100%",
//         borderCollapse: "collapse",
//         marginBottom: "16px",
//       }}
//     >
//       <tbody>
//         {cart.map((item) => (
//           <CartItem key={item.id} item={item} onRemove={onRemove} />
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default CartTable;

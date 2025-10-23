import React, { useState, useMemo } from "react";
import { products } from "../data/products"; // 假设你有产品数据
import ProductSelector from "./ProductSelector";
import CartTable from "./CartTable";

export default function MiniShoppingCart(){

  const [cart, setCart] = useState([]);

  const handleAdd=(product, quantity)=>{
    const qty=Math.max(1, Number(quantity) || 1)
    setCart((prev)=>{
      const existing = prev.find((item)=> item.id===product.id)
      if (existing){
        return prev.map((item)=> item.id===product.id ? {...item, quantity:item.quantity+qty}:item)
      }else{
        return [...prev, {...product, quantity:qty}]
      }
    })
  }
  const handleRemove=(id)=>{
    setCart((prev)=>{ return prev.filter((item)=>item.id!==id)})
  }
  const total = useMemo(
    ()=>cart.reduce((sum,item)=> sum+ item.price *item.quantity,0),[cart]
  )
  return (
    <div>
      <h2>Mini Shopping Cart</h2>
      <ProductSelector products={products} onAdd={handleAdd} />

      <CartTable cart={cart} onRemove={handleRemove} />

      <div>
        <strong>Total:</strong> ${total.toFixed(2)}
      </div>
    </div>
  )
}


// export default function MiniShoppingCart() {
//   // 购物车结构: [{id, name, price, quantity}]
//   const [cart, setCart] = useState([]);

//   // 添加商品
//   const handleAdd = (product, quantity) => {
//     const qty = Math.max(1, Number(quantity) || 1);
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         // 如果商品已存在，更新数量
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + qty }
//             : item
//         );
//       } else {
//         // 新商品
//         return [...prev, { ...product, quantity: qty }];
//       }
//     });
//   };

//   // 删除商品
//   const handleRemove = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // 计算总价（派生状态）
//   const total = useMemo(
//     () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
//     [cart]
//   );

//   return (
//     <div>
//       <h2>Mini Shopping Cart</h2>
//       <ProductSelector products={products} onAdd={handleAdd} />

//       <CartTable cart={cart} onRemove={handleRemove} />

//       <div>
//         <strong>Total:</strong> ${total.toFixed(2)}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useMemo } from "react";
// import { products } from "../data/products";
// import ProductSelector from "./ProductSelector";
// import CartTable from "./CartTable";

// function MiniShoppingCart() {
//   // 用 Map 存购物车：key = product.id，value = {id, name, price, quantity}
//   const [cartMap, setCartMap] = useState(new Map());

//   // 添加商品
//   const handleAdd = (product, quantity) => {
//     const qty = Math.max(1, Number(quantity) || 1);
//     setCartMap((prev) => {
//       const newMap = new Map(prev);
//       const existing = newMap.get(product.id);
//       if (existing) {
//         newMap.set(product.id, { ...existing, quantity: existing.quantity + qty });
//       } else {
//         newMap.set(product.id, { ...product, quantity: qty });
//       }
//       return newMap;
//     });
//   };

//   // Remove：一次性删除整条商品
//   const handleRemove = (id) => {
//     setCartMap((prev) => {
//       const newMap = new Map(prev);
//       newMap.delete(id);
//       return newMap;
//     });
//   };

//   // 转数组渲染
//   const cartArray = useMemo(() => Array.from(cartMap.values()), [cartMap]);

//   // total 根据购物车派生，不再手动维护
//   const total = useMemo(
//     () => cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0),
//     [cartArray]
//   );

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "20px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         backgroundColor: "#fff",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "20px",
//           fontWeight: "bold",
//           marginBottom: "16px",
//         }}
//       >
//         Mini Shopping Cart
//       </h2>

//       <ProductSelector products={products} onAdd={handleAdd} />

//       <div
//         style={{
//           borderTop: "1px solid #ddd",
//           borderBottom: "1px solid #ddd",
//           marginTop: "16px",
//           padding: "8px 0",
//         }}
//       >
//         <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Cart</h3>
//         <CartTable cart={cartArray} onRemove={handleRemove} />
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "16px",
//           fontWeight: "bold",
//           fontSize: "16px",
//         }}
//       >
//         <span>Total:</span>
//         <span>${total.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// }

// export default MiniShoppingCart;

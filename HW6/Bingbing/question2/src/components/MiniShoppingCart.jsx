import React, { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductSelector from "./ProductSelector";
import CartTable from "./CartTable";

function MiniShoppingCart() {
  // 用 Map 存购物车：key = product.id，value = {id, name, price, quantity}
  const [cartMap, setCartMap] = useState(new Map());

  // 添加商品
  const handleAdd = (product, quantity) => {
    const qty = Math.max(1, Number(quantity) || 1);
    setCartMap((prev) => {
      const newMap = new Map(prev);
      const existing = newMap.get(product.id);
      if (existing) {
        newMap.set(product.id, { ...existing, quantity: existing.quantity + qty });
      } else {
        newMap.set(product.id, { ...product, quantity: qty });
      }
      return newMap;
    });
  };

  // Remove：一次性删除整条商品
  const handleRemove = (id) => {
    setCartMap((prev) => {
      const newMap = new Map(prev);
      newMap.delete(id);
      return newMap;
    });
  };

  // 转数组渲染
  const cartArray = useMemo(() => Array.from(cartMap.values()), [cartMap]);

  // total 根据购物车派生，不再手动维护
  const total = useMemo(
    () => cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartArray]
  );

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        Mini Shopping Cart
      </h2>

      <ProductSelector products={products} onAdd={handleAdd} />

      <div
        style={{
          borderTop: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
          marginTop: "16px",
          padding: "8px 0",
        }}
      >
        <h3 style={{ fontWeight: 600, marginBottom: "8px" }}>Cart</h3>
        <CartTable cart={cartArray} onRemove={handleRemove} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default MiniShoppingCart;

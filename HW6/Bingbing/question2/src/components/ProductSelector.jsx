import React, { useState } from "react";

function ProductSelector({ products, onAdd }) {
  const [selectedId, setSelectedId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const product = products.find((p) => p.id === selectedId);
    if (!product) return;
    onAdd(product, quantity);
    setQuantity(1);
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <select
        style={{
          width: "150px",
        }}
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ProductSelector;

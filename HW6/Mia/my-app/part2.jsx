import { useState } from "react";

export default function ShopCartApp() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 },
    { id: 3, name: "Headphones", price: 199 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = products.find((p) => p.id === Number(selectedProduct));
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId);
      if (existing.qty > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Simple Shop Cart</h1>

      {/* Product Selection */}
      <div className="mb-4">
        <select
          className="border rounded p-2 w-full"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} (${p.price})
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>

      {/* Cart Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-1">
                <span>
                  {item.name} x {item.qty}
                </span>
                <span>${item.price * item.qty}</span>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  {" "}
                  Remove{" "}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

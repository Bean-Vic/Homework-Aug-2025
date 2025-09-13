import { useState } from "react";
export default function ShopCartApp() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 },
    { id: 3, name: "Headphones", price: 1.99 },
  ];
  const [characterId, setCharacterId] = useState("1");
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = products.find((p) => p.id === Number(selectedProduct));
    const qty = Math.max(1, Number(characterId) || 1); // 确保至少为1
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        return [...prevCart, { ...product, qty }];
      }
    });
    setCharacterId(1);
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
  const handleInput = (e) => {
    setCharacterId(e.target.value);
  };
  return (
    <>
      <div>
        🛒 <span> {cart.reduce((sum, item) => sum + item.qty, 0)}</span>{" "}
        {/*array.reduce((累积值, 当前元素) => { ... }, 初始值)
       Product Selection */}
        <div>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} (${p.price})
              </option>
            ))}
          </select>
          <input type="number" value={characterId} onChange={handleInput} />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {/* Cart Section */}
        <div>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.name} x {item.qty}
                  </span>
                  <br />
                  <span>
                    ${item.price * item.qty} {}
                  </span>
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
      <span className="mb-4">
        Total : ${cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
      </span>
    </>
  );
}

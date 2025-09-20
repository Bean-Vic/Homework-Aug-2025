"use client"

import React, { useState } from 'react';

const ShoppingCart = () => {
    const productList = [
        { key: 'apple', name: 'Apple', price: 1.50 },
        { key: 'banana', name: 'Banana', price: 0.80 },
        { key: 'orange', name: 'Orange', price: 1.20 },
        { key: 'grape', name: 'Grape', price: 2.50 },
        { key: 'mango', name: 'Mango', price: 3.00 }
    ];

    const [selectedProduct, setSelectedProduct] = useState('apple');
    const [quantity, setQuantity] = useState(1);
    const [shoppingCart, setShoppingCart] = useState({});

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setQuantity(value);
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            setShoppingCart(prevCart => {
                const newCart = { ...prevCart };
                if (newCart[selectedProduct]) {
                    newCart[selectedProduct] += quantity;
                } else {
                    newCart[selectedProduct] = quantity;
                }
                return newCart;
            });
            setQuantity(1);
        }
    };

    const handleRemoveFromCart = (productKey) => {
        setShoppingCart(prevCart => {
            const newCart = { ...prevCart };
            delete newCart[productKey];
            return newCart;
        });
    };

    const calculateTotalPrice = () => {
        let total = 0;
        Object.entries(shoppingCart).forEach(([productKey, quantity]) => {
            const product = productList.find(p => p.key === productKey);
            if (product) {
                total += product.price * quantity;
            }
        });
        return total.toFixed(2);
    };

    const getProductName = (productKey) => {
        const product = productList.find(p => p.key === productKey);
        return product ? product.name : productKey;
    };

    const getProductPrice = (productKey) => {
        const product = productList.find(p => p.key === productKey);
        return product ? product.price : 0;
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                🛒 Shopping Cart
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    📦 Add Products
                </h3>

                <div className="grid md:grid-cols-3 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Select Product:
                        </label>
                        <select
                            value={selectedProduct}
                            onChange={handleProductChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            {productList.map(product => (
                                <option key={product.key} value={product.key}>
                                    {product.name} - ${product.price.toFixed(2)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <button
                            onClick={handleAddToCart}
                            disabled={quantity <= 0}
                            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    🛍️ Shopping Cart Contents
                </h3>

                {Object.keys(shoppingCart).length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                        Your cart is empty. Add some products above!
                    </p>
                ) : (
                    <>
                        <div className="space-y-3 mb-6">
                            {Object.entries(shoppingCart).map(([productKey, quantity]) => (
                                <div key={productKey} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex-1">
                                        <span className="font-medium text-gray-800">
                                            {getProductName(productKey)}
                                        </span>
                                        <span className="text-gray-600 ml-2">
                                            × {quantity}
                                        </span>
                                        <span className="text-green-600 ml-2 font-semibold">
                                            ${(getProductPrice(productKey) * quantity).toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveFromCart(productKey)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-300 pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold text-gray-800">
                                    Total Price:
                                </span>
                                <span className="text-2xl font-bold text-green-600">
                                    ${calculateTotalPrice()}
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;

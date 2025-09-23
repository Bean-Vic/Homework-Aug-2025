"use client"

import React, { useState, useEffect } from "react";

export const DogImg = () => {
    const [imgSrc, setImgSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDogImage = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();

            if (data.status === "success") {
                setImgSrc(data.message);
            }
        } catch (error) {
            console.error("Error fetching dog image:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Load initial image when component mounts
    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
    <>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mb-8">
            {/* Title */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Random Dog Images</h2>
            </div>

            {/* Image Container */}
            <div className="mb-6 flex justify-center">
                {isLoading ? (
                    <div className="flex items-center justify-center w-80 h-80 bg-gray-100 rounded-lg">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading...</p>
                        </div>
                    </div>
                ) : (
                    <img
                        src={imgSrc}
                        alt="Random dog"
                        className="w-80 h-80 object-cover rounded-lg shadow-md"
                    />
                )}
            </div>

            {/* Button */}
            <div className="text-center">
                <button
                    onClick={fetchDogImage}
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                >
                    {isLoading ? "Loading..." : "Get Another Dog"}
                </button>
            </div>
        </div>
    </>
    );
};
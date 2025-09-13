import React, { useState, useEffect } from "react";
import { dogApiFactory } from "./dogApi";
import Todo from "./Todo";

const dogApi = dogApiFactory(); // 创建 API 实例
console.log(dogApi);
export default function App() {
  const [dog, setDog] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDog() {
    setIsLoading(true);
    try {
      const data = await dogApi.getRandomDog();
      setDog(data.message);
      console.log("data", data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      <Todo />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>🐶 Random Dog</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img
            src={dog}
            alt="A random dog"
            style={{ maxWidth: "400px", borderRadius: "12px" }}
          />
        )}

        <div style={{ marginTop: "20px" }}>
          <button onClick={fetchDog}>Get Another Dog</button>
        </div>
      </div>
    </>
  );
}

import { React, useState, useEffect } from "react";

export function App(props) {
  const [dog, setDog] = useState("");
  const [IsLoading, setIsLoading] = useState(true);

  const url = "https://dog.ceo/api/breeds/image/random";
  async function fetchDog() {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
      const data = await res.json();
      setDog(data.message); // dog.ceo API 返回 { message: "图片url" }
      console.log(data);
    } catch (e) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  // 第一次渲染时调用一次
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      <h2>🐶 Random Dog</h2>
      {IsLoading ? (
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
    </>
  );
}

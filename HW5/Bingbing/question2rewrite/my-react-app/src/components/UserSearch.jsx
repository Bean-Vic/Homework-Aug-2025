import { useState } from "react";

export default function UserSearch() {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!userId.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);

    const urls = [
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    ];

    try {
      const [userRes, postsRes, todosRes] = await Promise.all(
        urls.map((url) => fetch(url))
      );

      if (!userRes.ok)
        throw new Error(`Failed to fetch user (status: ${userRes.status}).`);

      const [user, posts, todos] = await Promise.all([
        userRes.json(),
        postsRes.json(),
        todosRes.json(),
      ]);

      if (!user || Object.keys(user).length === 0)
        throw new Error("User was not found. Please try another user ID.");

      setData({ user, posts, todos });
    } catch (err) {
      setError(err.message);
      setUserId("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Part 2: User Search</h2>

      <input
        type="number"
        placeholder="Enter user ID (1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <h3>User Info</h3>
          <ul>
            {Object.entries(data.user).map(([key, value]) => (
              <li key={key}>
                {key}: {JSON.stringify(value)}
              </li>
            ))}
          </ul>

          <h3>Posts ({data.posts.length})</h3>
          <ul>
            {data.posts.slice(0, 3).map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>

          <h3>Todos ({data.todos.length})</h3>
          <ul>
            {data.todos.slice(0, 3).map((t) => (
              <li key={t.id}>
                {t.title} – {t.completed ? "✅" : "❌"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// import { useState } from "react";

// export default function UserSearch() {
//   const [userId, setUserId] = useState("");
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function handleSearch() {
//     if (!userId.trim()) return;
//     setData(null);
//     setLoading(true);
//     setError(null);
//     const urls = [
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
//       `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
//     ];
//     try {
//       const [userRes, postsRes, todosRes] = await Promise.all(
//         urls.map((url) => fetch(url))
//       );
//       if (!userRes.ok) {
//         throw new Error("User was not found. Please try another user ID.");
//       }
//       const [user, posts, todos] = await Promise.all(
//         [userRes, postsRes, todosRes].map((res) => res.json())
//       );
//       if (!user || Object.keys(user).length === 0) {
//         throw new Error("User was not found. Please try another user ID.");
//       }
//       setData({ user, posts, todos });
//     } catch (err) {
//     //   setError(err.message);
//         setError(err.message);
//   setUserId("");
//     } finally {
//       setLoading(false);
//     }
//   }
//   return (
//     <div>
//       <p>Part 2: User Search</p>
//       <input
//         type="number"
//         placeholder="Enter user ID (1-10)"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       ></input>
//       <button onClick={() => handleSearch()} disabled={loading}>
//         {loading ? "Searching..." : "Search"}
//       </button>
//       {error && <p>{error}</p>}
//       {data && (
//         <div>
//           <h3>User Info</h3>
//           <ul>
//             {Object.entries(data.user).map(([key, value]) => (
//               <li key={key}>{key}: {JSON.stringify(value)}</li>
//             ))}
//           </ul>

//           <h3>Posts ({data.posts.length})</h3>
//           <ul>
//             {data.posts.slice(0, 3).map((p) => (
//               <li key={p.id}>{p.title}</li>
//             ))}
//           </ul>

//           <h3>Todos ({data.todos.length})</h3>
//           <ul>
//             {data.todos.slice(0, 3).map((t) => (
//               <li key={t.id}>
//                 {t.title} – {t.completed ? "✅" : "❌"}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


import UsersTable from "./components/UsersTable";
import UserSearch from "./components/UserSearch";

export default function App() {
  return (
    <div>
      <h1>JSONPlaceholder Demo</h1>
      <UsersTable />
      <hr />
      <UserSearch />
    </div>
  );
}
// import { useState } from "react";

// export default function App() {
//   const [users, setUsers] = useState([]);     // 保存用户数据
//   const [error, setError] = useState(null);   // 错误提示
//   const [loading, setLoading] = useState(false); // 加载状态

//   async function loadUsers() {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!res.ok) throw new Error(`Failed to fetch (${res.status})`);
//       const data = await res.json();
//       setUsers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
//       <h1>JSONPlaceholder Demo</h1>
//       <h2>Part 1: Users Table</h2>

//       <button onClick={loadUsers} disabled={loading}>
//         {loading ? "Loading..." : "Load Users"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <table
//         style={{
//           borderCollapse: "collapse",
//           marginTop: "1rem",
//           width: "100%",
//           border: "1px solid #ccc",
//         }}
//       >
//         <thead>
//           <tr>
//             {["ID", "Name", "Username", "Email", "City", "Company"].map((h) => (
//               <th
//                 key={h}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "4px 8px",
//                   background: "#f8f8f8",
//                 }}
//               >
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {users.length === 0 && !loading && (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center", padding: "1rem" }}>
//                 No data yet. Click "Load Users" to fetch.
//               </td>
//             </tr>
//           )}

//           {users.map((u) => (
//             <tr key={u.id}>
//               <td>{u.id}</td>
//               <td>{u.name}</td>
//               <td>{u.username}</td>
//               <td>{u.email}</td>
//               <td>{u.address?.city}</td>
//               <td>{u.company?.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [users, setUsers] =useState([])
//   const [error,setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   async function loadUsers(){
//     setLoading(true)
//     setError(null)

//     try{
//       const res=await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!res.ok)throw new Error('fail to fetch (${res.status})');
//       const data=await res.json()
//       setUsers(data)
//     }catch(err){
//       setError(err.message)
//     }finally{
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <h1>JSONPlaceholder Demo</h1>
//       <h2>Users Table</h2>
//       <button onClick={loadUsers} disabled={loading}>
//         {loading?'Loading...':'Load Users'}
//         </button>
//       {
//         error && <p>{error}</p>
//       }
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>City</th>
//             <th>Company</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length ===0 && !loading && (
//                         <tr>
//               <td colSpan="6">No data yet. Click "Load Users" to fetch.</td>
//             </tr>
//           )}
//           {
//             users.map((u)=>(
//               <tr key = {u.id}>
//                                <td>{u.id}</td>
//               <td>{u.name}</td>
//               <td>{u.username}</td>
//               <td>{u.email}</td>
//               <td>{u.address?.city}</td>
//               <td>{u.company?.name}</td>
//             </tr>
//             ))
//           }
//         </tbody>
//       </table>
//       </div>
//   )
  
// }

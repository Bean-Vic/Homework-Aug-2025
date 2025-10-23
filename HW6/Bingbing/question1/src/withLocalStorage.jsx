
// import { useState, useEffect } from "react";

// export default function withLocalStorage(WrappedComponent, key, defaultValue = 0) {
//   return function WithLocalStorageWrapper(props) {
//     const [value, setValue] = useState(() => {
//       const cached = localStorage.getItem(key);
//       return cached !== null ? Number(cached) : defaultValue;
//     });

//     // 每当 value 改变时写入 localStorage
//     useEffect(() => {
//       localStorage.setItem(key, value);
//     }, [key, value]);

//     return (
//       <WrappedComponent
//         {...props}
//         value={value}
//         onChange={setValue}
//       />
//     );
//   };
// }

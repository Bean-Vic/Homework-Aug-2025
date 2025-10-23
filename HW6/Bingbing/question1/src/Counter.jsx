

// export default function Counter({ value, onChange }) {
//   const handleIncrease = () => onChange(value + 1);
//   const handleDecrease = () => onChange(value - 1);

//   return (
//     <div>
//       <h2>Count: {value}</h2>
//       <button onClick={handleDecrease}>-</button>
//       <button onClick={handleIncrease}>+</button>
//     </div>
//   );
// }
import { useState } from "react";

// export default function Counter({ initialValue = 0 }) {
//   // 组件内部管理自己的状态
//   const [count, setCount] = useState(initialValue);

//   // 处理加减操作
//   const handleIncrease = () => setCount(count + 1);
//   const handleDecrease = () => setCount(count - 1);

//   // 在页面上渲染当前状态
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={handleDecrease}>-</button>
//       <button onClick={handleIncrease}>+</button>
//     </div>
//   );
// }

export default function Counter({initialValue = 0}) {
  const [count, setCount]=useState(initialValue);

  const handleIncrease = ()=>setCount(count+1)
  const handleDecrease = ()=>setCount(count-1)

  return (

    <div>
    <p>Simple Counter</p>
    <h2>Count: {count}</h2>
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    </div>
  )
}
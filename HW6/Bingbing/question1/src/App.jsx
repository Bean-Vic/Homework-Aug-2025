
// import Counter from "./Counter";
// import withLocalStorage from "./withLocalStorage";

// const PersistentCounter = withLocalStorage(Counter, "myCounter");

// export default function App() {
//   return (
//     <div>
//       <h1>Persistent Counter</h1>
//       <PersistentCounter />
//     </div>
//   );
// }
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Simple Counter</h1>
      <Counter initialValue={10} />
    </div>
  );
}

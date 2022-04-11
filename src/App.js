import "./styles.css";
import { useState } from "react";
// import { Category } from "./components/Category"

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    setCounter(counter + value);
  };
  const multChange = (value) => {
    setCounter(counter * value);
  };
  ////
  return (
    <div className="App">
      <h1 className={counter % 2 === 0 ? "counterEven" : "counterOdd"}>
        Counter:{counter}
      </h1>
      <button onClick={() => handleChange(1)}> Add 1</button>
      <button onClick={() => handleChange(-1)}> Sub 1</button>
      <button onClick={() => multChange(2)}> Double</button>
    </div>
  );
}

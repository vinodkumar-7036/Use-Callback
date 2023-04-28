import "./App.css";
import { useState, useCallback, useMemo } from "react";

function App() {
  const [number, setNumber] = useState([1]);
  const calculate = useCallback((number) => {
    return number * 10;
  }, []);

  const memoizedNumber = useMemo(() => {
    return calculate(number);
  }, [number, calculate]);
  const handleClick = useCallback(() => {
    setNumber((prevState) => memoizedNumber);
  }, [memoizedNumber]);
  return (
    <div className="App">
      <div>number:{number}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;

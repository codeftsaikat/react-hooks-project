import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
      console.log("add value", { counter });
    } else {
      alert("Upper twenty not allowed");
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      alert("Negative value not allowed");
    } else {
      setCounter(counter - 1);
      console.log("remove value", { counter });
    }
  };

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>Counter value: {counter} </h2>
        <button onClick={addValue}>Add Value {counter} </button>
        <hr />
        <button onClick={removeValue}>Remove Value {counter}</button>

        <p>my value is {counter}.</p>
      </div>
    </>
  );
}

export default App;

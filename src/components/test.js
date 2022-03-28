import { useState } from "react";
import React from "react";

function Main() {
  const [count, setCount] = useState(0);

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleAddFive = () => {
    setCount(count + 5);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  const handleRemoveOne = () => {
    setCount(count - 1);
  };

  const handleRemoveFive = () => {
    setCount(count - 5);
  };
  return (
    <main>
      <div className="circle">{count}</div>
      <div className="buttons">
        <button type="button" onClick={handleAddFive}>
          Add five
        </button>
        <button type="button" onClick={handleAddOne}>
          Add one
        </button>
        <button type="reset" onClick={handleResetCounter}>
          Reset
        </button>
        <button type="button" onClick={handleRemoveOne}>
          Remove one
        </button>
        <button type="button" onClick={handleRemoveFive}>
          Remove five
        </button>
      </div>
    </main>
  );
}

export default Main;

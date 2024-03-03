import React, { useState } from 'react';

export default function Component2() {
  // propiedades
  const [count, setCount] = useState(0);

  const onClicked = (event) => {
    setCount(count + 1);
  };

  function Mybutton() {
    return (
      <button onClick={onClicked}>
        Haz click
      </button>
    );
  }

  return (
    <div>
      <Mybutton />
      <p>N# Clicks: {count}</p>
    </div>
  );
}

import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('Sleeping...');

  const handleClick = () => {
    setText('Hello, world!');
  };

  return (
    <div>
      <div id="output">{text}</div>
      <button id="btn" onClick={handleClick}>Click me!</button>
    </div>
  );
}
import React from "react";
import { Counter } from './features/counter/Counter';
function sayHello(){
  return function(){
    return "Hello world"
  }
}

function App() {
  let fn = sayHello();
  let message = fn();
  return <div>
    <Counter />
  </div>
}

export default App;

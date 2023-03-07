import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react"

const Counter = (props) => {
  console.log("counter render")
    return <h1>{props.number  }</h1>
}
function App() {  

  const [contador , setContador] = useState(0)


  const handleClick = () => {
    setContador (contador +1)

  }

  const handleClickReset = () =>{
    setContador(0)
  }

  const isEven = contador %2 === 0

  const mensajePar = isEven ? "Es par" : "Es impar"
  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contador} Counter/>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>

    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />


);



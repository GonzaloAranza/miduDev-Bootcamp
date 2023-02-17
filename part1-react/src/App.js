import './App.css';
import Descripcion from './Descripcion';

function App() {
  const mensaje = 'Hola mundo desde variable';
  const a = 1;
  const b = 2;
  const fecha = new Date().toString()

// ademas de variables podriamos crear componentes para renderizarlos
const Componente = () =>{
  return <h1>Hola Mundo desde componente</h1>
}


  return (
    <div className="App">
      <Componente/>
      <Descripcion color='red' message='Este es el bootcamps fullstack de midudev'/>
      <Descripcion color='green' message='Le estoy pasando al componente un params/props'/>

      <h1>{mensaje}</h1>

      <br/>

      <div>
         <p>el resultado de la cuenta es:{a+b}</p>
      </div>

      {/* {new Date()}//los objetos no son válidos como hijos de react */}
      {/* {+new Date()} Esto es un timestamp y se puede renderizar */}
      <br/>
      {fecha + '.Esto es un string traido desde la variable'} {/*aca se renderiza la fecha en string*/}  
  
    </div>
  );
}

export default App;

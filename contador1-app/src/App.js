import React, {useState, useEffect} from "react";

function App() {

  const [count, setCount] = useState(0);

  // Guarda el valor de contador en el localstorage
  useEffect(()=>{
    localStorage.setItem('count', count);
  }, [count]);

  //Recueperar el valor desde el localstorage al cargar el componente
  useEffect(
    ()=>{
      const savedCount = parseInt(localStorage.getItem('count'));
      if(!isNaN(savedCount)){
        setCount(savedCount);
      }
    }, []
  );

  useEffect(
    ()=>{
      const interval = setInterval(()=>{
        setCount(prevCount => prevCount +1 );
      }, 1000);
      //Limpia el intervalo cuando el compnente se desmonta
      return () => clearInterval(interval);
    }, []
  );

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor del contador : {count}</p>
      <button onClick={()=>setCount(count+1)}>Incremento</button>
      <button onClick={()=>setCount(count-1)}>Decremento</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;

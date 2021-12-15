import { useState } from 'react'
import './App.css';

function App() {

  let horaInicial = new Date().toLocaleTimeString();

  const [hora, setHora] = useState(horaInicial)

  function atualizaHora() {
    horaInicial = new Date().toLocaleTimeString();
    setHora(horaInicial)
  }

  setInterval(atualizaHora, 1000);

  return (
    <>
      <h1>Olha a hora:</h1>
      <h2>{hora}</h2>
    </>
  )

}

export default App;

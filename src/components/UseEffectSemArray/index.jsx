import { useEffect, useState } from 'react';

function UseEffectSemArray() {
  const [ligado, setLigado] = useState(false);

  useEffect(() => {
    console.log("Efx executou");
  });
  

  return (
    <div className="App">
      <p>Está {ligado ? "ligado" : "desligado"} </p>
      <button onClick={() => setLigado((v) => !v)}>{ligado ? "desligar" : "ligar"}</button>
    </div>
  );
}

export default UseEffectSemArray
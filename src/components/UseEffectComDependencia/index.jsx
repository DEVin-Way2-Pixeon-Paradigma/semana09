import { useEffect, useState } from 'react';

const UseEffectComDependencia = () => {
  const [ligado, setLigado] = useState(false);

  useEffect(() => {
    console.log("Efx executou");

    return () => {
      console.log("Desmontou componente");
    }
  },[ligado]);

  return (
    <div className="App">
      <p>Está {ligado ? "ligado" : "desligado"}</p>
      <button onClick={() => setLigado((v) => !v)}>{ligado ? "desligar" : "ligar"}</button>
    </div>
  );

}

export default UseEffectComDependencia
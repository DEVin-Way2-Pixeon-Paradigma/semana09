import { useEffect, useState } from 'react';
import { fetchData } from '../../utils';

function UseEffectComArray() {
  const [ligado, setLigado] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log("Efx executou");
    fetchData().then(({data}) => {
      setNome(data.nome)
    }).finally(() => setLoading(false))
  }, []);
  

  return (
    <div className="App">
      {loading && (<p>Carregando...</p>)}
      {!loading && (<p>Está {ligado ? "ligado" : "desligado"} - {nome}</p>)}
      <button onClick={() => setLigado((v) => !v)}>{ligado ? "desligar" : "ligar"}</button>
    </div>
  );
}

export default UseEffectComArray
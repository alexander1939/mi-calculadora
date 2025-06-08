import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    const a = parseFloat(num1) || 0;
    const b = parseFloat(num2) || 0;
    setResultado(a + b);
  };

  const restar = () => {
    const a = parseFloat(num1) || 0;
    const b = parseFloat(num2) || 0;
    setResultado(a - b);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Calculadora</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <br />
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <h2>Resultado: {resultado !== null ? resultado : '---'}</h2>
    </div>
  );
}

export default App;

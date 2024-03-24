import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../auth/AuthContex";


const MiPrimerComponente = () => {
  const [result, setResult] = useState(0);
  const [operation, setoperation] = useState(false);
  const [resultMulti, setResultMulti] = useState(0);
  const user = useContext(AuthContext);

  const fnSumar = () => {
    setResult(result + 1);
  };
  const fnRestar = () => {
    setResult(result - 1);
  };
  const fnMultiplicar = () => {
    setTimeout(() => {
      setoperation(true);
    }, 3000);
  };

  useEffect(() => {
    if (operation) {
      console.log("Entra al useeffect");
      setResultMulti(result * 2);
    }
  }, [operation, result]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-lime-800">
        Hello {user.user}!
      </h1>
      <div>
        <h2>Resultado: </h2> {result}
        <h2>Resultado Multiplicación: </h2> {resultMulti}
      </div>
      <button onClick={() => fnSumar()}>SUMAR</button>
      <br />
      <button onClick={() => fnRestar()}>RESTAR</button>
      <br />
      <button onClick={() => fnMultiplicar()}>MULTIPLICAR</button>
    </div>
  );
};

export default MiPrimerComponente;

import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangueDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    //Base
    let resultado = 2000;

    //Obtener difrencia de anos
    const diferencia = obtenerDiferenciaYear(datos.year);

    //Restar el 3% de cada ano
    resultado -= (diferencia * 3 * resultado) / 100;

    //Europeo +30%
    //Americano +15%
    //Asiatico +5%
    resultado *= calcularMarca(datos.marca);

    //Plan basico +20%
    //Plan completo +50%
    resultado *= calcularPlan(datos.plan);

    //Formatear resultado
    resultado = formatearDinero(resultado);

    setCargando(true)

    setTimeout(() => {
        setResultado(resultado)
        setCargando(false)
    }, 3000);
    
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangueDatos,
        setError,
        error,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;

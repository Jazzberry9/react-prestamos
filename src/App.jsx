import { useState } from "react"
import { ButtonClass } from "./components/ButtonClass";
import { Header } from "./components/Header";
import { calcularTotal, moneyFormatter } from "./helpers";

function App() {
  // definir el hook ( useState)
  // no puede ir en el return ni dentor de un condicional
  const [ cantidad, setCantidad] = useState(10000);
  const [ select, setSelect] = useState(6);

  const calculao = (calcularTotal(cantidad,select));
  const total = moneyFormatter(calculao / select)
  
  // si no se modifica, se crean variables instead of hooks
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // handle + el evento a modificar, convenciones
  function handleChange(ev) { 
    setCantidad(Number(ev.target.value));
  }

  function handleDecremento(){
    const valor = cantidad - STEP;
    if(valor < MIN){
      return;
    }
    setCantidad(valor);
  }
  function handleIncremento(){
    const valor = cantidad + STEP;
    if(valor > MAX){
      return;
    }
    setCantidad(valor);
  }

  // de aqui para abajo, html y arriba el codigo de Javascript
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-1">
        <ButtonClass 
          operador="-"
          fn={handleDecremento}
        />
        <ButtonClass 
          operador="+"
          fn={handleIncremento}
        />

        
      </div>

      <input 
        type="range"
        className="w-full h-6 bg-teal-200 accent-indigo-500 hover:accent-indigo-700 mt-10"
        // lo de abajo es un evento
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        
      />
      {/* formateador de la cantidad */}
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-500">
        {moneyFormatter(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-center text-gray-500">
        Elige un <span className="text-indigo-500">plazo</span> a pagar
      </h2>

      {/* Creando el select de las opciones de pago */}
      <select 
        className="mt-5 w-full p-2 bg-white border border-gray-300 text-center font-bold rounded-lg text-xl text-gray-500"
        value={select}
        onChange={ ev => setSelect(Number(ev.target.value))}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-center text-gray-500">
          Resumen <span className="text-indigo-500">de pagos</span> 
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{select} meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{moneyFormatter(calculao)} Total a pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{total} Mensuales</p>
      </div>
    </div>
  )
}

export default App

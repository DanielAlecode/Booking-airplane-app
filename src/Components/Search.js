import React, { useEffect, useState } from 'react';
import './Search.css';
import { fetchCountries } from '../Utils/Api';

export const Search = ({ state, send }) => {
  const [flight, setFlight] = useState('');
  const [options, setOptions] = useState([]); 

  const goToPassengers = () => {
    send({ type: "CONTINUAR", selectedCountry: flight });
  };

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  useEffect(() => {
    // ✅ Llamada asíncrona dentro del useEffect
    const getCountries = async () => {
      const data = await fetchCountries();
      console.log("Países cargados:", data);
      setOptions(data);
    };

    getCountries();
  }, []);

  return (
    <div className='Search'>
      <p className='Search-title title'>Busca tu destino</p>
      <select
        id="country"
        className='Search-select'
        value={flight}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Escoge un país</option>
        {options.map((option, index) => (
          <option value={option.name.common} key={index}>
            {option.name.common}
          </option>
        ))}
      </select>

      <button
        disabled={flight === ''}
        onClick={goToPassengers}
        className='Search-continue button'
      >
        Continuar
      </button>
    </div>
  );
};

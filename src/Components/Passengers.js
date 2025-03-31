import React, { useState } from 'react';
import './Passengers.css';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send({ type: 'DONE' });
  }

  const submit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      send({ type: "ADD", newPassenger: value.trim() });
      changeValue('');
    }
  }

  const renderClients = () => {
    const { passengers } = state.context;
    return (
      <div className="passenger-list">
        {passengers.map((passenger, index) => (
          <div className='passenger-item' key={index}>
            {index + 1}. {passenger}
          </div>
        ))}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>Agrega a las personas que van a volar ✈️</p>

      {renderClients()}

      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={onChangeInput}
      />

      <div className='Passengers-buttons'>
        <button className='Passengers-add button-secondary' type="submit">
          Agregar Pasajero
        </button>
        <button className='Passenger-pay button' type="button" onClick={goToTicket}>
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};

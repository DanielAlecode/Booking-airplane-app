import React from 'react';
import './Tickets.css';

export const Tickets = ({ state, send }) => {
  const finish = () => {
    send({ type: 'FINISH' });
  };

  const { selectedCountry, passengers } = state.context;

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Gracias por volar con <strong>Book A Fly 💚</strong></p>

      <div className='Tickets-ticket'>
        <div className='Tickets-country'>Destino: {selectedCountry}</div>

        <div className='Tickets-passengers'>
          <p><strong>Pasajeros:</strong></p>
          {passengers.length > 0 ? (
            passengers.map((name, index) => (
              <div key={index} className='Tickets-passenger'>
                {index + 1}. {name}
              </div>
            ))
          ) : (
            <p>No hay pasajeros registrados.</p>
          )}
        </div>
      </div>

      <button onClick={finish} className='Tickets-finalizar button'>
        Finalizar
      </button>
    </div>
  );
};

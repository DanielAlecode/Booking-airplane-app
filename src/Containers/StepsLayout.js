import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Tickets } from '../Components/Tickets';
import { Passengers } from '../Components/Passengers';

import './StepsLayout.css';

const stepsMap = {
  inicial: Welcome,
  search: Search,
  tickets: Tickets,
  passengers: Passengers,
};

const StepsLayout = ({ state, send }) => {
  const StepComponent = Object.entries(stepsMap).find(([key]) =>
    state.matches(key)
  )?.[1];

  return (
    <div className='StepsLayout'>
      {StepComponent ? <StepComponent send={send} /> : null}
    </div>
  );
};

export default StepsLayout;

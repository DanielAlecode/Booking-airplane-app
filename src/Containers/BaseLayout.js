import React from "react"
import { useMachine } from "@xstate/react";
import StepsLayout from "./StepsLayout";
import bookingMachine from "../Machines/bookingMachine";
import './BaseLayout.css';
const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);

    console.log('Matches trues:', state.matches('inicial'));
    console.log('Matches false:', state.matches('tickets'));
    console.log('can:', state.can('FINISH'));
    return (
        <div className='BaseLayout'>
            <StepsLayout/>
        </div>
    )
}

export default BaseLayout;
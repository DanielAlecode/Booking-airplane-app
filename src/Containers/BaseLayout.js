import React from "react"
import { useMachine } from "@xstate/react";
import StepsLayout from "./StepsLayout";
import bookingMachine from "../Machines/bookingMachine";
import './BaseLayout.css';
import { Nav } from "../Components/Nav";

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);
    console.log("state", state.context)
    return (
        <div className='BaseLayout'>
            <Nav state={state} send={send}/>
            <StepsLayout state={state} send={send}/>
        </div>
    )
}

export default BaseLayout;
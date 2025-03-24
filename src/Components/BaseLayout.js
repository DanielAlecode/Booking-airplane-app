import React from "react"
import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";
const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);

    console.log(state);
    return (
        <div>
            Hello world!
        </div>
    )
}

export default BaseLayout;
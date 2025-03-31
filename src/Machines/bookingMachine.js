import { assign, createMachine, fromPromise } from "xstate";
import { fetchCountries } from "../Utils/Api";

const bookingMachine = createMachine({
  id: "Buy plane tikets",
  initial: "inicial",
  context: {
    passengers: [],
    selectedCountry: '',
    countries: [],
    error: '',
  },
  states: {
    inicial: {
      on: {
        START: {
          target: "loadingCountries",
          actions: "imprimirInicio"
        }
      }
    },
    loadingCountries: {
      invoke: {
        id: "getCountries",
        src: fromPromise(() => fetchCountries()),
        onDone: {
          target: "search",
          actions: [
            ({ context, event }) => {
              console.log("Recibido desde API:", event.data); // Verificar que llegue
            },
            assign(({ context, event }) => ({
              ...context,
              countries: event.data
            }))
          ]
        },
        onError: {
          target: "failure",
          actions: assign({
            error: () => "Fallo el request"
          })
        }
      }
    },
    search: {
      on: {
        CONTINUAR: {
          target: "passengers",
          actions: assign({
            selectedCountry: ({ context, event }) => event.selectedCountry
          })
        },
        CANCEL: "inicial"
      }
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: {
          target: "inicial",
          actions: "cleanContext"
        },
        ADD: {
          target: "passengers",
          actions: assign(({ context, event }) => ({
            passengers: [...context.passengers, event.newPassenger]
          }))
        }
      }
    },
    tickets: {
      on: {
        FINISH: {
          target: "inicial",
          actions: "cleanContext"
        }
      }
    },
    failure: {
      on: {
        RETRY: "loadingCountries"
      }
    }
  }
}, {
  actions: {
    cleanContext: assign({
      selectedCountry: '',
      passengers: [],
      countries: [],
      error: ''
    }),

  }
});

export default bookingMachine;

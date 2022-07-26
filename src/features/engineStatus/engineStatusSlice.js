import { createSlice } from "@reduxjs/toolkit";
import { faSpinner, faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const options = {
  name: 'engineStatus',
  initialState: 1,
  reducers: {
    setCustomEngineStatus: (state, action) => {
      state = action.payload;
      return state;
    },
    setNotReadyEngineStatus: (state, action) => {
      state = 1;
      return state;
    },
    setReadyEngineStatus: (state, action) => {
      state = 2;
      return state;
    },
    setBusyEngineStatus: (state, action) => {
      state = 3;
      return state;
    },
    setErrorEngineStatus: (state, action) => {
      state = 4;
      return state;
    }
  }
}

const engineStatusSlice = createSlice(options);

export const selectEngineStatus = (state) => state.engineStatus;
export const selectFormattedEngineStatus = (state) => {
  const engineStatus = selectEngineStatus(state);
  switch (engineStatus) {
    case 1:
      return {
        icon: faSpinner,
        color: 'text-orange-500',
        tooltip: 'Initializing LaTeX Engine...'
      };
    case 2:
      return {
        icon: faCircleCheck,
        color: 'text-green-500',
        tooltip: 'LaTeX Engine Ready for Use! <br /> Click to see compiler log.'
      };
    case 3:
      return {
        icon: faSpinner,
        color: 'text-orange-500',
        tooltip: 'LaTeX Engine Busy Compiling...'
      };
    case 4:
      return {
        icon: faCircleExclamation,
        color: 'text-red-500',
        tooltip: 'Error with LaTeX Engine!'
      };
    default:
      return null;
  }
}

export const { setCustomEngineStatus, setNotReadyEngineStatus, setReadyEngineStatus, setBusyEngineStatus, setErrorEngineStatus } = engineStatusSlice.actions;
export default engineStatusSlice.reducer
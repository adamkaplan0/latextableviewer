import { createSlice } from "@reduxjs/toolkit";

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
        class: "text-orange-500",
        text: "Initializing"
      }
    case 2:
      return {
        class: "text-green-500",
        text: "Ready"
      }
    case 3:
      return {
        class: "text-yellow-500",
        text: "Busy"
      }
    case 4:
      return {
        class: "text-red-500",
        text: "Error"
      }
    default:
      return null;
  }
}

export const { setCustomEngineStatus, setNotReadyEngineStatus, setReadyEngineStatus, setBusyEngineStatus, setErrorEngineStatus } = engineStatusSlice.actions;
export default engineStatusSlice.reducer
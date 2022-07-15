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

export const { setCustomEngineStatus, setNotReadyEngineStatus, setReadyEngineStatus, setBusyEngineStatus, setErrorEngineStatus } = engineStatusSlice.actions;
export default engineStatusSlice.reducer
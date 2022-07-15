import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'latexEditor',
  initialState: '',
  reducers: {
    setLatexSourceCode: (state, action) => {
      state = action.payload;
      return state;
    }
  }
}

const latexEditorSlice = createSlice(options);

export const { setLatexSourceCode } = latexEditorSlice.actions;
export default latexEditorSlice.reducer
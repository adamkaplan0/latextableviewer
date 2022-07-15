import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'latexEditor',
  initialState: {
    preamble: '\\documentclass{article} \n\n\\begin{document}\n\n',
    body: 'Insert code here...',
    end: '\n\n\\end{document}',
    showFullSourceCode: false
  },
  reducers: {
    setPreamble: (state, action) => {
      state.preamble = action.payload;
      return state;
    },
    setBody: (state, action) => {
      state.body = action.payload;
      return state;
    },
    toggleSourceCode: (state, action) => {
      state.showFullSourceCode = !state.showFullSourceCode;
      return state;
    }
  }
}

const latexEditorSlice = createSlice(options);

export const selectPreamble = (state) => state.latexEditor.preamble;
export const selectBody = (state) => state.latexEditor.body;
export const selectFullSourceCode = (state) => state.latexEditor.preamble + state.latexEditor.body + state.latexEditor.end;
export const selectShowFullSourceCode = (state) => state.latexEditor.showFullSourceCode;

export const { setPreamble, setBody, toggleSourceCode } = latexEditorSlice.actions;
export default latexEditorSlice.reducer
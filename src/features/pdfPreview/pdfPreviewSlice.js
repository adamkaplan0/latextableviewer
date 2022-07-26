import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'pdfPreview',
  initialState: {
    pdfUrl: '',
    compilerLog: '',
    showCompilerLog: true
  },
  reducers: {
    setCompiledPdfUrl: (state, action) => {
      state.pdfUrl = action.payload;
      return state;
    },
    setCompilerLog: (state, action) => {
      state.compilerLog = action.payload;
      return state;
    },
    setShowCompilerLog: (state, action) => {
      state.showCompilerLog = action.payload;
      return state;
    },
    toggleCompilerLog: (state, action) => {
      state.showCompilerLog = !state.showCompilerLog;
      return state;
    }
  }
}

const pdfPreviewSlice = createSlice(options);

export const selectCompiledPdfUrl = (state) => state.pdfPreview.pdfUrl;
export const selectCompilerLog = (state) => state.pdfPreview.compilerLog;
export const selectShowCompilerLog = (state) => state.pdfPreview.showCompilerLog;

export const { setCompiledPdfUrl, setCompilerLog, setShowCompilerLog, toggleCompilerLog } = pdfPreviewSlice.actions;
export default pdfPreviewSlice.reducer
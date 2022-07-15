import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'pdfPreview',
  initialState: '',
  reducers: {
    setCompiledPdfUrl: (state, action) => {
      state = action.payload;
      return state;
    }
  }
}

const pdfPreviewSlice = createSlice(options);

export const { setCompiledPdfUrl } = pdfPreviewSlice.actions;
export default pdfPreviewSlice.reducer
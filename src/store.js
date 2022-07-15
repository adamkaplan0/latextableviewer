import { configureStore } from '@reduxjs/toolkit';

import engineStatusReducer from './features/engineStatus/engineStatusSlice';
import latexEditorReducer from './features/latexEditor/latexEditorSlice';
import pdfPreviewReducer from './features/pdfPreview/pdfPreviewSlice';

const store = configureStore({
  reducer: {
    engineStatus: engineStatusReducer,
    latexEditor: latexEditorReducer,
    pdfPreview: pdfPreviewReducer
  }
});

export default store;
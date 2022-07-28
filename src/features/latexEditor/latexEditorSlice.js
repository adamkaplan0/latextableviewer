import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'latexEditor',
  initialState: {
    preamble: '\\documentclass{article}\n\n\\usepackage{mathtools,amssymb,amsfonts,booktabs} \n\n\\begin{document}\n\n',
    body: 'Insert your code here...\n\n\\begin{table}[h]\n\t\\centering\n\t\\caption{Visualize all of your tables quickly and locally!}\n\t\\begin{tabular}{lll}\n\t\t\\toprule\n\t\tHey & This & Is Really Cool \\\\\n\t\t\\midrule\n\t\tI can put in anything & like $\\mathbb{R}$ & or $a^2 + b^2 = c^2$ \\\\\n\t\tAnd use custom packages & like \\texttt{booktabs} & \\\\\n\t\t\\bottomrule\n\t\\end{tabular}\n\\end{table}',
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
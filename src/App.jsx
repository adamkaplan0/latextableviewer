// Hooks
import { useEffect } from "react";
// Components
import { LatexEditorContainer } from './features/latexEditor/LatexEditorContainer';
import { PdfPreview } from './features/pdfPreview/PdfPreview';
// Redux
import { initializeLatexEngines } from "./features/latexCompilation/latexCompilation";
import { SplitPane } from "./components/SplitPane";
import { ButtonBarContainer } from "./features/buttonBar/ButtonBarContainer";


const App = () => {
  // At component mount, setup all of the LaTeX engines
  useEffect(() => {
    initializeLatexEngines();
  }, []);

  // The actual app
  return (
    <main>
      <ButtonBarContainer />
      <SplitPane>
        <LatexEditorContainer />
        <PdfPreview />
      </SplitPane>
    </main>
  );
};

export default App;
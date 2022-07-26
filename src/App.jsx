// Hooks
import { useEffect } from "react";
// Components
import { Header } from './components/Header';
import { LatexEditorContainer } from './features/latexEditor/LatexEditorContainer';
import { PdfPreview } from './features/pdfPreview/PdfPreview';
import { Footer } from './components/Footer';
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
    <div id="app" className="container mx-auto">
      <Header />
      <main>
        <ButtonBarContainer />
        <SplitPane>
          <LatexEditorContainer />
          <PdfPreview />
        </SplitPane>
      </main>
      <Footer />
    </div>
  );
};

export default App;
// Hooks
import { useEffect } from "react";
// Components
import { Header } from './components/Header';
import { LatexEditor } from './features/latexEditor/LatexEditor';
import { PdfPreview } from './features/pdfPreview/PdfPreview';
import { Footer } from './components/Footer';
// Redux
import { initializeLatexEngines } from "./features/latexCompilation/latexCompilation";


const App = () => {
  // At component mount, setup all of the LaTeX engines
  useEffect(() => {
    initializeLatexEngines();
  }, []);

  // The actual app
  return (
    <div id="app" className="container mx-auto">
      <Header />
      <main className="grid grid-cols-2 gap-4 items-left place-content-stretch h-full min-h-500">
        <LatexEditor />
        <PdfPreview />
      </main>
      <Footer />
    </div>
  );
};

export default App;
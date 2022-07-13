import { useEffect, useState } from "react";
import { Header } from './Header';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { Footer } from './Footer';
import { DvipdfmxEngine } from './DvipdfmxEngine';
import { XeTeXEngine } from "./XeTeXEngine";

const xetexEngine = new XeTeXEngine(), dviEngine = new DvipdfmxEngine();

function App() {
  const [enginesStatus, setEnginesStatus] = useState(1);
  const [code, setCode] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(()=>{
      URL.revokeObjectURL(pdfUrl);
      console.log('Revoked URL');
    }, 30000);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  const init = async () => {
    try {
      await xetexEngine.loadEngine();
      await dviEngine.loadEngine();
      setEnginesStatus(2);
    } catch (e) {}
  }

  const compile = async () => {
    if (!xetexEngine.isReady() || !dviEngine.isReady()) {
      console.log('Engine not ready yet!');
      return;
    }
    setEnginesStatus(3);
    xetexEngine.writeMemFSFile("main.tex", code);
    xetexEngine.setEngineMainFile("main.tex");
    let xetexCompilation = await xetexEngine.compileLaTeX();
    console.log(xetexCompilation.log);
    if (xetexCompilation.status === 0) {
      dviEngine.writeMemFSFile("main.xdv", xetexCompilation.pdf);
      dviEngine.setEngineMainFile("main.xdv");
      let dviCompilation = await dviEngine.compilePDF();
      const pdfBlob = new Blob([dviCompilation.pdf], {type : 'application/pdf'});
      setPdfUrl(URL.createObjectURL(pdfBlob));
    }
    setEnginesStatus(2);
  }

  return (
    <div id="app" className="container mx-auto">
      <Header />
      <main className="grid grid-cols-2 gap-4 items-left place-content-stretch h-full min-h-500">
        <Editor value={code} setValue={setCode} />
        <Preview compile={compile} pdfUrl={pdfUrl} enginesStatus={enginesStatus} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

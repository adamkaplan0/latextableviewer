import { useState } from "react";
import { Header } from './Header';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { Footer } from './Footer';
import { DvipdfmxEngine } from './DvipdfmxEngine';
import { XeTeXEngine } from "./XeTeXEngine";

const xetexEngine = new XeTeXEngine();
const dviEngine = new DvipdfmxEngine();

function App() {
  const [enginesInitialized, setEnginesInitialized] = useState(false);
  const [code, setCode] = useState('');

  const init = async () => {
    if (!enginesInitialized) {
      await xetexEngine.loadEngine();
      await dviEngine.loadEngine();
      setEnginesInitialized(true);
    }
    console.log(xetexEngine);
    console.log(dviEngine);
  }

  const compile = async () => {
    init();
    if (!xetexEngine.isReady() || !dviEngine.isReady()) return;
    xetexEngine.writeMemFSFile("main.tex", code);
    xetexEngine.setEngineMainFile("main.tex");
    let r = await xetexEngine.compileLaTeX();
    console.log(r);
  }

  return (
    <div id="app" className="container mx-auto">
      <Header />
      <main className="grid grid-cols-2 gap-4 items-left place-content-stretch h-full">
        <Editor value={code} setValue={setCode} />
        <Preview compile={compile} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

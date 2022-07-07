import { useState } from "react";

import { Header } from './Header';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { Footer } from './Footer';
import { XeTeXEngine } from "./XeTeXEngine";

const engine = new XeTeXEngine();

function App() {
  const [engineInitialized, setEngineInitialized] = useState(false);
  const [code, setCode] = useState('');

  const init = async () => {
    if (!engineInitialized) {
      await engine.loadEngine();
      setEngineInitialized(true);
    }
    console.log(engine);
  }

  const compile = async () => {
    init();
    if (!engine.isReady) return;
    engine.writeMemFSFile("main.tex", code);
    engine.setEngineMainFile("main.tex");
    let r = await engine.compileLaTeX();
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

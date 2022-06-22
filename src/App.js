import { Header } from './Header';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { Footer } from './Footer';

function App() {
  return (
    <div id="app" className="container mx-auto">
      <Header />
      <main className="grid grid-cols-2 gap-4 items-left place-content-stretch h-full">
        <Editor />
        <Preview />
      </main>
      <Footer />
    </div>
  );
};

export default App;

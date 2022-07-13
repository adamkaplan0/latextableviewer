import { EngineIndicator } from './EngineIndicator';
import loadingAnimation from './loading.gif';

export const Preview = ({compile, pdfUrl, enginesInitialized}) => {
  return (
    <article className="flex flex-col items-left">
      <div>
      <button onClick={compile}>Compile</button><button>Download</button><EngineIndicator enginesInitialized={enginesInitialized} />
      </div>
      {pdfUrl !== "" && <embed src={pdfUrl} width="100%" height="1000px" type="application/pdf"></embed>}
      {pdfUrl === "" && <img height="1000px" src={loadingAnimation} />}
    </article>
  )
}
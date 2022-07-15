// Hooks
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// Components
import { EngineStatus } from '../engineStatus/EngineStatus';
import loadingAnimation from '../../loading.gif'
// Redux
import { compileLatex, revokeCompiledPdfUrl } from '../latexCompilation/latexCompilation';


export const PdfPreview = () => {
  // Select the URL of the PDF and the source code
  const pdfUrl = useSelector(state => state.pdfPreview);
  const sourceCode = useSelector(state => state.latexEditor);

  // Revoke the PDF URL every 30000 milliseconds
  useEffect(() => {
    const timer = setTimeout(()=>{
      revokeCompiledPdfUrl(pdfUrl);
    }, 30000);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  return (
    <article className="flex flex-col items-left">
      <div className="flex">
      <EngineStatus />
      <button onClick={() => compileLatex(sourceCode)}>Compile</button>
      </div>
      {pdfUrl !== "" && <embed src={pdfUrl} width="100%" height="1000px" type="application/pdf"></embed>}
      {pdfUrl === "" && <img height="1000px" src={loadingAnimation} />}
    </article>
  )
}
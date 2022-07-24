// Hooks
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// Components
import { EngineStatus } from '../engineStatus/EngineStatus';
import loadingAnimation from '../../loading.gif'
// Redux
import { compileLatex, revokeCompiledPdfUrl } from '../latexCompilation/latexCompilation';
import { selectFullSourceCode } from '../latexEditor/latexEditorSlice';


export const PdfPreview = () => {
  // Select the URL of the PDF and the source code
  const pdfUrl = useSelector(state => state.pdfPreview);
  const sourceCode = useSelector(selectFullSourceCode);

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
      <button onClick={() => compileLatex(sourceCode)} className="inline-block mr-2 bg-[#13678A] hover:bg-[#45C4B0] text-white py-2 px-5 font-bold">Compile</button>
      <EngineStatus />
      </div>
      {pdfUrl !== "" && <embed src={pdfUrl} width="100%" height="1000px" type="application/pdf"></embed>}
      {pdfUrl === "" && <img height="1000px" src={loadingAnimation} />}
    </article>
  )
}
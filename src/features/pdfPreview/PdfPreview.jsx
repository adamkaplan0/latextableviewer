// Hooks
import { useSelector } from 'react-redux';
// Redux
import { selectCompiledPdfUrl, selectCompilerLog, selectShowCompilerLog } from './pdfPreviewSlice';


export const PdfPreview = () => {
  // Select the URL of the PDF and the source code
  const pdfUrl = useSelector(selectCompiledPdfUrl);
  const compilerLog = useSelector(selectCompilerLog);
  const showCompilerLog = useSelector(selectShowCompilerLog);

  const formattedCompilerLog = (
    <p className="min-h-[70vh] max-h-[70vh] border border-black p-2 font-mono overflow-y-scroll">
      <b>Compiler Log:</b><br/><br/>
      {compilerLog}
    </p>
  );
  const pdfEmbed = <embed src={pdfUrl} width="100%" type="application/pdf" className="min-h-[70vh] border border-black"></embed>;


  return (
    <article>
      {pdfUrl !== "" && !showCompilerLog && pdfEmbed}
      {(pdfUrl === "" || showCompilerLog) && formattedCompilerLog}
    </article>
  )
}
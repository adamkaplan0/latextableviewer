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
    <p className="min-h-[500px] border border-black p-2 font-mono">
      <b>Compiler Log:</b><br/><br/>
      {compilerLog}
    </p>
  );
  const pdfEmbed = <embed src={pdfUrl} width="100%" height="500px" type="application/pdf" className="border border-black"></embed>;


  return (
    <article>
      {pdfUrl !== "" && !showCompilerLog && pdfEmbed}
      {(pdfUrl === "" || showCompilerLog) && formattedCompilerLog}
    </article>
  )
}
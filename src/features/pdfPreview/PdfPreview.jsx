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
    <p className="CompilerLog">
      <b>Compiler Log:</b><br/><br/>
      {compilerLog}
    </p>
  );
  const pdfEmbed = <embed src={pdfUrl} width="100%" type="application/pdf" className="PdfEmbedding"></embed>;


  return (
    <article>
      {pdfUrl !== "" && !showCompilerLog && pdfEmbed}
      {(pdfUrl === "" || showCompilerLog) && formattedCompilerLog}
    </article>
  )
}
// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import { ButtonBar } from "./ButtonBar";
// Redux
import { selectFullSourceCode, selectShowFullSourceCode, toggleSourceCode } from "../latexEditor/latexEditorSlice";
import { revokeCompiledPdfUrl, compileLatex } from "../latexCompilation/latexCompilation";

export const ButtonBarContainer = () => {
  // Select the URL of the PDF, the source code, and whether to show all of it
  const pdfUrl = useSelector(state => state.pdfPreview);
  const sourceCode = useSelector(selectFullSourceCode);
  const showFullSourceCode = useSelector(selectShowFullSourceCode);
  const dispatch = useDispatch();

  // Revoke the PDF URL every 30000 milliseconds
  useEffect(() => {
    const timer = setTimeout(()=>{
      revokeCompiledPdfUrl(pdfUrl);
    }, 30000);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  const toggleVisibility = () => dispatch(toggleSourceCode());
  const compile = () => compileLatex(sourceCode)

  return (
    <ButtonBar
      toggleVisibility={toggleVisibility}
      compile={compile}
      showFullSourceCode={showFullSourceCode}
    />
  );
}
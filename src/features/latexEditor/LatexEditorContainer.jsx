// Hooks
import { useSelector, useDispatch } from "react-redux";
// Components
import { LatexEditor } from "./LatexEditor";
// Redux
import { setPreamble, setBody, selectBody, selectFullSourceCode, selectShowFullSourceCode } from "./latexEditorSlice";


export const LatexEditorContainer = () => {
  const body = useSelector(selectBody);
  const fullSourceCode = useSelector(selectFullSourceCode);
  const showFullSource = useSelector(selectShowFullSourceCode);
  const dispatch = useDispatch();

  const handleChange = (editorValue) => {
    if (showFullSource) {
      let [newPreamble, newBody] = editorValue.split('\\begin{document}');
      newBody = newBody.split('\\end{document}')[0].trim();
      dispatch(setPreamble(newPreamble + '\\begin{document}\n\n'));
      dispatch(setBody(newBody));
    } else {
      dispatch(setBody(editorValue));
    }
  };

  return (
    <LatexEditor
      handleChange={handleChange}
      sourceCode={showFullSource ? fullSourceCode : body}
    />
  );
};
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Components
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
// Redux
import { setLatexSourceCode } from "./latexEditorSlice";


export const LatexEditor = () => {
  const sourceCode = useSelector(state => state.latexEditor);
  const dispatch = useDispatch();

  return (
    <article className="flex flex-col items-left border border-black">
       <AceEditor
        mode="latex"
        theme="github"
        name="aceEditor"
        height="100%"
        width="100%"
        wrapEnabled={true}
        fontSize="16px"
        editorProps={{ $blockScrolling: true }}
        onChange={newSourceCode => dispatch(setLatexSourceCode(newSourceCode))}
        value={sourceCode}
      />
      <a href="#">Edit full source code</a>
    </article>
  )
}
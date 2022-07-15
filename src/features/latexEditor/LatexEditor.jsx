import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";


export const LatexEditor = ({handleChange, sourceCode, toggleVisibility}) => {
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
        onChange={handleChange}
        value={sourceCode}
      />
      <button onClick={toggleVisibility}>Edit full source code</button>
    </article>
  )
}
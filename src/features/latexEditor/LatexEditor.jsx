import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";


export const LatexEditor = ({handleChange, sourceCode}) => {
  return (
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
      className="LatexEditor"
    />
  );
};
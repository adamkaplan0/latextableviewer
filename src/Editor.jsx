import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export const Editor = () => {
  return (
    <article className="flex flex-col items-left border border-black">
       <AceEditor
        mode="latex"
        theme="github"
        name="editor"
        height="100%"
        width="100%"
        wrapEnabled={true}
        fontSize="16px"
        editorProps={{ $blockScrolling: true }}
      />
      <a href="#">Edit full source code</a>
    </article>
  )
}
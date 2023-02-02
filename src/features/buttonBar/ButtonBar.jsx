import { SplitPane } from "../../components/SplitPane"
import { Button } from "../../components/Button"
import { EngineStatus } from "../engineStatus/EngineStatus";

export const ButtonBar = ({toggleVisibility, compile, showFullSourceCode}) => {
  const toggleText = showFullSourceCode ? "Hide full source code" : "Show full source code";
  return (
    <SplitPane>
      <aside className="flex flex-row justify-center gap-2 mb-2 md:justify-end">
        <Button onClick={toggleVisibility} sticky={showFullSourceCode}>{toggleText}</Button>
        <Button onClick={compile}>Compile</Button>
        <EngineStatus />
      </aside>
    </SplitPane>
  )
};
export const EngineIndicator = ({enginesInitialized}) => {
  return enginesInitialized ? <p className="text-green-500">Ready</p> : <p className="text-red-500">Not Ready</p>;
}
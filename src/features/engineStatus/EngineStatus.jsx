import { useSelector } from "react-redux";

export const EngineStatus = () => {
  const engineStatus = useSelector(state => state.engineStatus);
  let statusMessage;
  switch (engineStatus) {
    case 1:
      statusMessage = <p className="text-orange-500">Initializing...</p>;
      break;
    case 2:
      statusMessage = <p className="text-green-500">Ready</p>;
      break;
    case 3:
      statusMessage = <p className="text-brown-500">Busy</p>;
      break;
    case 4:
      statusMessage = <p className="text-red-500">Error</p>;
      break;
    default:
      break;
  }
  return statusMessage;
}
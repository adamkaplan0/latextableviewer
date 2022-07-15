import { useSelector } from "react-redux";
import { selectFormattedEngineStatus } from "./engineStatusSlice";

export const EngineStatus = () => {
  const engineStatus = useSelector(selectFormattedEngineStatus);
  return <p className={engineStatus.class}>{engineStatus.text}</p>;
}
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import { selectEngineStatus, selectFormattedEngineStatus } from "./engineStatusSlice";
import { setShowCompilerLog, toggleCompilerLog } from "../pdfPreview/pdfPreviewSlice";
import { useEffect } from "react";

export const EngineStatus = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const engineStatus = useSelector(selectEngineStatus);
  const { icon, color, tooltip } = useSelector(selectFormattedEngineStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (engineStatus === 4) {
      dispatch(setShowCompilerLog(true));
    }
  }, [engineStatus])

  const handleClick = () => {
    if (engineStatus === 2) {
      dispatch(toggleCompilerLog());
    }
  }

  return (<div>
    <FontAwesomeIcon
      icon={icon}
      className={`inline-block text-center mt-2 ${color} hover:cursor-pointer`}
      size="xl"
      data-tip={tooltip}
      data-for="engineStatus"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => {
        setShowTooltip(false);
        setTimeout(() => setShowTooltip(true), 50);
      }}
      onClick={handleClick}
    />
    {showTooltip && <ReactTooltip id="engineStatus" place="bottom" type="dark" effect="solid" html={true} />}
  </div>);
}
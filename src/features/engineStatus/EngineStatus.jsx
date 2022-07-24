import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import { selectFormattedEngineStatus } from "./engineStatusSlice";

export const EngineStatus = () => {
  const [tooltip, showTooltip] = useState(true);
  const engineStatus = useSelector(selectFormattedEngineStatus);

  const baseStyle = 'inline-block text-center mt-2';
  return (<div>
    <FontAwesomeIcon
      icon={engineStatus.icon}
      className={`${baseStyle} ${engineStatus.color}`}
      size="xl"
      data-tip={engineStatus.tooltip}
      onMouseEnter={() => showTooltip(true)}
      onMouseLeave={() => {
        showTooltip(false);
        setTimeout(() => showTooltip(true), 50);
      }}
    />
    {tooltip && <ReactTooltip place="bottom" type="dark" effect="solid" />}
  </div>);
}
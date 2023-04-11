import "./RiskMeter.css";
import PointerIcon from "../../assets/svg-components/PointerIcon";
import { useState } from "react";

const RiskMeter = ({ percentage }) => {
  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <p className="text text-xl font-bold">High</p>
        <p className="text text-xl font-bold">Medium</p>
        <p className="text text-xl font-bold">Low</p>
      </div>
      <div className="risk-meter">
        <div className="risk-meter-bar">
          <div className="risk-meter-point" style={{ left: `${percentage}%` }}>
            <PointerIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskMeter;

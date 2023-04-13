import "./RiskMeter.css";
import PointerIcon from "../../assets/svg-components/PointerIcon";

const RiskMeter = ({ percentage }) => {
  return (
    <>
      <div className="flex justify-between mb-4 text-xl font-bold">
        <p>High</p>
        <p>Medium</p>
        <p>Low</p>
      </div>
      <div className="risk-meter h-11	w-full px-4 rounded-3xl border-2 border-black">
        <div className="relative">
          <div
            className=" absolute transition-all	 duration-500 ease-in-out"
            style={{ left: `${percentage}%` }}
          >
            <PointerIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskMeter;

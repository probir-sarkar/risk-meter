import InfoIcon from "../../assets/svg-components/InfoIcon";
import CheckMark from "../../assets/svg-components/CheckMark";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../../redux/risk/riskSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, checked } = item;
  return (
    <>
      <div
        className="card-box bg-slate-200/25
 rounded-2xl flex items-center relative py-12 px-4 border-emerald-500/20 border"
      >
        <div
          className={`card-box-checkbox h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-md cursor-pointer border-2 border-emerald-500  ${
            checked ? "bg-emerald-500 transition-all duration-300 ease-in-out" : ""
          }`}
          onClick={() => dispatch(toggleCheck(id))}
        >
          {checked && <CheckMark className="check-mark" />}
        </div>
        <div className={`card-box-text ml-2 font-medium text-base `}>
          <h3>{title}</h3>
        </div>
        <div className="card-box-info-icon absolute top-3 right-3 cursor-pointer">
          <InfoIcon />
        </div>
      </div>
    </>
  );
};

export default Card;

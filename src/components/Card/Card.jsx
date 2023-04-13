import InfoIcon from "../../assets/svg-components/InfoIcon";
import CheckMark from "../../assets/svg-components/CheckMark";
import { useDispatch } from "react-redux";
import { toggleCheck } from "../../redux/risk/riskSlice";
import "./Card.scss";
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
          <div className="group">
            <InfoIcon />
            <span className="hidden absolute bg-gray-800/80 text-white p-2 rounded-md text-sm  -top-3 right-3 group-hover:block w-24">
              More Info ...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

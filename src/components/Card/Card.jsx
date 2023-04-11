import { useState } from "react";
import "./Card.scss";
import InfoIcon from "../../assets/svg-components/InfoIcon";
import CheckMark from "../../assets/svg-components/CheckMark";

const Card = ({ item, handleCheck }) => {
  const { id, title, checked } = item;
  return (
    <>
      <div className="card-box">
        <div
          className={`card-box-checkbox ${checked && "checked"}`}
          onClick={() => handleCheck(id)}
        >
          {checked && <CheckMark className="check-mark" />}
        </div>
        <div className={`card-box-text `}>
          <h3>{title}</h3>
        </div>
        <div className="card-box-info-icon">
          <InfoIcon />
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import style from "../../static/style/alertStyle.css";

const DefaultAlert = ({ text }) => {
  return (
    <div className="alertPage">
      <div className="defaultAlert">
        <div className="alertText">{text}</div>
        <div className="alertCheck">확인</div>
      </div>
    </div>
  );
};

export default DefaultAlert;

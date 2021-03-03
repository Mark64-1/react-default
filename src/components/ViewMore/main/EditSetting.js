import React from "react";
import ProfileImg from "../common/ProfileImg";
import SetProfileButton from "../common/SetProfileButton";
import SetProfileLogoButton from "../common/SetProfileLogoButton";

const EditSetting = ({ data }) => {
  return (
    <div className="profile">
      <p className="centerText">{data}</p>
      <SetProfileButton linkURL="" />
    </div>
  );
};

export default EditSetting;

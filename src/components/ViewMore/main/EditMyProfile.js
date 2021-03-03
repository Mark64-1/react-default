import React from "react";
import ProfileImg from "../common/ProfileImg";
import SetProfileButton from "../common/SetProfileButton";
import SetProfileLogoButton from "../common/SetProfileLogoButton";

const EditMyProfile = ({ data, logo }) => {
  return (
    <div className="profile">
      <p className="centerText">{data}</p>
      <SetProfileLogoButton logo={logo}/>
    </div>
  );
};

export default EditMyProfile;

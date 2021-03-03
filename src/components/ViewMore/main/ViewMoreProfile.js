import React from "react";
import ProfileImg from "../common/ProfileImg";
import SetProfileButton from "../common/SetProfileButton";

const ViewMoreProfile = () => {
  var someProps = { name: "까미S", dates: "2021.02.19" };

  return (
    <div className="profile">
      <ProfileImg />
      <h1>{someProps.name}</h1>
      <p>가입날짜 {someProps.dates}</p>
      <p className="setProfile">프로필설정</p>
      <SetProfileButton linkURL="/MyProfilePage"/>
    </div>
  );
};

export default ViewMoreProfile;

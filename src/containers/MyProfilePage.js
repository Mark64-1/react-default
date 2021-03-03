import React from "react";
import EditSetting from "../components/ViewMore/main/EditSetting";
import EditMyProfile from "../components/ViewMore/main/EditMyProfile";

const MyProfilePage = ({ data, logo }) => {
  return (
    <div className="more">
      <h1>설정</h1>
      {data.map((text, i) => (
        <EditMyProfile data={text} logo={logo[i]} />
      ))}
    </div>
  );
};

export default MyProfilePage;

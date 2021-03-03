import React from "react";
import Roll from "../components/ViewMore/common/Roll";
import ViewMoreProfile from "../components/ViewMore/main/ViewMoreProfile";
import EditSetting from "../components/ViewMore/main/EditSetting";
const SettingPage = ({ data }) => {
  return (
    <div className="more">
      <h1>설정</h1>
      {data.map((text) => (
        <EditSetting data={text} />
      ))}
    </div>
  );
};

export default SettingPage;

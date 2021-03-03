import React from "react";
import style from "../static/style/ViewMoreStyle.css";
import Roll from "../components/ViewMore/common/Roll";
import ViewMoreProfile from "../components/ViewMore/main/ViewMoreProfile";

const ViewMorePage = () => {
  return (
    <div className="more">
      <h1>더보기</h1>
      <Roll />
      <ViewMoreProfile />
    </div>
  );
};

export default ViewMorePage;

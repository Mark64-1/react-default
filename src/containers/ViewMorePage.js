import React from "react";
import style from "../static/style/ViewMoreStyle.css";
import Roll from "../components/ViewMore/common/Roll";
import ViewMoreProfile from "../components/ViewMore/main/ViewMoreProfile";
import ViewMoreShop from "../components/ViewMore/main/ViewMoreShop";

const ViewMorePage = () => {
  return (
    <div className="more">
      <h1>더보기</h1>
      <Roll />
      <ViewMoreProfile />
      <ViewMoreShop />
    </div>
  );
};

export default ViewMorePage;

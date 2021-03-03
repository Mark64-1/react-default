import React from "react";
import ProfileImg from "../common/ProfileImg";
import SetProfileButton from "../common/SetProfileButton";

const ViewMoreProfile = () => {

    return (
        <div className="profile">
            <h1>까미 아이템 상점</h1>
            <SetProfileButton linkURL="/MyProfilePage" />
        </div>
    );
};

export default ViewMoreProfile;

import React from "react";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import SettingPage from "../containers/SettingPage";
import ViewMorePage from "../containers/ViewMorePage";
import MyProfilePage from "../containers/MyProfilePage";
import DefaultAlert from "../components/alert/DefaultAlert";

interface Props{}

const Router = () => {
  return (

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={viewMorePage} />
          <Route path="/SettingPage" component={editPage} />
          <Route path="/MyProfilePage" component={profilePage} />
          <Route path="/defaultAlert" component={defaultAlert} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

function viewMorePage({ match }) {
  oneLoad();
  return <ViewMorePage />;
}

function editPage({ match }) {
  oneLoad();
  const edits = ["문의하기", "이용약관", "개인정보 보호 및 약관", "까미 소개"];
  return <SettingPage data={edits} />;
}
function profilePage({ match }) {
  oneLoad();
  const edits = [
    "닉네임 변경",
    "비밀번호 변경",
    "프로필사진 변경",
    "이메일",
    "휴대폰번호",
    "로그아웃",
    "계정삭제",
  ];
  const logo = ["edit", "edit", "image", "text", "text", "next", "next"];
  return <MyProfilePage data={edits} logo={logo} />;
}

function defaultAlert({ match }) {
  return <DefaultAlert text="default Text" />;
}

function oneLoad() {
  if (window.name != "reload" && window.innerWidth < 960) {
    window.name = "reload";
    window.location.reload(true);
  } else window.name = "";
}

export default Router;

const Button = styled.div`
  font-size: 5vw;
`;

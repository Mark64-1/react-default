import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "./ProfileImg";
import SetProfileButton from "./SetProfileButton";
import rootReducer from "../../../store/modules/index";
import { GET_USER_NAME } from "../../../store/modules/userInfo";

const SetProfileLogoButton = ({ logo }) => {
  // console.log((rootReducer().userInfo.action.type = GET_USER_NAME));

  const final = () => {
    console.log(logo);
    switch (logo) {
      case "edit":
        return (
          <svg
            width="11"
            height="16"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M35.9824 49.9958H5.77422C2.61374 49.9958 0.0449219 47.427 0.0449219 44.2665V14.0583C0.0449219 10.8979 2.61374 8.32904 5.77422 8.32904H23.4824C24.3449 8.32904 25.0449 9.02904 25.0449 9.89154C25.0449 10.754 24.3449 11.454 23.4824 11.454H5.77422C4.33875 11.454 3.16992 12.6229 3.16992 14.0583V44.2665C3.16992 45.702 4.33875 46.8708 5.77422 46.8708H35.9824C37.4179 46.8708 38.5867 45.702 38.5867 44.2665V26.5583C38.5867 25.6958 39.2867 24.9958 40.1492 24.9958C41.0117 24.9958 41.7117 25.6939 41.7117 26.5583V44.2665C41.7117 47.427 39.1429 49.9958 35.9824 49.9958Z"
                fill="white"
              />
              <path
                d="M18.3206 33.2832C17.9102 33.2832 17.51 33.1207 17.2163 32.825C16.8455 32.4562 16.6872 31.9248 16.7894 31.4144L18.2623 24.0478C18.3225 23.7438 18.4725 23.4664 18.6891 23.2498L40.2666 1.67498C42.4997 -0.558529 46.1332 -0.558529 48.3686 1.67498C49.4497 2.75606 50.0456 4.19382 50.0456 5.72504C50.0456 7.25626 49.4497 8.69364 48.3663 9.7751L26.7916 31.3522C26.5749 31.5708 26.2956 31.7188 25.9935 31.779L18.6289 33.2519C18.5266 33.2729 18.4225 33.2832 18.3206 33.2832ZM25.6872 30.2478H25.7082H25.6872ZM21.2332 25.1251L20.3142 29.729L24.9162 28.8082L46.158 7.56678C46.6497 7.07277 46.9206 6.42084 46.9206 5.72504C46.9206 5.02924 46.6497 4.37693 46.158 3.8833C45.1456 2.8686 43.4934 2.8686 42.4749 3.8833L21.2332 25.1251Z"
                fill="white"
              />
              <path
                d="M44.3154 13.1812C43.9156 13.1812 43.5154 13.029 43.2114 12.7227L37.3196 6.82901C36.7092 6.21866 36.7092 5.22913 37.3196 4.61877C37.9299 4.00842 38.9195 4.00842 39.5302 4.61877L45.4216 10.5125C46.032 11.1228 46.032 12.1124 45.4216 12.7227C45.1153 13.0271 44.7155 13.1812 44.3154 13.1812Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(0.0449219)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case "image":
        return <ProfileImg sort={"right"} />;
      case "text":
        return <p className="setProfile">Some Props Text(maybe Reducer?)</p>;
      case "next":
        return <SetProfileButton linkURL="/DefaultAlert" />;
    }
  };

  return final();
};

export default SetProfileLogoButton;

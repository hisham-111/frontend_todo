import React from "react";
import Icon from "../../Component/images/Najeeb.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./404page.css";

function ErrorPage() {
  const navigate = useNavigate();

  // const goBack = () => {
  //   navigate(-1);
  // };

  // start back button
  const goBack = () => {
    window.history.back();
  };
  // end back button
  return (
    <div id="main" className="container-fluid">
      <button className="link-404-back" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} className="back-arrow-404" />
        Go back
      </button>
      <h1 className="wrong-text">Something went wrong.</h1>
      <div className="row">
        <div className="parent-Box-one">
          <img src={Icon} alt="crying Najeeb" className="displayed animated" />
        </div>

        <div className="parent-Box-two">
          <h1 className="wrong-text" id="error">
            404
          </h1>
          <br />
          <h3 className="sorry-message">Sorry, we can't find the page.</h3>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

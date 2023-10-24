import React from "react";
import HomeImage from "../../assets/DoIt.jpg";
import "./index.css";
function Main() {
  return (
    <div className="parentHome">
      <div className="home-container-box-Left-one">
        <img className="homeImage" src={HomeImage} alt="homepageImage" />

        <p className="paragraph-container-box-Left-one">I Do It !</p>
      </div>

      <div className="parent-home-container-login">
        <div className="home-container-login">
          <h2>Time To Work ! </h2>
          <label htmlFor="">Email</label>
          <input className="input-email  input-type" type="text" />
          <label htmlFor="">Password</label>
          <input className="input-password input-type" type="text" />

          <button className="button-signIn">SING IN</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

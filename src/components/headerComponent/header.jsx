import React from "react";
import Icon from "../../logo.svg";
import Avatar from "../../assets/avatar.jpeg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import SearchBar from "../searchComponent/search";
import "./index.css";
function Header() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisible = () => {
    if (!isVisible) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div className="parent-header-container">
      <div className="head_nav">
        <img src={Icon} alt="Icon" width={45} />
        <ul className="nav-list">
          <li className="navlink">
            <SearchBar />
          </li>
          <li className="navlink  addlink">
            <IoIosAddCircleOutline />
          </li>

          <li className="navlink">
            {isVisible ? (
              <img
                className="avatar"
                src={Avatar}
                alt="Avatar-icon"
                width={35}
                onClick={toggleVisible}
              />
            ) : (
              <img
                className="avatar"
                src={Avatar}
                alt="Avatar-icon"
                width={35}
                onClick={toggleVisible}
              />
            )}

            {isVisible && (
              <p className="box-login-hidden">
                <img
                  className="avatar-hidden-login"
                  src={Avatar}
                  alt="Avatar-icon"
                  width={45}
                  height={45}
                />
                <p className="box-login">
                  <a className="email-login" href="#">
                    email@gmail.com
                  </a>

                  <span className="logout-btn">
                    <span className="logout">Log Out</span> <BiLogIn />
                  </span>
                </p>
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

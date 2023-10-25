import React from "react";
import Icon from "../../logo.svg";
import Avatar from "../../assets/avatar.jpeg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

import "./index.css";
function Header() {
  return (
    <div className="parent-header-container">
      <div className="head_nav">
        <img src={Icon} alt="Icon" width={45} />
        <ul className="nav-list">
          <li className="navlink">
            <AiOutlineSearch />
          </li>
          <li className="navlink  addlink">
            <IoIosAddCircleOutline />
          </li>

          <li className="navlink">
            <img className="avatar" src={Avatar} alt="Icon" width={35} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

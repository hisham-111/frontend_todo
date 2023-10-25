import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Data from "../todoComponent/todoData";
import Data2 from "../DoingComponent/doingData";
import Data3 from "../DoneComponent/doneData";

import "./index.css";

function SearchBar({ onFilter }) {
  const [filteredList, setFilteredList] = React.useState(Data);

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();

    const updatedList = Data.filter((item) => {
      return Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      );
    });

    setFilteredList(updatedList);
  };
  return (
    <>
      <div className="search-header">
        <input id="search-box" onChange={filterBySearch} />
      </div>
    </>
  );
}

export default SearchBar;

import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import NavBar from "../Navbar";
import SearchBar from "../SearchBar";
import Table from "../Table";

function Container() {
  const [employeeState, setEmployeeState] = useState([]);
  const [searchState, setSearchState] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    let matches = employeeState.filter((employee) => {
      let name = employee.name.first.toLowerCase();
      let search = event.target.value.toLowerCase();
      return name.includes(search);
    });
    setSearchState(matches);
  };

  useEffect(() => {
    API.getUser().then((users) => {
      setEmployeeState(users.data.results);
      setSearchState(users.data.results);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar inputChange={handleInputChange} />
      <Table employees={searchState} />
    </div>
  );
}

export default Container;

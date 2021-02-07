import React, { useEffect, useState } from 'react';
import { API } from "../../utils/API";
import ResultList from "../ResultList/index.js";
import Filter from "../Filter/index.js";
import Jumbotron from "../Jumbotron/index.js"

function App() {
  // Assigning States
  const [filter, setFilter] = useState([]);
  const [employees, setEmployees] = useState([]);

  // Setting API Data to <filter> 
  useEffect(() => {
    API().then(({ data: { results } }) => setFilter(results));
  }, []);

  //console.log(employees)

  // Render/Return
  return (
    <div className="App">
      {/* Passing in props */}
      <Jumbotron />
      <Filter filter = { filter } setEmployees = { setEmployees } />
      <ResultList employees = {employees} />
    </div>
  );
}

export default App;
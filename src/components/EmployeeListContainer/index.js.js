import React, { useEffect, useState } from 'react';
import { API } from "../../utils/API";
import ResultList from "../ResultList/index.js";

function App() {
  // Assigning States
  const [employees, setEmployees] = useState([]);

  // Setting API Data to <filter> 
  useEffect(() => {
    API().then(({ data: { results } }) => setEmployees(results));
  }, []);

  //console.log(employees)

  // Render/Return
  return (
    <div className="App">
      {/* Passing in props */}
      <ResultList employees = {employees} />
    </div>
  );
}

export default App;
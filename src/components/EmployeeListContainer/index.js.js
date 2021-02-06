import React, { useEffect, useState } from 'react';
import { API } from "../../utils/API";
import ResultList from "../ResultList/index.js"

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API().then(({ data: { results } }) => setEmployees(results));
  }, []);

  console.log(employees)

  return (
    <div className="App">
      <ResultList employees = {employees} />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";

// Setting <employee> Data to <sorted> State
const ResultList = ({ employees }) => {
  const [sorted, setSorted] = useState([]);
  useEffect(() => setSorted(employees), [employees]);

  // Render/Return
  return (
    <div className="table-responsive">
      <br />
        <h6>
          Sort by First, Last, Gender, City, or State by clicking on the headings
        </h6>
      <table className="table table-striped">
        <thead className="table-header">
          <tr>
            {/* Table Headings */} 
            <th scope="col"> </th>
            <th scope="col"> Title </th>
            {/* Table heading - Sort by First Name */}
            <th
              scope="col"
              onClick={() => {
                const employeeData = [...employees];
                const updateSort = employeeData.sort((a, b) => {
                  const A = a.name.first;
                  const B = b.name.first;
                  if (A < B) {
                    return -1;
                  }
                  if (A > B) {
                    return 1;
                  }
                  return 0;
                });
                setSorted(updateSort);
              }}
            >First</th> 
            <th scope="col" onClick={() => {
                const employeeData = [...employees];
                const updateSort = employeeData.sort((a, b) => {
                  const A = a.name.last;
                  const B = b.name.last;
                  if (A < B) {
                    return -1;
                  }
                  if (A > B) {
                    return 1;
                  }
                  return 0;
                });
                setSorted(updateSort);
              }}> Last </th>
            <th scope="col" onClick={() => {
                const employeeData = [...employees];
                const updateSort = employeeData.sort((a, b) => {
                  const A = a.gender;
                  const B = b.gender;
                  if (A < B) {
                    return -1;
                  }
                  else if (A > B) {
                    return 1;
                  }
                  return 0;
                });
                  setSorted(updateSort);
                }}> Gender </th> 
            <th scope="col"> Cell Phone </th>
            <th scope="col"> Landline </th> 
            <th scope="col"> Email </th>
            <th scope="col" onClick={() => {
                const employeeData = [...employees];
                const updateSort = employeeData.sort((a, b) => {
                  const A = a.location.city;
                  const B = b.location.city;
                  if (A < B) {
                    return -1;
                  }
                  else if (A > B) {
                    return 1;
                  }
                  return 0;
                });
                  setSorted(updateSort);
                }}> City </th> 
            <th scope="col" onClick={() => {
                const employeeData = [...employees];
                const updateSort = employeeData.sort((a, b) => {
                  const A = a.location.state;
                  const B = b.location.state;
                  if (A < B) {
                    return -1;
                  }
                  else if (A > B) {
                    return 1;
                  }
                  return 0;
                });
                  setSorted(updateSort);
                }}> State </th>
            <th scope="col"> Country </th> 
            <th scope="col"> Zip </th>
          </tr>
        </thead>

        {/* Mapping Incoming Data */}
        <tbody className="table-data">
          {sorted.map(
            ({
              location: { city, state, country, postcode },
              picture: { thumbnail },
              cell,
              phone,
              gender,
              email,
              name: { first, last, title },
            }) => (

              // Inserting Table Data
              <tr key={email}>
                <td>
                  <img alt="Employee images" src={thumbnail} />
                </td>
                <td> {title} </td> 
                <td> {first} </td> 
                <td> {last} </td>
                <td> {gender} </td> 
                <td> {cell} </td> 
                <td> {phone} </td>
                <td> {email} </td> 
                <td> {city} </td> 
                <td> {state} </td>
                <td> {country} </td> 
                <td> {postcode} </td> 
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;

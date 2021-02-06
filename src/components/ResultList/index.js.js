import React, { useState, useEffect } from 'react';

const ResultList = ({ employees }) => {
  const [sorted, setSorted] = useState([]);

  useEffect(() => setSorted(employees), [employees]);

  return (
    <p className="list-group">
        {sorted.map(
         {
            name: {first}
          }
        )}
    </p>
  );
}

export default ResultList;
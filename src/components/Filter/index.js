import React, { useEffect, useState } from 'react';

// Taking in <filter> and <setEmployees> Function
const FilterEmployees = ({ filter, setEmployees }) => {
    const [input, setInput] = useState("");

    // Filter Employees Based on Input Field
    useEffect(() => {
        const filtered =
            input === "" ? filter : filter.filter(
                ({ name: { last } }) =>
                    last.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        setEmployees(filtered);
    }, [input, filter, setEmployees]);

    // Render/Return
    return (
        <div className="filter-data">
            <h6 className='sub-header'>
                Filter by last name
            </h6>
           {/* Input Field Setup */}
            <input 
                className='input-box' 
                value={input} 
                onChange={e => setInput(e.target.value)} 
            />
        </div>
    );
};

export default FilterEmployees;
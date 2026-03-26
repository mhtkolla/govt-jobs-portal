import React from 'react';

const JobFilter = ({ onFilterChange }) => {
    const handleChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Filter jobs..." 
                onChange={handleChange} 
            />
        </div>
    );
};

export default JobFilter;
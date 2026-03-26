import React from 'react';

const JobCard = ({ title, company, location, date }) => {
    return (
        <div className="job-card">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{location}</p>
            <p>{date}</p>
        </div>
    );
};

export default JobCard;
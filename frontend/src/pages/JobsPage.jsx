import React, { useState, useEffect } from 'react';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Fetching jobs from a mock API
        const fetchJobs = async () => {
            const response = await fetch('https://api.example.com/jobs');
            const data = await response.json();
            setJobs(data);
        };  
        fetchJobs();
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Job Listings</h1>
            <input
                type="text"
                placeholder="Filter by job title"
                value={filter}
                onChange={handleFilterChange}
            />
            <ul>
                {filteredJobs.map(job => (
                    <li key={job.id}>{job.title} - {job.company}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobsPage;
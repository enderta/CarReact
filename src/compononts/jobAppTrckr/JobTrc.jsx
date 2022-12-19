import React from 'react';
import JobTrcTable from "./JobTrcTable";

const JobTrc = () => {
    const [jobs, setJobs] = React.useState([]);

    React.useEffect(() => {
            fetch('http://localhost:3001/jobs')
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                })
        }
        , []);
    return (
        <div>
            <Table variant={'dark'} striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Result</th>
                </tr>
                </thead>
                <tbody>
                {
                    jobs.map((job) => (
                        <JobTrcTable key={job.id} job={job}/>
                    ))
                }
                </tbody>
            </Table>
        </div>
    );
};

export default JobTrc;
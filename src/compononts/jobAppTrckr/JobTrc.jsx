import React from 'react';
import JobTrcTable from "./JobTrcTable";
import {Button, Table} from "react-bootstrap";
import NewAppModal from "./NewAppModal";

const JobTrc = () => {
    const [jobs, setJobs] = React.useState([]);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
            fetch('http://localhost:3001/jobs')
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                })
        }
        , []);


    const handleShow = () => setShow(true);
    return (
        <div>
            <div>
                <h1>Job Tracker</h1>
                <Button variant="success" onClick={handleShow}>
                    New Application
                </Button>
                <NewAppModal show={show} setShow={setShow} job={setJobs}/>
            </div>
            <Table variant={'dark'} striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Result</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    jobs.sort((a, b) => a.id - b.id).map((job) => {
                        return <JobTrcTable job={job} key={job.id}/>
                    }
                    )
                }
                </tbody>
            </Table>
        </div>
    );
};


export default JobTrc;
import React from 'react';

const JobTrcTable = (props) => {
    return (
        <div>
            <tr>
                <td>{props.job.id}</td>
                <td>{props.job.name}</td>
                <td>{props.job.job_title}</td>
                <td>{props.job.description}</td>
                <td>{props.job.date}</td>
                <td>{props.job.result}</td>
            </tr>
        </div>
    );
};

export default JobTrcTable;
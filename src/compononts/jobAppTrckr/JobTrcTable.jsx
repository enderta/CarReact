import React from 'react';

const JobTrcTable = (props) => {
    return (

            <tr>
                <td>{props.job.id}</td>
                <td>{props.job.name}</td>
                <td>{props.job.job_title}</td>
                <td>{props.job.description}</td>
                <td>{props.job.date.substr(0,10)}</td>
                <td>{props.job.result}</td>
            </tr>

    );
};

export default JobTrcTable;
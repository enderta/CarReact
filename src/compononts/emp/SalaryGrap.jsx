import React from 'react';
import { Chart } from "react-google-charts";

const SalaryGrap = () => {
    const [salary, setSalary] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/employees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {
                setSalary(data);
            }
            );
    }, []);
    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['name', 'salary'],
                    [salary[0].name, salary[0].salary],
                    [salary[1].name, salary[1].salary],
                    [salary[2].name, salary[2].salary],
                    [salary[3].name, salary[3].salary]
                ]}


            />


                    </div>
    );
};

export default SalaryGrap;
import React from 'react';
import { BarChart, Bar } from 'recharts';

const SalaryGrap = (props) => {
const salary = props.emp;
   let names=salary.map((item)=>item.name);
    let sal=salary.map((item)=>item.salary);
    let nameSalary=[...names,...sal];
   //create object from salary array
    let obj = {};
    for (let i = 0; i < salary.length; i++) {
        obj[names[i]] = sal[i];

    }

    const options = {
        title: 'Salary',
        hAxis: {
            title: 'Name',
        },
        vAxis: {
            title: 'Salary',
        },
    };

    return (
        <div>
            <BarChart width={400} height={300} data={obj} options={options}>
                <Bar dataKey="salary" fill="white" />
            </BarChart>



                    </div>
    );
};

export default SalaryGrap;
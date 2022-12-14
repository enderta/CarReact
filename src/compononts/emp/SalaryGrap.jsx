import React from 'react';
import { Chart } from "react-google-charts";


const SalaryGrap = (props) => {
const [data, setData] = React.useState([]);

    React.useEffect(() => {

            fetch('http://localhost:3001/employees', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0MkBnbWFpbC5jb20iLCJpYXQiOjE2NzI4NDk1MzZ9.ZthZ5qeqNX6IBVaq4EfIldNqVtda7skelkk-Hhf3Fj4'
                },
            }).then(res => res.json())
                .then(data => {
                        setData(data);
                    }
                )
                .catch(err => console.log(err))
        }
        , []);

   let names=data.map((item)=>item.name);
    let sal=data.map((item)=>item.salary);
    let nameSalary=[...names,...sal];
   //create object from salary array
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        obj[names[i]] = sal[i];

    }

    const chartData=[
        ['Name','Salary'],
        ...Object.entries(obj)
    ];
    console.log(chartData);

    return (
        <div>
         <Chart

                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    theme: 'dark',
                    title: 'Salary',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Salary',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Name',
                    },
                }}

            />


        </div>
    );
};

export default SalaryGrap;
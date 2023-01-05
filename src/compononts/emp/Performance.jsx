import React from 'react';
import {Chart} from "react-google-charts";

const Performance = () => {
    const [performance, setPerformance] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/performance', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        }).then(res => res.json())
            .then(data => {
                    setPerformance(data);
                }
            )
            .catch(err => console.log(err))
    }, []);
    let names=performance.map((item)=>item.name);
    let per=performance.map((item)=>item.performance);
    let namePerformance=[...names,...per];
    //create object from performance array
    let obj = {};
    for (let i = 0; i < performance.length; i++) {
        obj[names[i]] = per[i];
    }
    const chartData=[
        ['Name','Performance'],
        ...Object.entries(obj)
    ];

    return (
        <div>
            <Chart
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={chartData}
            />
        </div>
    );
};

export default Performance;
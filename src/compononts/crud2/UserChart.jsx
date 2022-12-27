import React from 'react';
import { Chart } from "react-google-charts";
import '../jobAppTrckr/job.css';


const UserChart = (props) => {
     const data = [
        ["Element", "Density", { role: "style" } ],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"]


    ];

     const options = {
        title: "Density of Precious Metals, in g/cm^3",
        legend: "none",
        animation: {
            startup: true,
            easing: "linear",
            duration: 10000,
        },
        enableInteractivity: false,

         backgroundColor: "#0b4817",
    };


    return (
        <div >
            <br/>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={props.user.name}
                options={options}

            />
        </div>


    );
};

export default UserChart;
import React from 'react';
import {Chart} from "react-google-charts";

const Budeget = () => {

    return (
        <div >
            <Chart
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ["year", "sales", "expenses"],
                    ["2013", 1000, 400],
                    ["2014", 1170, 460],
                    ["2015", 660, 1120],
                    ["2016", 1030, 540],
                ]}
                options={{
                    title: "Company Performance",
                    pieHole: 0.5,
                    theme: 'dark',
                    is3D: true,



                }}

            />

        </div>
    );
};

export default Budeget;
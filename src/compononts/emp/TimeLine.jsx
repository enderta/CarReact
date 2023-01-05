import React from 'react';
import {Chart} from "react-google-charts";

const TimeLine = () => {

    return (
        <div>
            <Chart
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={[
                    ['year', 'growth', 'debt'],
                    ['2010', 1000, 400],
                    ['2011', 1170, 460],
                    ['2012', 660, 1120],
                    ['2013', 1030, 540],
                ]}
                options={{
                    hAxis: {
                        title: 'Year',
                    },
                    vAxis: {
                        title: 'Popularity',
                    },

                        }}

            />

        </div>
    );
};

export default TimeLine;
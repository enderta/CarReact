import React from 'react';
import {Chart} from "react-google-charts";
import {createMuiTheme} from "@mui/material";
import * as PropTypes from "prop-types";

function MuiThemeProvider(props) {
    return null;
}

MuiThemeProvider.propTypes = {
    theme: PropTypes.any,
    children: PropTypes.node
};
const TimeLine = () => {

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });
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
                    theme: 'dark',

                        }}

            />


        </div>
    );
};

export default TimeLine;
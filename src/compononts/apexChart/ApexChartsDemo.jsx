import React from 'react';
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts' // https://apexcharts.com/docs/react-charts/

const series= {
    data: {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Product Trends by Month',

            }

        }
    }
}

const ApexChartsDemo = () => {

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={series.data.options} series={series.data.series} type="line" height={350}/>


        </div>
        </div>
    );
};

export default ApexChartsDemo;
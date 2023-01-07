import React from 'react';
import './dash.css'
import {Table} from "react-bootstrap";
import {Chart} from "react-google-charts";
import {Card} from "react-bootstrap";
const Dashboard = () => {
    const tableData=[
        {id:1,name:'John',age:20,city:'New York'},
        {id:2,name:'Alex',age:25,city:'London'},
        {id:3,name:'Bob',age:30,city:'Paris'},
        {id:4,name:'Mike',age:35,city:'New York'},
        {id:5,name:'Adam',age:40,city:'London'},
];
    return (

        <div>

            <div className="parent">
                <div className="div1">
                   <Card className={'card'}>
                          <Card.Body>
                                <Card.Title>Employees</Card.Title>
                                    <Table style={{backgroundColor:'#f59f06'}}>
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>City</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tableData.map((item,index)=>(
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.city}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                            </Card.Body>
                        </Card>
                </div>
                <div className="div2">
                    <Card className={'card'}>
                        <Card.Body>
                            <Card.Title>Performance</Card.Title>
                            <Chart
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ["year", "sales", "expenses"],
                                    ["2017", 1000, 400],
                                    ["2018", 1170, 460],
                                    ["2019", 660, 1120],
                                    ["2020", 1030, 540],
                                    ["2021", 1030, 540],
                                ]}
                                options={{
                                    hAxis: {
                                        title: "Year",
                                    },
                                    vAxis: {
                                        title: "Amount",

                                    },

                                    colors: ['#f44336', '#2196f3'],
                                    legend: {position: 'top', maxLines: 3},
                                    isStacked: true,
                                    textStyle: {
                                        color: '#8c1414',
                                        fontSize: 12,
                                        fontName: 'Roboto',
                                        bold: true,
                                    },
                                    backgroundColor:'#f59f06',

                                }}
                                rootProps={{ "data-testid": "1" }}

                            />
                        </Card.Body>
                    </Card>

                </div>
                <div className="div3">
                <Card className={'card'}>
                    <Card.Body>
                        <Card.Title>Sales Pie</Card.Title>
                        <Chart
                            width={'100%'}
                            height={'100%'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ["Year", "Price"],
                                ["2017", 1000],
                                ["2018", 1170],
                                ["2019", 660],
                                ["2020", 1030],
                                ["2021", 1030],
                            ]}
                            options={{
                                title: "Sales",
                                pieHole: 0.4,

                                legend: {position: 'top', maxLines: 3},
                                bar: {groupWidth: '75%'},
                                isStacked: true,
                                textStyle: {
                                    color: '#8c1414',
                                    fontSize: 12,
                                    fontName: 'Roboto',
                                    bold: true,
                                },
                                backgroundColor:'#f59f06',
                            }}
                            rootProps={{ "data-testid": "2" }}

                        />
                    </Card.Body>
                </Card>
                </div>
                <div className="div4">
                <Card className={'card'}>
                    <Card.Body>
                        <Card.Title>Bar Chart</Card.Title>
                        <Chart
                            width={'100%'}
                            height={'100%'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ["Year", "Price"],
                                ["2017", 1000],
                                ["2018", 1170],
                                ["2019", 660],
                                ["2020", 1030],
                                ["2021", 1030],
                            ]}
                            options={{
                                title: "Sales",
                                pieHole: 0.4,
                                legend: {position: 'top', maxLines: 3},
                                bar: {groupWidth: '75%'},
                                isStacked: true,
                                backgroundColor:'#f59f06',
                            }
                            }
                            rootProps={{ "data-testid": "2" }}
                            />
                    </Card.Body>
                </Card>
                </div>
                <div className="div5">
                <Card className={'card'}>
                    <Card.Body>
                        <Card.Title>Three Chart</Card.Title>
                        <Chart
                            width={'100%'}
                            height={'100%'}
                            chartType="BubbleChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
                                ["CAN", 80.66, 1.67, "North America", 33739900],
                                ["DEU", 79.84, 1.36, "Europe", 81902307],
                                ["DNK", 78.6, 1.84, "Europe", 5523095],
                                ["EGY", 72.73, 2.78, "Middle East", 79716203],
                                ["GBR", 80.05, 2, "Europe", 61801570],
                                ["IRN", 72.49, 1.7, "Middle East", 73137148],
                                ["IRQ", 68.09, 4.77, "Middle East", 31090763],
                                ["ISR", 81.55, 2.96, "Middle East", 7485600],
                                ["RUS", 68.6, 1.54, "Europe", 141850000],
                                ["USA", 78.09, 2.05, "North America", 307007000],
                            ]}
                            options={{
                                title:
                                    "Correlation between life expectancy, fertility rate " +
                                    "and population of some world countries (2010)",
                                hAxis: { title: "Life Expectancy" },
                                vAxis: { title: "Fertility Rate" },
                                bubble: { textStyle: { fontSize: 11 } },

                                legend: {position: 'top', maxLines: 3},
                                bar: {groupWidth: '75%'},
                                isStacked: true,
                                backgroundColor:'#f59f06',
                            }}
                            rootProps={{ "data-testid": "1" }}
                        />
                    </Card.Body>
                </Card>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;
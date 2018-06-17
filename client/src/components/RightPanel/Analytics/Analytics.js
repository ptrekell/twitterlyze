import React, { Component } from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Area } from "react-charts";
import './Analytics.css';

class Analytics extends Component {
    lineChart = (
        <Chart dark
            data={[
                {
                    label: "Series 1",
                    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                },
                {
                    label: "Series 2",
                    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                }
            ]}
        >
            <Axis primary type="time" />
            <Axis type="linear" />
            <Series type={Line} />
        </Chart>
    );


    timeChart = (
        <Chart dark
            data={[
                {
                    label: "Series 1",
                    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                },
                {
                    label: "Series 2",
                    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                }
            ]}>
            <Axis primary type="time" position="bottom" />
            <Axis type="linear" position="left" stacked cursor={{}} />
            <Series type={Area} />
            <Cursor primary />
            <Cursor />
            <Tooltip />
        </Chart>
    )


    render() {
        return (
            <div className="Analytics">

                {/* {this.lineChart} */}


                {/* {this.timeChart} */}
            </div>

        )
    }
}

export default Analytics;
import React, { Component } from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Area, Bar } from "react-charts";
import './Analytics.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';


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


    // timeChart = (
    //     <Chart dark
    //         data={[
    //             {
    //                 label: "Series 1",
    //                 data: this.state.data
    //             }
    //         ]}>
    //         <Axis primary type="time" position="bottom" />
    //         <Axis type="linear" position="left" stacked cursor={{}} />
    //         <Series type={Area} />
    //         <Cursor primary />
    //         <Cursor />
    //         <Tooltip />
    //     </Chart>
    // )





    render() {


        return (
            <div className="Analytics">

                <div className="InnerAnalytics">

                    {/* {this.lineChart} */}


                    {/* {this.props.coords.countries} */}


                </div>

                <Chart dark data={[{
                    label: "Tweets per country",
                    data: this.props.countries
                }]}>
                    <Axis primary type="ordinal" />
                    <Axis type="linear" min={0} max={0} />
                    <Series type={Bar} />
                    <Cursor primary />
                    <Cursor />
                    <Tooltip />
                </Chart>

            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        coords: state.coords,
        countries: state.countriesArr
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
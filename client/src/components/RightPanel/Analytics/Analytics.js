import React, { Component } from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Area, Bar } from "react-charts";
import './Analytics.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';


class Analytics extends Component {


    render() {


        console.log(JSON.stringify(this.props.countries));

        let cords = this.props.countries.length >= 2 ? this.props.countries : [];


        // let cords = [['US',10],['CZ',20]]

        console.log(JSON.stringify(cords));

        return (
            <div className="Analytics">

           
                    <Chart dark data={[{
                        label: "Tweets per country",
                        data: cords
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

    // console.log("*******************",state.countriesArr);
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
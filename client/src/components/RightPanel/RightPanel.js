import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import './RightPanel.css';
import SearchBar from './SearchBar/SearchBar';
import Analytics from './Analytics/Analytics';
import TwitterStream from './TwitterStream/TwitterStream'

class RightPanel extends Component {

    render() {

        return (

            <div className="RightPanel">


                <SearchBar />
                <TwitterStream message={this.props.message} />
                <Analytics />
                {/* <button onClick={()=> this.props.onChangeMessage("my new message goes here man")}>click me</button> */}

            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeMessage: (newMessage) => dispatch({type: actionTypes.LOG_MESSAGE, data: {text: newMessage}})
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);

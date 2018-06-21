import React, { Component } from 'react';
import './Backdrop.css';
import io from 'socket.io-client';
import MdMenu from 'react-icons/lib/md/menu';

class Backdrop extends Component {

    render() {
        return (
            this.props.show ?

                <div className="Backdrop" onClick={this.props.clicked}>

                </div> : null
        )
    }
}

export default Backdrop;
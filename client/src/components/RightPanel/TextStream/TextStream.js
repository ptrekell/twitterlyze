import React, { Component } from 'react';
import './TextStream.css';

class TextStream extends Component {

    render() {
        return (
            <div className="TextStream">
                TextStream message: {this.props.message}
            </div>
           
        )
    }
}

export default TextStream;
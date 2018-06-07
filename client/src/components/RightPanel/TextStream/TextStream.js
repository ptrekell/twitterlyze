import React, { Component } from 'react';
import io from 'socket.io-client';
import './TextStream.css';



class TextStream extends Component {

    render() {

        const socket = io.connect("/");

        socket.on("hello",function(num){
            console.log("hi",num);
          })


        return (
            <div className="TextStream">
                TextStream message: {this.props.message}
            </div>
           
        )
    }
}

export default TextStream;
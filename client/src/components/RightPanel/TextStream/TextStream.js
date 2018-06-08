import React, { Component } from 'react';
import io from 'socket.io-client';
import './TextStream.css';



class TextStream extends Component {


    state = {
        messages: [
            "first",
            "second",
            "third",
            "fourth",
            "fifth"
        ]
    }

    componentDidMount = () => {
        const socket = io.connect("/");
        socket.on("hello", this.updateSt)

    }

    updateSt = (num) => {
        this.setState(prevState => {
            return {
                ...prevState,
                messages: prevState.messages.concat( num ).splice(1,5)
            }
        });
    }


    render() {






        let messages = this.state.messages.map((message, idx) => {
            return <li key={idx}> {message} </li>
        })


        return (
            <div className="TextStream">
                TextStream message: {this.props.message} <br />

                <ul>
                    {messages}
                </ul>
                <br />

            </div>

        )
    }
}

export default TextStream;
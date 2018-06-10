import React, { Component } from 'react';
import io from 'socket.io-client';
import './TwitterStream.css';



class TwitterStream extends Component {


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
        socket.on("tweet", this.updateSt)

    }

    updateSt = (tweetObj) => {

        console.log(tweetObj);

        // let tweetText = "";

        let tweetText = null;
        
        if(tweetObj.extended_tweet && tweetObj.extended_tweet.full_text) {
            tweetText = tweetObj.extended_tweet.full_text;
        } else if(tweetObj.retweeted_status && tweetObj.retweeted_status.extended_tweet && tweetObj.retweeted_status.extended_tweet.full_text ) {
            tweetText = tweetObj.retweeted_status.extended_tweet.full_text;
        } else {
            tweetText = tweetObj.text;
        }
  


        // if (tweetObj.truncated && tweetObj.extended_tweet && tweetObj.extended_tweet.full_text) {
        //     tweetText = tweetObj.extended_tweet.full_text;
        // }

        if (tweetText) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    messages: prevState.messages.concat(tweetText).splice(1, 5)
                }
            });
        }


    }


    render() {






        let messages = this.state.messages.map((message, idx) => {
            return <li key={idx}> {message} </li>
        })


        return (
            <div className="TwitterStream">
                TextStream message: {this.props.message} <br />

                <ul>
                    {messages}
                </ul>
                <br />

            </div>

        )
    }
}

export default TwitterStream;
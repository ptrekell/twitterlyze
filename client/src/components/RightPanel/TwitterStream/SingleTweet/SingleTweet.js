import React, { Component } from 'react';
import './SingleTweet.css';


class SingleTweet extends Component {
 
    onItemClick = (url) => {
        window.open(url, '_blank');
    }

    render() {

        return (
               <tr className="SingleTweetText" onClick={(url)=>this.onItemClick(this.props.tweetObj.tweetUserURL)}>
                     <td><img src={this.props.tweetObj.tweetUserImage} className="ProfileImg" alt="User profile"/></td>
                     <td>{this.props.tweetObj.tweetText} </td>
                </tr>
        )
    }
}

export default SingleTweet;
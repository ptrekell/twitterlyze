import React, { Component } from 'react';
import './SingleTweet.css';


class SingleTweet extends Component {

    onItemClick = (url) => {
        return <div className="Backdrop"></div>
        // window.open(url, '_blank');
    }


    

    render() {

        return (
            <tr className="SingleTweetText" onClick={(url) => this.onItemClick(this.props.tweetObj.tweetUserURL)}>
            
                <td style={{textAlign:'center'}}>                    
                    <img src={this.props.tweetObj.tweetUserImage} className="ProfileImg" alt="User profile" />
                    <span className="badge badge-pill badge-warning">{this.props.tweetObj.tweetSearchWord}</span>
                </td>
                <td>
                    {this.props.tweetObj.tweetText}
                </td>
            </tr>
        )
    }
}

export default SingleTweet;
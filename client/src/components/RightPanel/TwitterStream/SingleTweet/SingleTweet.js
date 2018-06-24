import React, { Component } from 'react';
import './SingleTweet.css';


class SingleTweet extends Component {

    onItemClick = (url) => {

        window.open(url, '_blank');
    }


    
    highlightSearchWord(twitterText) {

        let twitterTextArr = twitterText.split(" "),
            modifiedTextArr = [];

        twitterTextArr.map( word => {

            if(word.toLowerCase().includes(this.props.tweetObj.tweetSearchWord.toLowerCase())) {
                modifiedTextArr.push(word);
            } else {    
                modifiedTextArr.push(word);
            }

        });



        return modifiedTextArr.join(" ");
    }




    render() {

        return (
            <tr className="SingleTweetText" onClick={(url) => this.onItemClick(this.props.tweetObj.tweetUserURL)}>
            
                <td style={{textAlign:'center'}}>                    
                    <img src={this.props.tweetObj.tweetUserImage} className="ProfileImg" alt="User profile" />
                    <span className="badge badge-pill badge-warning">{this.props.tweetObj.tweetSearchWord}</span>
                </td>
                <td>
                    {this.highlightSearchWord(this.props.tweetObj.tweetText.toString())}
                </td>
            </tr>
        )
    }
}

export default SingleTweet;
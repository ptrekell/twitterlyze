import React, { Component } from 'react';
import io from 'socket.io-client';
import SingleTweet from './SingleTweet/SingleTweet'
import './TwitterStream.css';
import Loader from 'react-loader-spinner';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

//https://www.npmjs.com/package/react-geocode
import Geocode from "react-geocode";

class TwitterStream extends Component {


    state = {
        tweetObjs: []
    }

    componentDidMount = () => {

        const socket = io.connect('/twitterStream');
        socket.on("tweet", this.updateSt)


    }

    updateSt = (tweetObj) => {


        // console.log(tweetObj);

        let _tweetObj = {
            tweetUser: tweetObj.user ? tweetObj.user.name : "Anonymous",
            tweetSearchWord: tweetObj.searchWord ? tweetObj.searchWord : "n/a",
            tweetSocketId: tweetObj.socketId,
            tweetUserImage: tweetObj.user ? tweetObj.user.profile_image_url : "https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png",
            tweetUserURL: `https://twitter.com/${tweetObj.user.screen_name}/`
        }

        if (tweetObj.extended_tweet && tweetObj.extended_tweet.full_text) {
            _tweetObj.tweetText = tweetObj.extended_tweet.full_text;
        } else if (tweetObj.retweeted_status && tweetObj.retweeted_status.extended_tweet && tweetObj.retweeted_status.extended_tweet.full_text) {
            _tweetObj.tweetText = tweetObj.retweeted_status.extended_tweet.full_text;
        } else {
            _tweetObj.tweetText = tweetObj.text;
        }



        

        // console.log(_tweetObj);





        this.setState(prevState => {
            return {
                ...prevState,
                tweetObjs: prevState.tweetObjs.concat(_tweetObj).length > 5 ?
                    prevState.tweetObjs.concat(_tweetObj).splice(1, 5) : prevState.tweetObjs.concat(_tweetObj)
            }
        });



        Geocode.fromAddress(tweetObj.user.location).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;

                let country;

                if (response.results[0].address_components) {
                    response.results[0].address_components.map(item => {
                        country = item.types[0] === "country" ? item.short_name : null;
                    });
                }


                


                let coords = {
                    longitude: lng,
                    latitude: lat,
                    country: country

                }

                       if (coords.country) {
                    // console.log(coords);

                    this.props.onNewTweet(coords);
                }


            },
            error => {
                // console.error(error);
                console.error("Coords not available for", tweetObj.user.location);
            }
        );






    }

    render() {
        let messages = this.state.tweetObjs.map((tweetObj, idx) => {
            return <SingleTweet key={idx} tweetObj={{ ...tweetObj }} />
        })

        return (
            <div className="TwitterStream">
                {/* TextStream message: {this.props.message} <br /> */}

                <table className="table table-hover table-dark">
                    <tbody>
                        {messages}
                    </tbody>
                </table>

                <div className="Loader" style={{ visibility: this.state.tweetObjs.length === 0 ? 'visible' : 'hidden' }}>
                    <Loader
                        type="Circles"
                        color="#ffffff"
                        height="20%"
                        width="20%"
                    />
                </div>



            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        // message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewTweet: (newTweetCoords) => dispatch({ type: actionTypes.LOG_NEW_TWEET, newTweetCoords: newTweetCoords})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TwitterStream);
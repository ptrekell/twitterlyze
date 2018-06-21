import React, { Component } from 'react';
import './SearchBar.css';
import io from 'socket.io-client';
import MdMenu from 'react-icons/lib/md/menu';
import Backdrop from './Backdrop/Backdrop';
import Modal from './Modal/Modal';



class SearchBar extends Component {

    state = {
        showBackdrop: false
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {

            const socket = io.connect('/twitterStream');
            socket.emit("searchValue", event.target.value);

        }
    }

    handleBackdropClick = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                showBackdrop: !prevState.showBackdrop
            }
        });
    }

    render() {
        return (
            <div className="SearchBar">

                <Backdrop show={this.state.showBackdrop} clicked={this.handleBackdropClick}/>
                <Modal show={this.state.showBackdrop} clicked={this.handleBackdropClick}/>

                <div style={{ width: "90%", height: "100%" }}>
                    <input className="form-control form-control-lg"
                        type="text"
                        placeholder="search..."

                        onKeyPress={this.handleKeyPress} />
                </div>
                <div style={{ width: "10%", height: "100%", backgroundColor: "#00aced", margin: "auto" }}>
                    <MdMenu
                        size="90%"
                        color="#ffffff"
                        onClick={this.handleBackdropClick} />
                </div>

            </div>

        )
    }
}

export default SearchBar;
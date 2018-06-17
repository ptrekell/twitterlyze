import React, { Component } from 'react';
import './SearchBar.css';
import io from 'socket.io-client';


class SearchBar extends Component {

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){

            const socket = io.connect();
            socket.emit("searchValue", event.target.value); 
            
          }
    }

    render() {
        return (
            <div className="SearchBar">
                <input className="form-control form-control-lg"
                    type="text"
                    placeholder="search..."
                
                     onKeyPress={this.handleKeyPress} /> 

            </div>

        )
    }
}

export default SearchBar;
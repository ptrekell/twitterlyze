import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {

    render() {
        return (
            <div className="SearchBar">
                <input className="form-control form-control-lg" type="text" placeholder="search..." />

            </div>
           
        )
    }
}

export default SearchBar;
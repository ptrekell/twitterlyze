import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    render() {
        return (
            <div className="SearchBar">
                <input class="form-control form-control-lg" style={{color:"black"}} type="text" placeholder="search..." />
            </div>
           
        )
    }
}

export default SearchBar;
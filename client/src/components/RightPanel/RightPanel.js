import React, { Component } from 'react';
import './RightPanel.css';
import SearchBar from './SearchBar/SearchBar';
import Analytics from './Analytics/Analytics';
import TextStream from './TextStream/TextStream'

const rightPanel = ( props ) => (

    <div className="RightPanel">
    
        <SearchBar />
        <TextStream />   
        <Analytics />


    </div>

)


export default rightPanel;

import React, { Component } from 'react';
import './Layout.css';
import Map from '../../components/Map/Map'
import RightPanel from '../../components/RightPanel/RightPanel'



class Layout extends Component {



    render() {
        return (
            <div className="Layout">

             <Map />
             <RightPanel />


            </div>
           
        )
    }

}


export default Layout;
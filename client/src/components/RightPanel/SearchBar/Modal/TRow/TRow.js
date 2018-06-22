import React, { Component } from 'react';
import './TRow.css';
import io from 'socket.io-client';

import MdDeleteForever from 'react-icons/lib/md/delete-forever';




class TRow extends Component {

    render() {
        return (
            <tr className="TRow">
            
            <td style={{textAlign:'left'}}>    
                {this.props.searchValue}                  
            </td>
            <td style={{textAlign:'left'}}>              
                {this.props.socketId}
            </td>
            <td style={{textAlign:'right'}}>
                <MdDeleteForever size="25" color="#ef0000" />
            </td>
        </tr>


        )
    }
}


export default TRow;
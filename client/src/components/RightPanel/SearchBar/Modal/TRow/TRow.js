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
                <MdDeleteForever size="25" color="#d6004a" onClick={(socketId) =>this.props.handleRemoveSocket(this.props.socketId)}/>
            </td>
        </tr>


        )
    }
}


export default TRow;
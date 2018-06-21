import React, { Component } from 'react';
import './Modal.css';
import io from 'socket.io-client';
import MdMenu from 'react-icons/lib/md/menu';
import IoCloseCircled from 'react-icons/lib/io/close-circled';

class Modal extends Component {

    render() {
        return (
            this.props.show ?

                <div className="Modal">

                    <h4>Stream control <IoCloseCircled color="#d6004a" size="30" class="CloseBtn" onClick={this.props.clicked} /></h4>
                    <hr />

                </div> : null
        )
    }
}

export default Modal;
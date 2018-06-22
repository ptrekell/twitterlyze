import React, { Component } from 'react';
import './Modal.css';
import io from 'socket.io-client';
import MdMenu from 'react-icons/lib/md/menu';
import IoCloseCircled from 'react-icons/lib/io/close-circled';
import TRow from './TRow/TRow';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

class Modal extends Component {



    componentDidMount = () => {
        console.log("im here now ");
        const socket = io.connect('/twitterStream');
        socket.on("newSocketForSearchValue", this.updateSt)
    }

    updateSt = (socketObj) => {

        this.props.onNewSearchSocket(socketObj);
    }

    render() {

        let sockets = this.props.socketArr.map((socketObj, idx) => {
            return <TRow key={idx} socketId={socketObj.socketId} searchValue={socketObj.searchValue} />
        })


        return (
            this.props.show ?

                <div className="Modal">

                    <h4><b>Stream control</b> <IoCloseCircled color="#d6004a" size="30" class="CloseBtn" onClick={this.props.clicked} /></h4>
                    <hr />

                    <table className="table table-hover">
                        <tbody>
                           {sockets}
                        </tbody>
                    </table>

                </div> : null
        )
    }
}


const mapStateToProps = state => {

    console.log("*******************",state.socketArr);
    return {
        socketArr: state.socketArr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewSearchSocket: (newSearchSocketObj) => dispatch({ type: actionTypes.LOG_NEW_SEARCH_SOCKET, newSearchSocketObj: newSearchSocketObj})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
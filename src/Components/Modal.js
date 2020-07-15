import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {

    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
        const { ModalBody, ModalId, ModalHeader } = this.props;

        return (

            <div
                ref={Modal => {
                    this.Modal = Modal;
                }}
                id={ModalId}
                className="modal"
            >
                <div className="modal-content">
                    <button style={{float:"right"}} className="modal-close btn red darken-4">X</button>
                    <h4>{ModalHeader}</h4>
                    <div style={{margin:"1%"}}>
                        {ModalBody}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
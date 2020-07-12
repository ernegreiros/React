import React, { Component } from 'react';

const ModalHeader = props => {
    return (
        <div className="modal-header">
            <h4 className="modal-title">{props.modalHeader}</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
    );
}

const ModalBody = props => {
    return (
        <div className="modal-body">
            {props.modalBody}
        </div>
    );
}

const ModalFooter = props => {
    return (
        <div className="modal-footer">
            {props.modalFooter}
        </div>
    );
}

class Modal extends Component {

    render() {
        const {modalHeader, modalBody, modalFooter, modalId} = this.props;

        return (
            <div className="modal fade" data-backdrop="static" data-keyboard="false" id={modalId}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <ModalHeader modalHeader={modalHeader}/>
                        <ModalBody modalBody={modalBody}/>
                        <ModalFooter modalFooter={modalFooter}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
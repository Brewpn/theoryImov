import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { showModal, hideModal } from '../actions'
import { Modal } from 'react-bootstrap'

export default class EmpiricalFunction extends Component {
    constructor (props) {
        super(props);

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
    }

    handleShowModal() {
        this.props.dispatch(showModal())
    }

    handleHideModal() {
        this.props.dispatch(hideModal())
    }

    render () {
        const { showModal, receivedObject } = this.props;

        return (
            <div>
                <button className="button-with-border butt-login"
                        onClick={this.handleShowModal}>
                    Show Empirical Function
                </button>
                <Modal
                    show={showModal}
                    onHide={this.handleHideModal}
                    bsSize="small"
                    aria-labelledby="contained-modal-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Empirical Function Values</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            receivedObject.EmpiricalFunctionValues.map((value, index) => <div key={index}>{value}</div>)

                        }
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

EmpiricalFunction.propTypes = {
    showModal: PropTypes.bool.isRequired,
    receivedObject: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};
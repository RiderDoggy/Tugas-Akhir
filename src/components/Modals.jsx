import React from "react"
import { Modal, Button, Row, Col } from "react-bootstrap"
import '../style/modals.css'

const Modals = (p) =>{
    return(
        <Modal centered dialogClassName="modal-70w" show={p.isShow} onHide={p.handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{p.data.name}</Modal.Title>
                </Modal.Header>
                <Row className="align-items-center justify-content-center modalsContent">
                    <Col md="4" sm="6">
                        <img className="modalsImage fluid" src={p.data.image} alt="" />
                    </Col>
                    <Col md="8" sm="6">
                        <Modal.Body className="modalsDescription" dangerouslySetInnerHTML={{__html:p.data.description}}>
                            
                        </Modal.Body>
                    </Col>
                </Row>
                <Modal.Footer>
                    <Button variant="secondary" onClick={p.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default Modals
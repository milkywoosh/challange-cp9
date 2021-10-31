import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RefreshNotif = (props) => {
    
    const refreshButton = <Button className="btn btn-primary btn-sm"> REFRESH</Button>
    
    return (
        <>
            <div>
                <Modal show={props.show} onHide={props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Refresh Notification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please click {refreshButton} to restart the Game</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={props.onClick}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default RefreshNotif;
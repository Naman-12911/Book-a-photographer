import React,{useState} from 'react'
import {Button, Modal} from "react-bootstrap";

export default function Book_now() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
          <Modal.Header >
            <Modal.Title><h3>Confirmation!</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
            <h5>Enter your Details</h5>
          <br />
            <div>Contact Number</div>
            <input
              type="text"
              className="form-control"
              name="contactnumber"
              placeholder='*Contact number' required
              
            />
            <br />
            <div>Near by</div>
          <input
            type="text"
            className="form-control"
            name="near_by"
            placeholder='*Near by' required
            
          />
          <br />
            
            <div>Address</div>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder='*Address' required
            />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
        </div>
    )
}

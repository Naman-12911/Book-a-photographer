import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ai from "../Apis";
import "../../css/Single_photo.css";
import {Button, Modal} from "react-bootstrap";
function Single_photo() {
  const [photo, setPhoto] = useState([]);
  const parms = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await ai
        .get(`photographer-account/single-photographer/${parms.id}`)
        .then((res) => {
          console.log(res);
          setPhoto(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);
  // for only images
  useEffect(() => {
    async function fetchData() {
      const request = await ai
        .get("images/")
        .then((res) => {
          console.log(res);
          setPhoto(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);
  // set timeout for the booking the button.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="about-page">
      <div className="info-page">
        <div className="book-now">
          <h3 id="username">Name -</h3>
          <p id="name"> {photo.name}</p>
        </div>
        <br />
        <br />
      </div>
      <br />
      <div className="img-div">
        <div className="row-img">
          <div className="column-img">
            <img src={photo.image1} alt="Naman" />
          </div>
          <div className="column-img">
            <img src={photo.image2} alt="Naman" />
          </div>
          <div className="column-img">
            <img src={photo.image3} alt="Naman" />
          </div>
          <div className="column-img">
            <img src={photo.image4} alt="Naman" />
          </div>
          <div className="column-img">
            <img src={photo.image5} alt="Naman" />
          </div>
        </div>
      </div>
      <br />
      <div className="info">
        {/* Enter your fields of spelcization */}
        <h2>Specialization</h2>
        <p id="specialization">{photo.speaclization}</p>
        <br />

        {/* Enter your work expericed */}
        <h3>Work Experience</h3>
        <p>{photo.work_experience}</p>
        <br />

        {/* Enter your Awards */}
        <h3>Awards</h3>
        <p> {photo.awards}</p>
      </div>
      <br />
      <div className="row-page">
        <div className="column-page">
          <h5>Perfered locations - </h5>

          <p>{photo.preffred_location}</p>
        </div>
        <div className="column-page">
          <h5>Price</h5>
          <p id="price">₹ {photo.price} per hour</p>
        </div>
        {/* <div className="elfsight-app-76967bfc-e956-4551-9f87-28c3c34fbd58"></div> */}
      </div>
      {/* <div className="book-now-button"> */}
       {/* Button trigger modal  */}
      {/* <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
       Book Now
      </Button>
 {/* Modal  */}
{/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <Button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</Button>
        <Button type="button" class="btn btn-primary">Confirm</Button>
      </div>
    </div>
  </div>
  </div> */}

        <Button className="nextButton" onClick={handleShow} >
          Book Now
        </Button>
         <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
          <Modal.Header >
            <Modal.Title><h3>Confirmation!</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
            <h5>Enter your Details</h5>
          <br />
           <div>Name</div>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder='*Name' required
            
          />
          <br />
            <div>Contact Number</div>
            <input
              type="text"
              className="form-control"
              name="contactnumber"
              placeholder='*Contact number' required
              
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
              Order
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      {/* </div> */}
    </div>
    
  );
}

export default Single_photo;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ai from "../Apis";
import "../../css/Single_photo.css";
import {Button, Modal} from "react-bootstrap";
import MainNavbar from "./MainNavbar";
function Single_photo() {
  const [photo, setPhoto] = useState([]);
  const parms = useParams();
// fetch the data for the photographer
  useEffect(() => {
    async function fetchData() {
      const request = await ai
        .get(`photographer-account/single-photographer/${parms.id}`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})
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
  }, [parms.id]);
  
  // for modal to code ..

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // post request for modal data to booking the photographer finally.
  const url = "customer/booking_id/"
  const [data, setData] = useState({
    address: "",
    near_by: "",
    phone_number: "",
  });
  function sumbit(e) {
    e.preventDefault();
    ai.post(url, {
      address: data.address,
      near_by: data.near_by,
      phone_number: parseInt(data.phone_number),
    },{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}).then((res) => {
      console.log(res.data);
      setData({
        address: "",
        near_by: "",
        phone_number: "",
      });
      //props.showAlert("Your problem has been sumbitted!", "success");
      alert("your booking has been done");
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  
  return (
    <>
    <MainNavbar/>
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
          {/* <div className="column-img">
            <img src={photo.image5} alt="Naman" />
          </div> */}
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

       {/* Confirmation for the booking the photographer */}

        <Button className="nextButton" onClick={handleShow} >
          Book Now
        </Button>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <Modal show={show} onHide={handleClose} bd-example-modal-lg>
            <form className="form-container" onSubmit={(e) => sumbit(e)}>
              <Modal.Header >

                <Modal.Title><h3>Confirmation!</h3></Modal.Title>
              </Modal.Header >
              <Modal.Body >
            
                <h5>Enter your Details</h5>
              <br />
                <div>Contact Number</div>
                <input
                  type="number"
                  className="form-control"
                  name="phone_number"
                  placeholder='*Contact number'
                  onChange={(e) => handle(e)}
                  id="phone_number"
                  value={data.phone_number}
                  required

                />
                <br />
                <div>Near by</div>
              <input
                type="text"
                className="form-control"
                name="near_by"
                placeholder='*Near by' required
                id="near_by"
                onChange={(e) => handle(e)}
                value={data.near_by}

              />
              <br />

                <div>Address</div>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder='*Address'
                  id="address"
                  required
                  onChange={(e) => handle(e)}
                  value={data.address}
                />
              
              </Modal.Body>
              
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <button className="Submit my-1" type="Submit">
                Book Now
              </button>
              </Modal.Footer>
              </form>

            </Modal>
            </div>
    </div>
    </>

  );
}

export default Single_photo;
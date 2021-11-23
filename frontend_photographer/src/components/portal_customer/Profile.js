import React, { useState} from "react";
import "../../css/Profile.css";
import {Button, Modal} from "react-bootstrap";
function Profile() {
   // set timeout for the booking the button.
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
  return (
    <>
      <div className="wrapper_profile  mt-sm-5 my-5">
    <h4 className="pb-4 border-bottom">My Profile</h4>
    
    {/* the below code for user profile and name (if we want) */}
    {/* <div className="d-flex align-items-start py-3 border-bottom"> <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img_profile" alt="" />
        <div className="pl-sm-4 pl-2" id="img-section"> <b>Profile Photo</b>
            <p id='para'>Accepted file type .png. Less than 1MB</p> <button className="btn button border" id='profile_btn'><b>Upload</b></button>
        </div>
    </div> */}
    <div className="py-2">
        <div className="row py-2">
            <div className="col-md-6"> 
            <div className='profile_label' for="firstname">First Name</div> 
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <div className='profile_label' for="lastname">Last Name</div> 
            
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-6"> 
            <div className='profile_label'  for="email">Email Address</div> 
           
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <div className='profile_label'  for="phone">Phone Number</div> 
            
            </div>
        </div>
        </div>

        
      <Button className="nextButton" onClick={handleShow} >
      &#128393; Edit
        </Button>
         <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
          <Modal.Header >
            <Modal.Title><h3 >Edit &#9998;</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
          <div className="py-2">
            <div className="row py-2">
            <div className="col-md-6"> 
            <label className='profile_label' for="firstname">First Name</label> 
            <input 
            type="text" 
            className="bg-light form-control" 
            placeholder="Name"/> 
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <label className='profile_label' for="lastname">Last Name</label> 
            <input 
            type="text" 
            className="bg-light form-control" 
            placeholder="Last"/> 
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-6"> 
            <label className='profile_label'  for="email">Email Address</label> 
            <input type="text" 
            className="bg-light form-control" 
            placeholder="Email"/> 
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <label className='profile_label'  for="phone">Phone Number</label> 
            <input type="tel" 
            className="bg-light form-control" 
            placeholder="Phone Number"/> 
            </div>
        </div>
        </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary"  type="submit">
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
  </div>
    </>
  );
}

export default Profile;

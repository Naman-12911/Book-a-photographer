import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import '../../css/photo_navbar.css';

function Photoprofile(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

{/* Photogharper profile settings  */}
<div className="photo-container">


<div className="main_content_photo">
        <div className="profile_header">MY PROFILE</div>
        <div className="info">
        <div class="container rounded bg-white mt-3 mb-4">
    <div class="row">
        <div class="col-md-5 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><span class="font-weight-bold"><h1>User Name</h1></span><span class="text-black-50">User@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-7 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">First Name</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="first name" 
                        value=""/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Surname</label>
                        <input type="text" 
                        class="form-control" 
                        value="" 
                        placeholder="surname"/>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Mobile Number</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter phone number" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Address Line </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter address line " 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Pincode</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Enter Pincode" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Email ID</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter email id" 
                        value=""/>
                    </div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleShow}>Edit Profile</button>
                
                </div>
            </div>
        </div>
    </div>
</div>
         
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
          <Modal.Header >
            <Modal.Title><h3 >Edit &#9998;</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
          <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">First Name</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="first name" 
                        value=""/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Surname</label>
                        <input type="text" 
                        class="form-control" 
                        value="" 
                        placeholder="surname"/>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Mobile Number</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter phone number" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Address Line </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter address line " 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Pincode</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Enter Pincode" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Email ID</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter email id" 
                        value=""/>
                    </div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
        </div>  
        </div>
    </div>
    </div>
{/* 
      <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-5 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><span class="font-weight-bold"><h1>User Name</h1></span><span class="text-black-50">User@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">First Name</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="first name" 
                        value=""/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Surname</label>
                        <input type="text" 
                        class="form-control" 
                        value="" 
                        placeholder="surname"/>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Mobile Number</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter phone number" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Address Line </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter address line " 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Pincode</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Enter Pincode" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Email ID</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter email id" 
                        value=""/>
                    </div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleShow}>Edit Profile</button>
                
                </div>
            </div>
        </div>
    </div>
</div>
         
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
          <Modal.Header >
            <Modal.Title><h3 >Edit &#9998;</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
          <div class="row mt-2">
                    <div class="col-md-6">
                        <label class="labels">First Name</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="first name" 
                        value=""/>
                    </div>
                    <div class="col-md-6">
                        <label class="labels">Surname</label>
                        <input type="text" 
                        class="form-control" 
                        value="" 
                        placeholder="surname"/>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Mobile Number</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter phone number" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Address Line </label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter address line " 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Pincode</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Enter Pincode" 
                        value=""/>
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Email ID</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="enter email id" 
                        value=""/>
                    </div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
        </div>  */}

        </>
    );
}
export default Photoprofile;
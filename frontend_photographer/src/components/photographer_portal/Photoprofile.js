import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import '../../css/photo_navbar.css';

function Photoprofile(){

    // perloadedValue
    const [data, setData] = useState({
        first_name: "faizan",
        last_name: "ahmad",
        phone_no: "9876543210",
        address:"xyz",
        email:"123@gmail.com",
        Specialization:"Wedding ",
        Experience:"3years"

      });



// for edit button

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
        
        <div class=" border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div> <hr />
                                        <div class="row mt-5">
                                            <div class="col-md-6">
                                                <label><h6>First Name</h6></label>
                                            </div> 
                                            <div class="col-md-6">
                                                <p>{data.first_name}</p>
                                            </div> 
                                        </div> 
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label><h6>Last Name</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.last_name}</p>
                                            </div>
                                        </div> 
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label> <h6>Email</h6>  </label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label><h6>Phone</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.phone_no}</p>
                                            </div>
                                        </div>
        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label><h6>Specialization</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.Specialization}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label><h6>Work Experience</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.Experience}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label><h6>Images</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input id="file-upload1" type="file"/></p>
                                                <p><input id="file-upload1" type="file"/></p>
                                                <p><input id="file-upload1" type="file"/></p>
                                                <p><input id="file-upload1" type="file"/></p>
                                            </div>
                                        </div>
    
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleShow}>Edit Profile</button>
                
                </div> 
            </div>
        </div>
    </div>
</div>
         
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
        <form className="form-container" >
          <Modal.Header >
            <Modal.Title><h3 >Edit &#9998;</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
          <div class="row mt-2">
          <div class="row p-3">
                                            <div class="col-md-6">
                                                <label><h6>First Name</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                            <input 
                                            type="text" 
                                            className=" form-control" 
                                            placeholder="Name"
                                            id="first_name"
                                            // onChange={(e) => handle(e)}
                                            value={data.first_name}/>
                                            </div>
                                        </div> <br />
                                        <div class="row p-3">
                                            <div class="col-md-6">
                                                <label><h6>Last Name</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                            <input 
                                                type="text" 
                                                className=" form-control" 
                                                placeholder="Last"  
                                                id="last_name"
                                                // onChange={(e) => handle(e)}
                                                value={data.last_name}
                                                />
                                            </div>
                                        </div> <br />
                                        <div class="row p-3">
                                            <div class="col-md-6">
                                                <label><h6>Email</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                            <input 
                                                type="text" 
                                                className=" form-control" 
                                                placeholder="Last"  
                                                id="last_name"
                                                // onChange={(e) => handle(e)}
                                                value={data.email}
                                                />
                                            </div>
                                        </div> <br/>
                                        <div class="row p-3">
                                            <div class="col-md-6">
                                                <label><h6>Phone</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                            <input 
                                                type="text" 
                                                className=" form-control" 
                                                placeholder="Last"  
                                                id="last_name"
                                                // onChange={(e) => handle(e)}
                                                value={data.phone_no}
                                                />
                                            </div>
                                        </div> <br/>
                                        <div class="row p-3">
                                            <div class="col-md-6">
                                                <label><h6>Specialization</h6></label>
                                            </div>
                                            <div class="col-md-6">
                                            <input 
                                                type="text" 
                                                className=" form-control" 
                                                placeholder="Last"  
                                                id="last_name"
                                                // onChange={(e) => handle(e)}
                                                value={data.Specialization}
                                                />
                                            </div>
                                        </div> 
                                        <div class="row p-3">
                                            <div class="col-md-6">
                                                <label><h6>Work Experience</h6></label>
                                            </div> 
                                            <div class="col-md-6 ">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Last"  
                                                id="last_name"
                                                // onChange={(e) => handle(e)}
                                                value={data.Experience}
                                                />
                                            </div>
                                        </div>

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
          </form>
        </Modal>
        </div>  
        </div>
    </div>
    </div>


        </>
    );
}
export default Photoprofile;
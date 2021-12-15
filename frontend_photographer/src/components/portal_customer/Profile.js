import React, { useState,useEffect} from "react";
import "../../css/Profile.css";
import {Button, Modal} from "react-bootstrap";
import MainNavbar from "./MainNavbar";
import ai from '../Apis'
function Profile() {
   // set timeout for the booking the button.
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  // get the user details 
  const [Profile_data, setProfile_data] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = ai
        .get("account/profile",{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})
        .then((res) => {
          console.log(res);
          setProfile_data(res.data);
          // set data for the prefilled data
          setData({
            first_name: res.data.first_name,
            last_name:res.data.last_name,
            email: res.data.email,
            phone_no:res.data.phone_no,
          })
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
   
  }, []);

  // update request.
  const url = "account/update-profile/"
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone_no: "",
    email:"",
  });
  function sumbit(e) {
    e.preventDefault();
    ai.put(url,{
      first_name: data.first_name,
      last_name: data.last_name,
      phone_no: parseInt(data.phone_no),
      email:data.email,
    },{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}} ).then((res) => {
      console.log(res.data);
      setData({
        first_name: "",
        last_name: "",
        phone_no: "",
        email:"",
      });
      //props.showAlert("Your problem has been sumbitted!", "success");
      alert("your profile has been updated");
    });
  }
    function handle(e) {
      const newdata = { ...data };
      newdata[e.target.id] = e.target.value;
      setData(newdata);
      console.log(newdata);
      
    }  
    console.log(data)
  return (
    <>
    <MainNavbar/>
      <div className="wrapper_profile  mt-sm-5 my-5">
    <h4 className="pb-4 border-bottom">My Profile</h4>
    <div className="py-2">
        <div className="row py-2">
            <div className="col-md-6"> 
            <div className='profile_label' htmlFor="firstname">{Profile_data.first_name}</div> 
            </div>
            <div className="col-md-6"> 
            <div className='profile_label' htmlFor="lastname">{Profile_data.last_name}</div> 
            
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-6"> 
            <div className='profile_label '  htmlFor="email">{Profile_data.email}</div> 
           
            </div>
            <div className="col-md-6 my-6  "> 
            <div className='profile_label mx-5'  htmlFor="phone">{Profile_data.phone_no}</div> 
            
            </div>
        </div>
        </div>
        
      <Button className="nextButton" onClick={handleShow} >
      &#128393; Edit
        </Button>
        {/* form to edit the details of the profile */}
         <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
        <form className="form-container" onSubmit={(e) => sumbit(e)}>
          <Modal.Header >
            <Modal.Title><h3 >Edit &#9998;</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
          <div className="py-2">
            <div className="row py-2">
            <div className="col-md-6"> 
            <label className='profile_label' htmlFor="firstname">First Name</label> 
            <input 
            type="text" 
            className="bg-light form-control" 
            placeholder="Name"
            id="first_name"
            onChange={(e) => handle(e)}
            value={data.first_name}/> 
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <label className='profile_label' htmlFor="lastname">Last Name</label> 
            <input 
            type="text" 
            className="bg-light form-control" 
            placeholder="Last"  
            id="last_name"
            onChange={(e) => handle(e)}
            value={data.last_name}
            /> 
            </div>
        </div>
        <div className="row py-2">
            <div className="col-md-6"> 
            <label className='profile_label'  htmlFor="email">Email Address</label> 
            <input type="text" 
            className="bg-light form-control" 
            placeholder="Email"
            id="email"
            onChange={(e) => handle(e)}
            value={data.email} /> 
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <label className='profile_label'  htmlFor="phone">Phone Number</label> 
            <input type="tel" 
            className="bg-light form-control" 
            placeholder="Phone Number"  
            id="phone_no"
            onChange={(e) => handle(e)}
            value={data.phone_no}/> 
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
          </form>
        </Modal>
        </div>
  </div>
    </>
  );
}

export default Profile;

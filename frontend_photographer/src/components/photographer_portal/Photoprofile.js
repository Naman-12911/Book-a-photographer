import React, {useState,useEffect} from "react";
import {Button, Modal} from "react-bootstrap";
import '../../css/photo_navbar.css';
import ai from "../Apis"
import { useParams } from "react-router-dom";
function Photoprofile(){
    // get request for the photographer
  const [photo, setPhoto] = useState([]);
  const parms = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await ai
        .get(`api/img/${parms.id}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})
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
      const url = 'api/img/';
      const [data, setData] = useState({
        name: "",
        email: "",
        phone_number: "",
        speaclization:"",
        work_experience:"",
        awards:"",
        company_colaboration:"",
        preffred_location :"",
        price:"",
        // image1:"",
        // image2:"",
        // image3:"",
        // image4:"",
        // image5:"",

      });
      function sumbit(e) {
        e.preventDefault();
        ai.post(url, {
          name: data.name,
          email: data.email,
          phone_number: parseInt(data.phone_number),
          speaclization: data.speaclization,
          work_experience:data.work_experience,
          awards:data.awards,
          company_colaboration:data.company_colaboration,
          preffred_location :data.preffred_location,
          price:data.price,
        //   image1:data.image1,
        //   image2:data.image1,
        //   image3:data.image1,
        //   image4:data.image1,
        //   image5:data.image1,
        },{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}).then((res) => {
          console.log(res.data);
          setData({
            name: "",
            email: "",
            phone_number: "",
            speaclization:"",
            work_experience:"",
            awards:"",
            company_colaboration:"",
            preffred_location :"",
            price:"",
            // image1:"",
            // image2:"",
            // image3:"",
            // image4:"",
            // image5:"",

            
          });
          //props.showAlert("Your problem has been sumbitted!", "success");
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
          localStorage.setItem("phone_number", data.phone_number);
          localStorage.setItem("work_experience", data.work_experience);
          localStorage.setItem("speaclization", data.speaclization);
          localStorage.setItem("awards", data.awards);
          localStorage.setItem("company_colaborations", data.company_colaboration);
          localStorage.setItem("preffred_location", data.preffred_location);
          localStorage.setItem("price", data.price);



          alert("your form is sumbited");
        });
      }
      function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
      }


// for edit button

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

        

{/* Photogharper profile settings  */}
<div className="photo-container "id="phty">
<div className="main_content_photo">
        <div className="profile_header">MY PROFILE</div> 
        <div className="info">
        <div className="container rounded bg-white mt-3 mb-4">
    <div className="row">
        
        <div className=" border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div> <hr />
                                        <div className="row mt-5">
                                            <div className="col-md-6">
                                                <label><h6>First Name</h6></label>
                                            </div> 
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("name")}</p>
                                            </div> 
                                        </div> 
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label> <h6>Email</h6>  </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("email")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>Phone</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("phone_number")}</p>
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>Specialization</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("speaclization")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>Work Experience</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("work_experience")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>awards</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("awards")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>Company Colaborations</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("company_colaborations")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>Preffred Location</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("preffred_location")}</p>
                                            </div>
                                        </div> <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>price</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{localStorage.getItem("price")}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label><h6>Images</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                                <p><input id="file-upload1" type="file"/></p>
                                                <p><input id="file-upload1" type="file"/></p>
                                                <p><input id="file-upload1" type="file"/></p>
                                                <p><input id="file-upload1" type="file"/></p>
                                            </div>
                                        </div>
    
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleShow}>Build Profile</button>
                
                </div> 
            </div>
        </div>
    </div>
</div>
         
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <Modal show={show} onHide={handleClose} bd-example-modal-lg>
        <form className="form-container"  onSubmit={(e) => sumbit(e)}>
          <Modal.Header >
            <Modal.Title><h3 >Edit &#9998;</h3></Modal.Title>
          </Modal.Header >
          <Modal.Body >
          <div className="row mt-2">
          <div className="row p-3">
             <div className="col-md-6">
                <label><h6>Name</h6></label>
                  </div>
                                            <div className="col-md-6">
                                            <input 
                                            type="text" 
                                            className=" form-control" 
                                            placeholder="Name"
                                            id="name"
                                            onChange={(e) => handle(e)}
                                            value={data.name}/>
                                            </div>
                                        </div> <br />
                                         
                                        <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>Email</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                            <input 
                                                type="text" 
                                                className=" form-control" 
                                                placeholder="Email"  
                                                id="email"
                                                onChange={(e) => handle(e)}
                                                value={data.email}
                                                />
                                            </div>
                                        </div> <br/>
                                        <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>Phone</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                            <input 
                                                type="number" 
                                                className=" form-control" 
                                                placeholder="phone_number"  
                                                id="phone_number"
                                                onChange={(e) => handle(e)}
                                                value={data.phone_number}
                                                />
                                            </div>
                                        </div> <br/>
                                        <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>Specialization</h6></label>
                                            </div>
                                            <div className="col-md-6">
                                            <input 
                                                type="text" 
                                                className=" form-control" 
                                                placeholder="Specialization"  
                                                id="speaclization"
                                                onChange={(e) => handle(e)}
                                                value={data.speaclization}
                                                />
                                            </div>
                                        </div> 
                                        <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>Work Experience</h6></label>
                                            </div> 
                                            <div className="col-md-6 ">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Work Experience"  
                                                id="work_experience"
                                                onChange={(e) => handle(e)}
                                                value={data.work_experience}
                                                />
                                            </div>
                                        </div>
                                        <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6> awards</h6></label>
                                            </div> 
                                            <div className="col-md-6 ">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="awards"  
                                                id="awards"
                                                onChange={(e) => handle(e)}
                                                value={data.awards}
                                                />
                                            </div>
                                        </div>  <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>company Colaboration</h6></label>
                                            </div> 
                                            <div className="col-md-6 ">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="company Colaboration"  
                                                id="company_colaboration"
                                                onChange={(e) => handle(e)}
                                                value={data.company_colaboration}
                                                />
                                            </div>
                                        </div>  <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>preffred Location</h6></label>
                                            </div> 
                                            <div className="col-md-6 ">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="preffred Location"  
                                                id="preffred_location"
                                                onChange={(e) => handle(e)}
                                                value={data.preffred_location}
                                                />
                                            </div>
                                        </div>
                                        <div className="row p-3">
                                            <div className="col-md-6">
                                                <label><h6>price</h6></label>
                                            </div> 
                                            <div className="col-md-6 ">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Price"  
                                                    id="price"
                                                    onChange={(e) => handle(e)}
                                                    value={data.price}
                                                />
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <label><h6>Image 1</h6></label>
                                            </div> 
                                                <p><input id="image1" type="file"  
                                                    onChange={(e) => handle(e)}
                                                    value={data.image1}
                                                /></p>
                                            <div className="col-md-6">
                                                <label><h6>Image 2</h6></label>
                                            </div> 
                                                <p><input id="image2" type="file"
                                                 onChange={(e) => handle(e)}
                                                 value={data.iamge2}
                                                /></p>
                                            <div className="col-md-6">
                                                <label><h6>Image 3</h6></label>
                                            </div> 
                                                <p><input id="image3" type="file"
                                                 onChange={(e) => handle(e)}
                                                 value={data.image3}
                                                /></p>
                                            <div className="col-md-6">
                                                <label><h6>imge 4</h6></label>
                                            </div> 
                                                <p><input id="image4" type="file" 
                                                 onChange={(e) => handle(e)}
                                                 value={data.image4}
                                                /></p>
                                            
                                            <div className="col-md-6">
                                                <label><h6>imge 5</h6></label>
                                            </div> 
                                            <p><input id="image5" type="file" 
                                             onChange={(e) => handle(e)}
                                             value={data.image5}
                                            /></p>
                                            
                                        </div>
                </div>
                 
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose} type="sumbit">
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
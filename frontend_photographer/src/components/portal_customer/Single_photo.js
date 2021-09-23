import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Container, Row, Col, Image} from "react-bootstrap";
import "../../css/Single_photo.css";


function Single_photo() {
  const [photo, setPhoto] = useState([]);
  const parms = useParams();
  const fetchURL = `http://localhost:8000/top_dest_contact/top-destination/${parms.id}`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(fetchURL)
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

  return <div className='about-page'>
    <div className='info-page'>
      <div className='book-now' >
        <label id='username'>Name</label>
        <input 
        type="text" 
        className="page-username" 
        name="name" 
        id="" /> 
      </div>
      <br />
      <br />
      <div className='book-now-button'>
          <button class="button-info">Book Now</button>
      </div>
    </div>
                <br />
                <div className='img-div'>
                <div class="row-img">
                    <div class="column-img">
                      <img src="Naman Garg.jpeg" alt="Naman" />
                    </div>
                    <div class="column-img">
                      <img src="Naman Garg.jpeg" alt="Naman"/>
                    </div>
                    <div class="column-img">
                      <img src="Naman Garg.jpeg" alt="Naman" />
                    </div>
                    <div class="column-img">
                      <img src="Naman Garg.jpeg" alt="Naman" />
                    </div>
                    <div class="column-img">
                      <img src="Naman Garg.jpeg" alt="Naman" />
                    </div>
                </div>
                </div>
                <br />
                <div className='info'>
                  
              {/* Enter your fields of spelcization */}
                <div>Specialization</div>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                placeholder="Enter your fields of specialization" />
                <br />

              {/* Enter your work expericed */}
                <div>Work Experience</div>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1"
                placeholder="Enter your work experience" />
                <br />

              {/* Enter your Awards */}
                <div>Awards</div>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                placeholder="Enter your Awards"/>
            </div>
            <br />
            <div className='row-page'>
              <div className='column-page'>
                <label>Perfered locations</label>
                <br />

                <input 
                className="row-labels" 
                placeholder="location" />
              </div>
              <div className='column-page'>
                <label>Price</label>
                <input 
                className="row-labels" 
                placeholder="Price" />
              </div>
            </div>              
                
    </div>
}

export default Single_photo;

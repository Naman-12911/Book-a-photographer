import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ai from "../Apis";
import "../../css/Single_photo.css";
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
      </div>
      <div className="book-now-button">
        <button className="button-info">Book Now</button>
      </div>
    </div>
  );
}

export default Single_photo;

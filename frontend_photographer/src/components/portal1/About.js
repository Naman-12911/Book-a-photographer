import React from "react";
import photo1 from "../image/photo1.jpg";
import "../../css/about.css";

function About(props) {
  return (
    <>
      <div className="developer">
        <img
          className="devloper-img"
          src={props.photo}
          alt="img is loading"
        ></img>
        <div className="img-member">
          <h5>{props.head}</h5>
          <p>{props.para}</p> <a href={props.linkdin}> linkedin profile</a>
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import "../../css/about.css";
function About(props) {
  return (
    <>
      <div className="developer">
        <table >
          <tbody>
              <tr>
                <td>
                  <img className="devloper-img"
                  src={props.photo}
                  alt="img is loading" />
                </td>
                <td>
                  <div className="img-member">
                  <h5>{props.head}</h5>
                  <p>{props.para}</p> <a href={props.linkdin}><span className="iconify" data-icon="fa:linkedin"></span>linkedIn Profile</a>
                  </div> 
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;
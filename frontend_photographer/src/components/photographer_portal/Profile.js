import React from "react";
import { Image } from "react-bootstrap";
import "../../css/Profile.css";
function Profile() {
  return (
    <>
      <div className="main-profile">
        <div className="profileCover">
          {/* cover img */}
          <div className="CoverImg">
            <input type="file" id="file-1" accept="image/*" />
            <label for="file-1" id="file-1-preview">
              <img className="cover-img" src="https://bit.ly/3ubuq5o" alt="" />
            </label>
          </div>
          {/* user img */}
          <div className="userimg">
            <input type="file" id="file-1" accept="image/*" />
            <label for="file-1" id="file-1-preview">
              <img className="img" src="https://bit.ly/3ubuq5o" alt="" />
            </label>
          </div>
        </div>
        <div className="info">
          <div>Name</div>
          <input
            type="text"
            className="form-control"
            name="name"
            id="exampleInputname"
          />
          <br />
          <div>
            <div>Contact Number</div>
            <input
              type="text"
              className="form-control"
              name="contactnumber"
              id="exampleInputnumber"
            />
            <br />
            <div>Email address</div>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
            />
            <br />
          </div>
        </div>
        <div className="info">
          {/* Enter your fields of spelcization */}
          <div>Enter your fields of specialization</div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your fields of specialization"
          />
          <br />
          {/* Enter your work expericed */}
          <div>Enter your work experience</div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your work experience"
          />
          <br />
          {/* Enter your Awards */}
          <div>Enter your Awards</div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your Awards"
          />
        </div>
        <br />
        <div align="center">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;

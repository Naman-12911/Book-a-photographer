import React from "react";
import "./index.css";
import axios from "axios";
function Contact() {
  return (
    <>
      <nav className="feedback">
        <div className="talk">
          <h2>Let's Talk</h2>
          <p className="talk-text">
            Is there a challenge your organization or company needs help
            solving? We’d love to discuss it.
          </p>
        </div>
        <div className="feedback-container">
          <form className="form-container">
            <div>
              <div className="Name">
                {/*<label className="label"> Name </label>*/}
                <input
                  className="input-feild"
                  type="text"
                  placeholder="* Name"
                  required
                />
              </div>

              <div className="E-mail">
                {/*  <label className="label"> E-mail </label>*/}
                <input
                  className="input-feild"
                  type="text"
                  placeholder="* Email"
                  required
                />
              </div>
              <div className="Phone No.">
                {/*<label className="label"> Phone No.</label>*/}
                <input
                  className="input-feild"
                  type="text"
                  placeholder="* phone Number"
                  required
                />
              </div>
              <div className="Company">
                {/*<label className="label"> Company </label> */}
                <input
                  className="input-feild"
                  type="text"
                  placeholder="* Tell us something your problem"
                  required
                />
              </div>
              <button className="Submit" type="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Contact;

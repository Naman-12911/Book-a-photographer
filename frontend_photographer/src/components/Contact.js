import React from "react";

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
                <label className="label"> Name </label>
                <input className="input-feild" type="text" />
              </div>
              <div className="Company">
                <label className="label"> Company </label>
                <input className="input-feild" type="text" />
              </div>
              <div className="E-mail">
                <label className="label"> E-mail </label>
                <input className="input-feild" type="text" />
              </div>
              <div className="Phone No.">
                <label className="label"> Phone No.</label>
                <input className="input-feild" type="text" />
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

import React from "react";
import naman from "../image/Naman Garg.jpeg";
import { Link } from "react-router-dom";
function Photographer_card() {
  return (
    <>
    
      <div className="container my-3">
        <div className="card mb-3" style={{ maxWidth: "640px;" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={naman}
                className="img-fluid rounded-start"
                style={{ height: "100px", width: "500px" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photographer_card;

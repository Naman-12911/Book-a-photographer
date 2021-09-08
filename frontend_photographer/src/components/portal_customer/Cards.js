import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Cards() {
  // fetch all the blogs using axios library.
  const [blog, setBlog] = useState([]);
  const fetchURL = "http://localhost:8000/top_dest_contact/top-destination/";
  useEffect(() => {
    async function fetchData() {
      const request = axios
        .get(fetchURL)
        .then((res) => {
          console.log(res);
          setBlog(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            {blog.map((blog) => (
              <div className="col-md-6 col-lg-4" key={blog.id}>
                <div className="card mx-30">
                  <img
                    src={blog.tumbnail}
                    className="card-img-top"
                    alt="img is loading"
                    style={{ height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.place}</h5>
                    <h6 className="card-text">
                      {" "}
                      popular For {blog.popular_for} Photo shoot
                    </h6>
                    <p className="card-text">
                      {blog.decription.slice(0, 100)}...
                    </p>
                    <Link
                      to={`/blog/${blog.slug}`}
                      target="_blank"
                      className="btn btn-dark"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Cards;

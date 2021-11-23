import React, { useState, useEffect } from "react";
import ai from "../Apis";
import { Link } from "react-router-dom";
function Cards() {
  // fetch all the blogs using axios library.
  const [blog, setBlog] = useState([]);
  const [current, setCurrent] = useState(1);
  // const [pageSize] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const request = ai
        .get("top_dest_contact/top-destination/")
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
  // pagination
  console.log({blog})

  let preClick = async () => {
    // privious page
    async function fetchData() {
      const request = ai
        .get(`top_dest_contact/top-destination/?page=${current - 1}`)
        .then((res) => {
          setBlog(res.data);
        })
        .catch((err) => {});
      return request;
    }
    fetchData();
    setCurrent(current - 1);
  };
  let nextClick = async () => {
    // next page

    async function fetchData() {
      const request = ai
        .get(`top_dest_contact/top-destination/?page=${current + 1}&pageSize`)
        .then((res) => {
          setBlog(res.data);
        })
        .catch((err) => {});
      return request;
    }
    fetchData();
    setCurrent(current + 1);
  };

  console.log("next");


  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            {blog?.results?.map((blog) => (
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
                      {/* {blog.decription.slice(0, 100)}... */}
                      {/* this div tag for to convert html to text  */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog.decription.slice(0, 100)
                        }}>
                    </div>
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
                <br/>
              </div>
            ))}
          </div>
          <br />
          <br/>
        </div>
      </div>
      {/* <Pagination /> */}
      <div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={current <= 1}
            className="btn btn-dark mx-5 my-3"
            onClick={preClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={current >= 2}
            type="button"
            className="btn btn-dark mx-5 my-3"
            onClick={nextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;

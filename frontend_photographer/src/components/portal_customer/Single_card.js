import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function Cards_page() {
  const [blog, setBlog] = useState([]);
  const parms = useParams();
  const fetchURL = `http://localhost:8000/top_dest_contact/top-destination/${parms.slug}`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios
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
    <div class="container my-3">
      <h2 className="blog-post-title">{blog.place}</h2>
      <h6 className="blog-post-meta"> popular for {blog.popular_for} </h6>

      <p>{blog.decription}</p>
      <hr />
    </div>
  );
}

export default Cards_page;

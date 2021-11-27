import React, { useState, useEffect } from "react";
import ai from "../Apis";
import { useParams } from "react-router-dom";
import Main_navbar from "./Main_navbar";
function Cards_page() {
  const [blog, setBlog] = useState([]);
  const parms = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await ai
        .get(`top_dest_contact/top-destination/${parms.slug}`)
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


console.log("next");


  return (
    <>
    <Main_navbar/>
    <div class="container my-3">
   
      <h2 className="blog-post-title">{blog.place}</h2>
      <h6 className="blog-post-meta"> popular for {blog.popular_for} </h6>
      {/* <p id="blogdes">{blog.decription}</p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: blog.decription
        }}>
      </div>
      <hr />
    </div>
    </>
  );
}

export default Cards_page;

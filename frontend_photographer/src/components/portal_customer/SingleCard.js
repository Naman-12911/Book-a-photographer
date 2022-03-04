import React, { useState, useEffect } from "react";
import ai from "../Apis";
import { useParams } from "react-router-dom";
import MainNavbar from "./MainNavbar";
function Cards_page() {
  const [blog, setBlog] = useState([]);
  const parms = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await ai
        .get(`top_dest_contact/top-destination/${parms.slug}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})
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
  }, [parms.slug]);


  return (
    <>
    <MainNavbar/>
    <div className="container my-3">
   
      <h2 className="blog-post-title">{blog.place}</h2>
      <h6 className="blog-post-meta"> popular for {blog.popular_for} </h6>
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

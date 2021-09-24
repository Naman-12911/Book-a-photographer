import React, { useState } from "react";
import ai from "../Apis";
function Pagination() {
  const [current, setCurrent] = useState(1);
  const [blog, setBlog] = useState([]);
  const [per_page] = useState();
  const [totalresult, setTotalresult] = useState(0);
  let preClick = async () => {
    // privious page
  };
  let nextClick = async () => {
    // next page
    async function fetchData() {
      const request = ai
        .get(`top_dest_contact/top-destination/?page=${current + 1}`)
        .then((res) => {
          setBlog(res.data);
        })
        .catch((err) => {});
      return request;
    }
    fetchData();
    setCurrent(current + 1);
  };

  return (
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
          type="button"
          className="btn btn-dark mx-5 my-3"
          onClick={nextClick}
        >
          {" "}
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default Pagination;

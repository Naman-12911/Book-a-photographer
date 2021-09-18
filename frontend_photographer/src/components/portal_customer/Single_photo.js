import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Single_photo() {
  const [photo, setPhoto] = useState([]);
  const parms = useParams();
  const fetchURL = `http://localhost:8000/top_dest_contact/top-destination/${parms.id}`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(fetchURL)
        .then((res) => {
          console.log(res);
          setPhoto(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);

  return <div></div>;
}

export default Single_photo;

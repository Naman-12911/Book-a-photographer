import axios from "axios";

const ai = axios.create({

//  baseURL: " https://photographerhire.herokuapp.com/",
  baseURL: "http://localhost:8000/",
 

});

export default ai;

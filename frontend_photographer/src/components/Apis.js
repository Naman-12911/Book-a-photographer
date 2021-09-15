import axios from "axios";

const ai = axios.create({
  baseURL: "http://localhost:8000/",
});

export default ai;

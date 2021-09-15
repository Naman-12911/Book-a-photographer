import axios from "axios";

const ai = axios.create({
  baseURL: " https://photographerhire.herokuapp.com/",
});

export default ai;

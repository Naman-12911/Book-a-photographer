import axios from "axios";

const ai = axios.create({

<<<<<<< HEAD
 baseURL: " https://photographerhire.herokuapp.com/",
  // baseURL: "http://localhost:8000/",
 
=======
    //baseURL: " https://photographerhire.herokuapp.com/",
    baseURL: "http://localhost:8000/",

>>>>>>> 6bcf5227aae7ba0cced1a85ca8bf917332aec41b

});

export default ai;
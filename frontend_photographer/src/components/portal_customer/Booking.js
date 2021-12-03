import React, { useState, useEffect }  from 'react';
import { useParams } from "react-router-dom";
import booking from "../../css/booking.css";
import ai from "../Apis";

//import Main_navbar from "./Main_navbar";

function Booking() {

    const [photo, setPhoto] = useState([]);
    const parms = useParams();
  // fetch the data for the photographer
    useEffect(() => {
      async function fetchData() {
        const request = await ai
          .get(`photographer-account/single-photographer/${parms.id}`)
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
    }, [parms.id]);
    return (
        <>
        {/* <Main_navbar/> */}
        <div class="booking-main">
            <div class="inner-booking ">
            <div id="main-content" class="bg-white border ">
                <div class="text-uppercase">My recent orders</div>
                <div class="order my-3 bg-light">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="d-flex flex-column justify-content-between order-summary">
                                <div class="d-flex align-items-center">
                                    <div class="text-uppercase">Order #id</div>
                                </div> <br />
                                <div class="fs-8">
                                    <h6 id="username">Name :</h6>
                                    <p id="name"> {photo.name}</p>
                                </div>
                                <h6> Specialization :</h6>
                                    <p id="specialization">{photo.speaclization}</p>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="cancel-main d-sm-flex align-items-sm-start justify-content-sm-between">
                                <div class="cancelbutton btn btn-primary text-uppercase">Cancel</div>
                            </div>
                        </div>
                        <div class="col-lg-10 col-md-10 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1 pt-lg-0 pt-3">
            <div id="cart" class="rounded">
                <div class="d-flex jusitfy-content-between align-items-center pt-2 pb-2 border-bottom">                   
                </div>
                <div class="d-flex align-items-center">
                    <div class="display-5">Subtotal</div>
                    <div class="ml-auto ">&#8377; <p id="price">{photo.price}</p></div>
                </div>
                <div class="d-flex align-items-center py-2 border-bottom">
                    <div class="display-5">Shipping</div>
                    <div class="ml-auto ">&#8377; </div>
                </div>
                <div class="d-flex align-items-center py-2">
                    <div class="display-5" id="total" >Total</div>
                    <div class="ml-auto d-flex">
                        <div class="text-primary text-uppercase px-3">&#x20B9;</div>
                        <div class="font-weight-bold">
                            <p id="price">{photo.price}</p>
                            </div>
                    </div>
                </div>
            </div></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Booking
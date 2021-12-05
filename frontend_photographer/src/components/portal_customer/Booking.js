import React from 'react';
import  "../../css/booking.css";

function Booking() {
    return (
        <>
        <div className="booking-main">
            <div className="inner-booking ">
            <div id="main-content" className="bg-white border ">
                <div className="text-uppercase">My recent orders</div>
                <div className="order my-3 bg-light">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="d-flex flex-column justify-content-between order-summary">
                                <div className="d-flex align-items-center">
                                    <div className="text-uppercase">Order #id</div>
                                </div> <br />
                                <div className="fs-8">
                                    <h6 id="username">Name :</h6>
                                    <p id="name"> Faizan</p>
                                </div>
                                <h6> Specialization :</h6>
                                    <p id="specialization">Wedding photographer</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cancel-main d-sm-flex align-items-sm-start justify-content-sm-between">
                                <div className="cancelbutton btn btn-primary text-uppercase">Cancel</div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1 pt-lg-0 pt-3">
            <div id="cart" className="rounded">
                <div className="d-flex jusitfy-content-between align-items-center pt-2 pb-2 border-bottom">                   
                </div>
                <div className="d-flex align-items-center py-2 border-bottom">
                    <div className="display-5">Arriving in </div>
                    <div className="ml-auto ">3 days</div>
                </div>
                <div className="d-flex align-items-center py-2">
                    <div className="display-5" id="total" >Price</div>
                    <div className="ml-auto d-flex">
                        <div className="text-primary text-uppercase px-3">&#x20B9;</div>
                        <div className="font-weight-bold">
                            <p id="price">10000</p>
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
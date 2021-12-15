import React,{useState,useEffect} from 'react'
import Booking from './Booking'
import ai from "../Apis"
function BookingLopp() {
    const [book, setBook] = useState([])
       // get the bookings of current user
       useEffect(() => {
        async function fetchData() {
          const request = ai
            .get("customer/booking_id/",{ headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
              console.log(res);
              setBook(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
          return request;
        }
        fetchData();
      }, []);
      // pagination
      console.log({book})
    return (
        <div>
             {book.map((book, key) => (
              <Booking book={book} key={key} />
          ))}
          {
            book.length===0 && <h1>You have no Bookings yet.</h1>
          }
        </div>
    )
}

export default BookingLopp

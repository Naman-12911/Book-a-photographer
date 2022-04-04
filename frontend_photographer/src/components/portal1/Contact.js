import React, { useState } from "react";

import "../../css/index.css";
import ai from "../Apis";

function Contact(props) {
    const url = "top_dest_contact/contact/";
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        desc: "",
    });

    function sumbit(e) {
        e.preventDefault();
        ai.post(url, {
            name: data.name,
            email: data.email,
            phone: parseInt(data.phone),
            desc: data.desc,
        }).then((res) => {
            console.log(res.data);
            setData({
                name: "",
                email: "",
                phone: "",
                desc: "",
            });
            //props.showAlert("Your problem has been sumbitted!", "success");
            alert("your form is sumbited");
        });
    }

    function handle(e) {
        const newdata = {...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return ( <
        >
        <
        nav className = "feedback" >
        <
        div className = "talk" >
        <
        h2 > Let 's Talk</h2> <
        p className = "talk-text" >
        Is there a challenge your organization or company needs help solving ? We’ d love to discuss it. <
        /p> <
        /div> <
        div className = "feedback-container" >
        <
        form className = "form-container"
        onSubmit = {
            (e) => sumbit(e) } >
        <
        div >
        <
        div className = "Name" > { /*<label className="label"> Name </label>*/ } <
        input className = "input-feild"
        type = "text"
        placeholder = "* Name"
        required onChange = {
            (e) => handle(e) }
        id = "name"
        value = { data.name }
        /> <
        /div>

        <
        div className = "E-mail" > { /*  <label className="label"> E-mail </label>*/ } <
        input className = "input-feild"
        type = "email"
        placeholder = "* Email"
        required onChange = {
            (e) => handle(e) }
        id = "email"
        value = { data.email }
        /> <
        /div> <
        div className = "Phone No." > { /*<label className="label"> Phone No.</label>*/ } <
        input className = "input-feild"
        type = "number"
        placeholder = "* phone Number"
        required onChange = {
            (e) => handle(e) }
        id = "phone"
        value = { data.phone }
        /> <
        /div> <
        div className = "Company" > { /*<label className="label"> Company </label> */ } <
        input className = "input-feild"
        type = "text"
        placeholder = "* Tell us something your problem"
        required onChange = {
            (e) => handle(e) }
        id = "desc"
        value = { data.desc }
        /> <
        /div> <
        button className = "Submit my-3"
        type = "Submit" >
        Submit <
        /button> <
        /div> <
        /form> <
        /div> <
        /nav> <
        />
    );
}

export default Contact;
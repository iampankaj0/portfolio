import React, { useState } from 'react';
import './contact.css';


const Contact = () => {

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        select_box: "",
        message: ""
    });


    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();

        const { fname, lname, email, phone, select_box, message } = user;

        if (fname && email && phone && select_box && message) {

            const res = await fetch('https://pankaj-contact-form-default-rtdb.firebaseio.com/pankaj-query-form.json',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fname,
                        lname,
                        email,
                        phone,
                        select_box,
                        message
                    })
                }
            )

            if (res) {
                setUser({
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    select_box: "",
                    message: ""
                });

                alert(" Your Message Sent Successfully to PANKAJ YADAV, We'll reply as soon as possible ")
            }
        } else {
            alert("please fill all(*)  fields")
        }

    };



    return (
        <>

            <div className='container form-container'>
                <h2 className='form-head'> contact Form </h2>
                <p className="mb-0">Please fill in your information and we'll contact you shortly...</p>


                <form method='POST' action='' className='contact-form'>
                    <div className="form-row">
                        <div className="col-md-6">
                            <input type="text" name="fname" className="form-control" value={user.fname} onChange={getUserData} placeholder="First Name*" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="lname" className="form-control" value={user.lname} onChange={getUserData} placeholder="Last Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="email" className="form-control" value={user.email} onChange={getUserData} placeholder="Enter Yout Mail Id*" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="phone" className="form-control" value={user.phone} onChange={getUserData} placeholder="Enter Your Mobile Number*" required />
                        </div>
                        <div className="col-md-12">
                            <select name="select_box" id="message" value={user.select_box} onChange={getUserData} className="form-control" required>
                                <option> --Select Your Query--* </option>
                                <option value="Web-Designing">Web Designing</option>
                                <option value="web-Development">Web Development</option>
                                <option value="Manage-Website">Manage Website</option>
                                <option value="FrontEnd-Development">FrontEnd Development</option>
                                <option value="BackEnd-Development">BackEnd Development</option>
                                <option value="Wordpress-Development">Wordpress Development</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <textarea name="message" id="message" className='form-control' rows="5" value={user.message} onChange={getUserData} placeholder='Enter Your Message*'></textarea>
                        </div>
                    </div>

                    <button name='submit' onClick={postData} className='btn submit-button'>Submit</button>

                </form>


            </div>
        </>
    )
};

export default Contact;

import React from 'react';
import './contact.css';


const Contact = () => {
  return (
            <>
                
                <div className='container form-container'>
                    <h2 className='form-head'> contact Form </h2>
                    <p className="mb-0">Please fill in your information and we'll contact you shortly...</p>


                    <form className='contact-form'>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <input type="text" name="fname" class="form-control" placeholder="First Name*" required/>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" name="lname" class="form-control" placeholder="Last Name" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" name="email" class="form-control" placeholder="Enter Yout Mail Id*" required/>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" name="phone" class="form-control" placeholder="Enter Your Mobile Number*" required/>
                                </div>
                                <div class="col-md-12">
                                    <select name="select-box" id="message" class="form-control" required>
                                        <option>Select Your Query</option>
                                        <option value="Web-Designing">Web Designing</option>
                                        <option value="web-Development">Web Development</option>
                                        <option value="Manage-Website">Manage Website</option>
                                        <option value="FrontEnd-Development">FrontEnd Development</option>
                                        <option value="BackEnd-Development">BackEnd Development</option>
                                        <option value="Wordpress-Development">Wordpress Development</option>
                                    </select>
                                </div>
                                <div class="col-md-12">
                                    <textarea name="message" id="message" className='form-control' rows="5" placeholder='Enter Your Message'></textarea>
                                </div>
                            </div>

                            <button className='btn submit-button'>Submit</button>

                    </form>


                </div>
            </>
    )
};

export default Contact;

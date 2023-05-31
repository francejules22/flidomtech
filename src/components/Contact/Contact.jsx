import React, { useState } from 'react';
import {Fade} from 'react-reveal';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Result = () => {
  return(
   <p className="__result">
       Your message has been successfully sent.
   </p>
  )
}

const Contact = () => {
  const [result, showResult] = useState(false);
  //Adding Contact Function using Email.js template
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_od1j6rt', 'template_cc4sno4', e.target, 'Tis3H7_em1Kw-TOhk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
       e.target.reset();
       showResult(true);
    };


    return(
      <div className="container-fluid __contact-container" id="contact">
         <div className="row">
            <div className="col">
                <Fade left>
                <div className="__contact-content">
                    <div className="__contact-info">
                       <h1>Contact Us</h1>
                       <h2>Get <span>In Touch</span></h2>
                       <p>We build transform businesses by launching market-leading digital products, web services, and experiences that fuel their growth.</p>
                    </div>        
                </div>
                </Fade>
            </div>

            <div className="__col">
              <Fade right>
                <div className="__contact-wrapper"> 
                    <div className="__contact-card">
                         <form action="" className="__contact-form" onSubmit={sendEmail}>
                              <input className="input" type="text" placeholder="Full Name" name="fullName" />
                              <input className="input" type="email" placeholder="Email" name="email" />
                              <input className="input" type="number" placeholder="Contact Number" name="phoneNumber" />
                              <textarea className="textarea" placeholder="Enter Message" name="message"></textarea>
                              <button type="submit">Submit</button>
                              <div className="__result-content">{ result ? <Result/> : null }</div>
                         </form>
                    </div>
                </div>
              </Fade>
            </div>
         </div>
      </div>
    )
}
export default Contact
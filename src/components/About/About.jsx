import React from 'react';
import AboutImg from '../../assets/about_img.png';
import {Slide} from 'react-reveal';
import './About.css';

const About = () => {
    return( 
        <div className="container-fluid __about-container" id="about">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-xl-6">
                  <Slide left>
                    <div className="__about-image">
                        <img src={AboutImg} alt="About" />
                    </div>
                  </Slide>
                </div>
                
               <Slide right>
                <div className="col col-xl-6">
                    <div className="__about-content">
                        <h1>About Us</h1>
                        <h2>We Intend to <span>Help Business Grow</span> Faster Thanever.</h2>
                        <p>We build transform businesses by launching market-leading digital products,web services, and experiences that fuel their growth.</p>
                    </div>
                    <div className="__about-button">
                      <button class="about-btn btn-1 hover-filled-slide-left">
                         <a href="#services"><span>Learn More</span></a>
                      </button>
                    </div>
                </div>
               </Slide>
            </div>
        </div>
    )
}
export default About
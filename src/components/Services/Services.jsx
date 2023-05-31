import React from 'react';
import GraphicImg from '../../assets/graphic.png';
import WebDesignImg from '../../assets/webdesigns.png';
import WebDevImg from '../../assets/webdev.png';
import DataImg from '../../assets/data.png';
import {Fade, Slide} from 'react-reveal';
import './Services.css';

const Services = () => {
    return(
      <div className="container-fluid __services-container" id="services">
        <div className="__services-box">
         <Fade left>
          <div className="__services-content-info">
             <h1>Services</h1>
             <h2>Our <span>Services Offers</span></h2>
             <p>We provide high-quality digital products, web services, and other tech services.</p>
          </div>
          </Fade>
          <div className="row __services-">
            <Slide top>
            <div className="col">
                 <div className="__services-wrapper">
                     <div className="__services-image">
                         <img src={GraphicImg} alt="Graphic Designs" />
                     </div>
                     <div className="__services-content">
                        <h3>Graphic Design</h3>
                        <p className="para">We create unique designs like logo, brand, poster, business cards, and other designs using adobe tools.</p>
                     </div>
                 </div>
            </div>
            </Slide>

            <Slide bottom>
            <div className="col">
                 <div className="__services-wrapper">
                     <div className="__services-image">
                         <img src={WebDesignImg} alt="Web Designs" />
                     </div>
                     <div className="__services-content">
                        <h3>Web Design</h3>
                        <p>We produce web designs with prototype, wireframing, responsiveness, user experience, and functionality using incredible technologies such as figma, adobe illustrator, and XD.</p>
                     </div>
                 </div>
            </div>
            </Slide>

            <Slide top>
            <div className="col">
                 <div className="__services-wrapper">
                     <div className="__services-image">
                         <img src={WebDevImg} alt="Web Development" />
                     </div>
                     <div className="__services-content">
                        <h3>Web Development</h3>
                        <p>We built front-end websites using HTML5, CSS3, Javascript,JQuery, and Wordpress. We also integrated the backend utilizing PHP, mySQL, and database administration.</p>
                     </div>
                 </div>
            </div>
            </Slide>

            <Slide bottom>
            <div className="col">
                 <div className="__services-wrapper">
                     <div className="__services-image">
                         <img src={DataImg} alt="Data Analytics" />
                     </div>
                     <div className="__services-content">
                        <h3>Data Analytics</h3>
                        <p>We provide data analytics using Excel, Python, and PowerBI to produce graphs and interpret data.</p>
                     </div>
                 </div>
            </div>
            </Slide>
            
          </div>  
        </div>
      </div>
    )
}

export default Services
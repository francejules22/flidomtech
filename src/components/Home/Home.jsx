import React from 'react';
import HomeImg from '../../assets/home_img.png';
import { Fade } from 'react-reveal';
import './Home.css';


const Home = () => {
   return(
    <div className="container-fluid __home-container" id="home">
      <div className="row d-flex justify-content-center align-items-center">
         <div className="col col-xl-6 col-sm-6">
         <Fade left>
           <div className="__home-content">
              <h2>Quality <span>Digital & Services</span> You Really Need!</h2>
              <p>We build transform businesses by launching market-leading digital products,web services, and experiences that fuel their growth.</p>
                <div className="__home-button">
                   <button className="home-btn btn-1 hover-filled-slide-left">
                        <a href="#services"><span>Explore our Services</span></a>
                   </button>
               </div>
            </div>
          </Fade>
         </div>

         <div className="col col-xl-6 col-sm-6">
            <Fade right>
              <div className="__home-image">
                 <img src={HomeImg} alt="Home"></img>
              </div>
            </Fade>
         </div>
      </div>
    </div>
   )
}
export default Home
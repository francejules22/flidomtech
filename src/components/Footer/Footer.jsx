import React from 'react';
import Location from '../../assets/location.png';
import Email from '../../assets/message.png';
import Telephone from '../../assets/telephone.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Behance from '../../assets/behance.png';
import {Slide} from 'react-reveal';
import FlidomTech from '../../assets/FlidomTechLogo.png';
import './Footer.css';

const Footer = () => {
    return(
      <footer className="__footer-container">
       <Slide bottom>
        <div className="__footer-wrapper">
         <div className="row">
            <div className="col-12 col-lg-3  col-md-6 col-sm-12">
                <div className="__footer-content">
                    <a href="#home"><img src={FlidomTech} alt="Logo" className="__footer-logo" /></a>
                    <h2>FLiDoM TECH</h2>
                    <p>We build and transform businesses by launching market-leading digital products, web services, and experiences that fuel their growth.</p>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="__footer-content">
                    <h1>Services</h1>
                    <ul>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Data Analytics</li>
                    </ul>
                </div>
            </div>

            <div className="col-12 col-lg-3  col-md-6 col-sm-12">
                <div className="__footer-content">
                    <h1>Company</h1>
                    <ul>
                        <li>Tech Industries</li>
                        <li>Digital Marketing</li>
                        <li>Web Services</li>
                        <li>Branding</li>
                    </ul>
                </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="__footer-content">
                    <h1>Contact Us</h1>
                    <ul>
                        <li><img src={Location} alt="Location" /> Jaro, Iloilo City</li>
                        <li><img src={Telephone} alt="Telephone" /> +63 948 505 8747</li>
                        <li><img src={Email} alt="Email" /> flidomtechno@gmail.com</li>
                    </ul>
                </div>

                <div className="__footer-socials">
                    <ul>
                        <li><a href="https://www.facebook.com/francisjules.celeste/" target="_blank"><img src={Facebook} alt="Facebook" /></a></li>
                        <li><a href="https://www.instagram.com/frnce_juls/" target="_blank"><img src={Instagram} alt="Instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/in/francis-jules-espartero-b81687226/?originalSubdomain=ph" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a></li>
                        <li><a href="https://github.com/francejules22" target="_blank"><img src={Github} alt="Github" /></a></li>
                        <li><a href="https://www.behance.net/gallery/167043083/Personal-Portfolio" target="_blank"><img src={Behance} alt="Behance" /></a></li>
                    </ul>
                </div>
            </div>
         </div>
         <div className="__footer-reserved">
            <p>&copy;FLiDoMTech2023. All Right Reserved</p>
         </div>
        </div>
        </Slide>
      </footer>
    )
}
export default Footer;
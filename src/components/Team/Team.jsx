import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {Bounce, Slide} from 'react-reveal';
import './Team.css';


const Team = () => {
    return(
       <div className="container-fluid __team-container" id="team">
         <Bounce top>
            <div className="__team-content">
              <h1>Our Team</h1>
            </div>
          </Bounce>
          <div className="row">
            <div className="col  __team-box">
              <div className="__team-wrapper">
               <Slide bottom>
                <div className="__team-card">
                      <div className="__team-img"></div>
                      <ul className="__team-social">
                         <li><a href="https://www.instagram.com/frnce_juls/" target="__blank"><AiFillInstagram size={30} color="#DAA02F"/></a></li>
                         <li><a href="https://www.facebook.com/francisjules.celeste" target="__blank"><BsFacebook size={30} color="#DAA02F" /></a></li>
                         <li><a href="https://github.com/francejules22" target="__blank"><BsGithub size={30} color="#DAA02F"/></a></li>
                      </ul>
                      <div className="__team-info">
                         <p className="__team-name">Francis Jules Espartero</p>
                         <p className="__team-role">Full Stack Developer</p>
                     </div>
                 </div>
                 </Slide>
              </div>
            </div>

            <div className="col   __team-box">
              <div className="__team-wrapper">
               <Slide top>
                <div className="__team-card">
                      <div className="__team-img2"></div>
                      <ul className="__team-social">
                         <li><a href="https://www.instagram.com/" target="__blank"><AiFillInstagram size={30} color="#DAA02F"/></a></li>
                         <li><a href="https://www.facebook.com/ackoesi.louie" target="__blank"><BsFacebook size={30} color="#DAA02F" /></a></li>
                         <li><a href="https://github.com/Chanceux-02" target="__blank"><BsGithub size={30} color="#DAA02F"/></a></li>
                      </ul>
                      <div className="__team-info">
                         <p className="__team-name">Louie Jay Cantores</p>
                         <p className="__team-role">Full Stack Developer</p>
                     </div>
                 </div>
                 </Slide>
              </div>
            </div>

            <div className="col  __team-box">
              <div className="__team-wrapper">
               <Slide bottom>
                <div className="__team-card">
                      <div className="__team-img3"></div>
                      <ul className="__team-social">
                         <li><a href="https://www.instagram.com/" target="__blank"><AiFillInstagram size={30} color="#DAA02F"/></a></li>
                         <li><a href="https://www.facebook.com/mclord.valdez" target="__blank"><BsFacebook size={30} color="#DAA02F" /></a></li>
                         <li><a href="https://github.com/francejules22" target="__blank"><BsGithub size={30} color="#DAA02F"/></a></li>
                      </ul>
                      <div className="__team-info">
                         <p className="__team-name">Joven Mclord Valdez</p>
                         <p className="__team-role">Graphic Designer</p>
                     </div>
                 </div>
                 </Slide>
              </div>
            </div>

              <div className="col  __team-box">
              <div className="__team-wrapper">
               <Slide top>
                <div className="__team-card">
                      <div className="__team-img4"></div>
                      <ul className="__team-social">
                         <li><a href="https://www.instagram.com/" target="__blank"><AiFillInstagram size={30} color="#DAA02F"/></a></li>
                         <li><a href="https://www.facebook.com/denzelfjrd" target="__blank"><BsFacebook size={30} color="#DAA02F" /></a></li>
                         <li><a href="https://github.com/francejules22" target="__blank"><BsGithub size={30} color="#DAA02F"/></a></li>
                      </ul>
                      <div className="__team-info">
                         <p className="__team-name">Denzel Fajardo</p>
                         <p className="__team-role">Data Analyst</p>
                     </div>
                 </div>
                 </Slide>
              </div>
            </div>
          </div>
       </div>
    )
}
export default Team
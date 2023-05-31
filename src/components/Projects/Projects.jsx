import React from 'react';
import './Projects.css'
import DiabetesApp from '../../assets/DiabetesImg.png';
import HRSupport from '../../assets/HRSupport.png';
import Todo from '../../assets/todoImg.png';
import Calculator from '../../assets/Calculator.png';
import Fitness from '../../assets/fitness.png';
import Analytics from '../../assets/analytics.png';
import Graphic1 from '../../assets/Graphic1.png'
import FrancePortfolio from '../../assets/FrancePortfolio.png';
import LouiePortfolio from '../../assets/LouiePortfolio.png';
import {Bounce, Fade} from 'react-reveal';


const data = [
   {
      id: 1,
      image: DiabetesApp,
      title: 'Diabetest App',
      github: 'https://github.com/francejules22/DiabetestApp',
      demo: 'https://diabetestapp.netlify.app/'
   },
   {
      id: 2,
      image: HRSupport,
      title: 'HR Email Support System',
      github: 'https://github.com/francejules22/EmailSupport_HR',
      demo: 'https://github.com/francejules22/EmailSupport_HR'
   },
   {
      id: 3,
      image: Todo,
      title: 'Todo List App',
      github: 'https://github.com/francejules22/todolist',
      demo: 'https://francejules22.github.io/todolist/'
   },
   {
      id: 4,
      image: Calculator,
      title: 'RealTime Calculator',
      github: 'https://github.com/francejules22/geco-realtime-savings',
      demo: 'https://francejules22.github.io/gecocalc.github.io/'
   },
   {
      id: 5,
      image: Fitness,
      title: 'Fitness',
      github: 'https://github.com/francejules22/Fitness-Website',
      demo: 'https://francejules22.github.io/Fitness-Website/'
   },
   {
      id: 6,
      image: FrancePortfolio,
      title: 'Portfolio',
      github: 'https://github.com/francejules22/francis-portfolio',
      demo: 'https://francejules22.github.io/francis-portfolio/'
   },
   {
      id: 7,
      image: LouiePortfolio,
      title: 'Portfolio',
      github: 'https://github.com/Chanceux-02/Louie-Jay-Cantores-Portfolio',
      demo: 'https://chanceux-02.github.io/Louie-Jay-Cantores-Portfolio/'
   },
   {
      id: 8,
      image: Analytics,
      title: 'Data Analytics',
      github: 'https://github.com/denzelfjrd',
      demo: 'https://github.com/denzelfjrd/myrender-sentiment-analysis-app'  
   },
   {
      id: 9,
      image: Graphic1,
      title: 'Graphic Design',
      github: 'https://www.instagram.com/visualsmac/',
      demo: 'hhttps://www.instagram.com/p/CVXjh0nF7Nq/'  
   }
]



const Projects = () => {
   return(
      <div className="container-fluid __projects-container" id="projects">
         <Bounce top>
            <div className="__projects-content">
               <h3>Projects</h3>
           </div>
          </Bounce>

          <div className="__portfolio-wrapper">
            <Fade bottom>
             <div className="__portfolio-content">
                {
                   data.map (({id, image, title, github, demo}) => {
                     return(
                        <article key={id} className="__portfolio-item">
                            <div className="__portfolio-img">
                               <img src={image} alt={title} />
                            </div>
                            <h3 className="__portfolio-title">{title}</h3>
                            <div className="__portfolio-btn">
                                   <button className="_btn"><a href={github}  target="_blank" rel="noreferrer">Github</a></button>
                                   <button className="__btn"><a href={demo} target='_blank' rel="noreferrer">Demo</a></button>
                                </div>
                        </article>
                     )
                   })
                }
             </div>
            </Fade>
          </div>
      </div>
   )
}
export default Projects



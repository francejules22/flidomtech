import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App(){
  return(
    <>
       <Header />
       <Home />
       <About />
       <Services /> 
       <Projects />
       <Team />
       <Contact />
       <Footer />
    </>
  )
}

export default App;
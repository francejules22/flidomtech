import React, {useRef, useEffect} from 'react';
import { Container } from 'reactstrap';
import 'remixicon/fonts/remixicon.css';
import FlidomTech from '../../assets/FlidomTechLogo.png';
import './Header.css';


const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Services',
        url: '#services'
    },
    {
        display: 'Projects',
        url: '#projects'
    },
    {
        display: 'Team',
        url: '#team'
    },
    {
        display: 'Contact',
        url: '#contact'
    }
]


const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header-shrink')
            } else {
                headerRef.current.classList.remove('header-shrink')
            }
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    const menuToggle = () => menuRef.current.classList.toggle('__menu-active');

    return(
        <header className="header" ref={headerRef}>
            <Container>
                 <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="__logo-box">
                         <a href="#home"><img src={FlidomTech} alt="Logo" className="__logo-img" /></a>
                         <a href="#home" className="__logo-link">FLiDoMTech</a>
                    </div>

                    <div className="__nav-menu" ref={menuRef} onClick={menuToggle}>
                        <ul className="__nav-list">
                            {
                                navLinks.map((item, index) => 
                                <li className="__nav-item" key={index}>
                                    <a className="__nav-link" href={item.url}>{item.display}</a>
                                </li>)
                            }
                        </ul>
                    </div>

                    <div className="__nav-right d-flex align-items-center gap-4 __button-box">
                        <button className="__button-content btn"><a href="#contact">Start a Project</a></button>
                        <span className="__mobile-menu">
                            <i class="ri-menu-fill" onClick={menuToggle}></i>
                        </span>
                    </div>
                 </div>
            </Container>
        </header>
    )
}
export default Header
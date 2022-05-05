import { NavLink, Outlet } from "react-router-dom"
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";

import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Portfolio from '../portfolio/portfoliosPage';

import './layout.css';
import { useState } from "react";

export default function Layout() {

    const [navBar, setNavbar] = useState();
    const [bg , setBg] = useState();

    const activOrNoactiveLink = ({ isActive }) => {
        if (isActive) {
            return 'isActive';
        } else {
            return 'noActive';
        }
    }

    const activeNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    
    const changeBgColor = ()=>{
        if(window.scrollY >=550){
            setBg(true)
        }else{
            setBg(false)
        }
    }
    window.addEventListener('scroll' , changeBgColor)
    window.addEventListener('scroll', activeNavbar)
    return (
        <div className={bg?'bgColor' : 'backGroundPage'}>
            <header className={ navBar ? 'layoutHeaderActive': 'layoutHeader'}>
                <h1 className="h1">
                    <span style={{ color: 'red' }}>P</span>ortfolio
                </h1>
                <div className="navLinks">
                    <NavLink className={activOrNoactiveLink} to='/' element={<Home />}>Home</NavLink>
                    <NavLink className={activOrNoactiveLink} to='/about' element={<About />}>About</NavLink>
                    <NavLink className={activOrNoactiveLink} to='/portfolio' element={<Portfolio />}>Portfolio</NavLink>
                    <NavLink className={activOrNoactiveLink} to='/contact' element={<Contact />}>Contact</NavLink>
                </div>
                <div className="LetsTalk">
                    <NavLink className={activOrNoactiveLink} to='/contact' element={<Contact />}><button className="contactButton">Lets Talk</button></NavLink>
                </div>
            </header>
            <div className="outlet">
                <Outlet />
            </div>
            <footer className="footer">
                <h1 className="h1">
                    <span style={{ color: 'red' }}>P</span>ortfolio
                </h1>
                <div className="navLinks">
                    <NavLink className={activOrNoactiveLink} to='/' element={<Home />}>Home</NavLink>
                    <NavLink className={activOrNoactiveLink} to='/about' element={<About />}>About</NavLink>
                    <NavLink className={activOrNoactiveLink} to='/portfolio' element={<Portfolio />}>Portfolio</NavLink>
                    <NavLink className={activOrNoactiveLink} to='/contact' element={<Contact />}>Contact</NavLink>
                </div>
                <div className="Icons">
                    <div className="icon">
                        <RiFacebookFill style={{ color: '#385C8E', width: 40, height: '100%' }} />
                    </div>
                    <div className="icon">
                        <AiOutlineTwitter style={{ color: '#03A9F4', width: 40, height: '100%' }} />
                    </div>
                    <div className="icon">
                        <RiInstagramFill style={{ color: '#DA7E47', width: 40, height: '100%' }} />
                    </div>
                </div>
            </footer>
        </div>
    )
}

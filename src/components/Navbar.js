import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { render } from '@testing-library/react';
// https://github.com/tbakerx/react-resume-template

// function Sidebar2() {
//     render() { 
//         return(
//             <div>
//                 <nav href='#navbar' className='js-colorlib-nav-toggle'>Hello</nav>
//             </div>
//         )
//     }
// }

class Navbar extends Component {
    render() { 
        return(
            <header id='home'>
            <nav id='nav-wrap'>
                <ul id='nav'>
                    {/* <nav href='#navbar' className='js-colorlib-nav-toggle'>Hello</nav> */}
                    {/* <li className='current'><a className='smoothscroll' href='#home'>James Vo</a></li> */}
                    <li className='nav-item'><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >James Vo</Link></li>
                    <li className='nav-item'><Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >About</Link></li>
                    {/* <li><a href='#projects'>Projects</a></li> */}
                    <li className='nav-item'><Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Projects</Link></li>
                    {/* <li><a href='#resume'>Resume</a></li> */}
                    <li className='nav-item'><Link
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Resume</Link></li>
                    {/* <li><a href='#contact'>Contact</a></li> */}
                    <li className='nav-item'><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Contact</Link></li>
                </ul>
            </nav>

            <div className='row banner'>
                <div className='banner-text'>
                    <h1>Hello! My name is James Vo.</h1>
                    <h3>I am a computing science graduate from the University of Alberta, currently living in Edmonton, Alberta.</h3>
                </div>
            </div>
            </header>
        )
    }
}

export default Navbar;


import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { render } from '@testing-library/react';

class Navbar extends Component {
    render() { 
        return(
            <header id='home'>
            <nav id='nav-wrap'>
                <a className='mobile-button'  href='#nav-wrap' title='Show navigation'></a>
                {/* <i class="fa fa-bars mobile-button"></i> */}
                    <a className='mobile-button' href='' title='Hide navigation'></a>

                <ul id='nav'>
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
                    <li className='nav-item'><Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Projects</Link></li>
                    <li className='nav-item'><a href='files/VO_JAMES_RESUME.pdf'>Resume</a></li>
                    {/* <li className='nav-item'><Link
                            activeClass="active"
                            to="files/resume2.pdf"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        >Resume</Link></li> */}
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
                <div className='row-home banner'>
                    <div className='banner-text'>
                        <h1>Hello! My name is James Vo.</h1>
                        <hr />
                        <h3>I am a computing science graduate from the University of Alberta, currently living in Edmonton, Alberta.</h3>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;


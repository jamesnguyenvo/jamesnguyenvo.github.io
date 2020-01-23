import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <header id='about'>
            <div className='row banner'>
                <div className='banner-text'>
                    <h1>ABOUT ME</h1>
                    <img className='profile-pic' src='/images/TBD.jpg' alt='Picture of Me' />
                </div>
            </div>
            </header>
        )
    }
}

export default About;
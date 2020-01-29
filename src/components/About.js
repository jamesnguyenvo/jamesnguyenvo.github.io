import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <section id='about'>
                <div className='row'>
                    <div className='col-4'><img className='profile-pic' src='/images/TBD.jpg' alt='Picture of Me' /> 
                    </div>
                    <div className='col-4'>                
                        <h2>About Me</h2>
                        <p>I graduated from the University of Alberta with a Bachelor of Science with Specialization in 
                            Computing Science in the summer of 2019. After taking some time off to travel, I am now looking
                            for full-time employment. 
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <h2>Interests</h2>
                        <p>In my spare time I like to rock climb, play competitive video games, and occasionally make music 
                            beats. I also enjoy playing hockey, and badminton.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
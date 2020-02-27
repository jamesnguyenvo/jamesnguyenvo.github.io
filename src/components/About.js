import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <section id='about'>
                <div className='row'>
                    <div className='col-4'><img className='profile-pic' src='images/profile-pic.PNG' alt='Picture of Me' /> 
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
                        <p>One of my absolute favourite things to do is rock climb! I also enjoy playing <a href='https://www.youtube.com/watch?v=ic10P3vE3Og'>
                            Super Smash Bros. Melee</a> competitively, and occasionally make music beats. Playing hockey, badminton, and crying as a result of 
                            the Oilers are things I partake in as well.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
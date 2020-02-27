import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section id='contact'>  
            <div className='row'>
                <div className='col-md-4'></div> 
                <div className='col-md-4'> 
                    <ul className='social'>
                        <li><a href='https://github.com/jamesnguyenvo'><i className='fa fa-github fa-3x'></i></a></li>
                        <li><a href='https://www.linkedin.com/in/jamesnguyenvo/'><i className='fa fa-linkedin fa-3x'></i></a></li>
                        <li><a href='mailto:jv@ualberta.ca' target='_blank'><i className="fa fa-envelope fa-3x"></i></a></li>
                    </ul>
                </div>
            </div>
            {/* <div className='row-home banner'>
                <div className='banner-text'>
                    <ul className='social'>
                    <li><a href='https://google.ca'><i className='fa fa-github fa-5x'></i></a></li>
                        <li><i className='fa fa-linkedin fa-5x'></i></li>
                        <li><i class="fa fa-envelope fa-5x"></i></li>
                    </ul>
                </div>
                </div> */}
            </section>
        )
    }
}

export default Contact;
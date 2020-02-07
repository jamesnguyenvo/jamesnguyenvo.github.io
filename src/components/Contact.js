import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section id='contact'>  
            <div className='row'>
                <div className='col-md-4'></div> 
                <div className='col-md-4'> 
                    <ul className='social'>
                        <li><a href='https://google.ca'><i className='fa fa-github fa-5x'></i></a></li>
                        <li><i className='fa fa-linkedin fa-5x'></i></li>
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}

export default Contact;
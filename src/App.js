import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


class App extends React.Component{
  render(){
    // const items = [
    //   { name: 'home', label: 'Home'},
    //   { name: 'billing', label: 'Billing'},
    //   { name: 'settings', label: 'Settings'},
    // ]
     return (
       <div> 
         {/* <Sidebar items={items}/> */}
         <Navbar/>
         <About />
         <Projects />
         <Contact />
       </div>
     )
  }
}

export default App;

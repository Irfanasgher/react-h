import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header'; 
import About from './About';
import Business from './business/business';
import Services from './services/Services';
import Works from './works/Works';
import Plans from './plans/Plans';
import Team from './Team/Teams';
import Blog from './blog/Blog';
import GetInTouch from './GetInTouch/GetInTouch';
import Footer from './footer/Footer';



class App extends Component{
    render(){
        return(
            <div className="app">
            <Navbar/>
            <Header/>
            <About/>
            <Business/>
            <Services/>
            <Works/>
            <Plans/>
            <Team/>
            <Blog/>
            <GetInTouch/>
            <Footer/>
            {/* <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={About}/>
            <Footer/> */}
            </div>
        );
    }
}

export default App;
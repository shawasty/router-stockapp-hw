import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutUs'
import NotFound from './components/NotFound';
import Stocks from './components/Stocks';

const Container = () => {
    return (
            <Routes>
                <Route path='/' element = { <Home/> }/>
                <Route path='/about' element= {<About/>}/>
                <Route path='/stocks' element = {<Stocks/>}/>
                <Route path ='*' element ={<NotFound/>}/>
                <Route/>
            </Routes>
      
    );
};

export default Container;
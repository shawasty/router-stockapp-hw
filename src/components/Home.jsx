
import '../styles/Home.css'
import React from 'react';
import Typical from "react-typical";
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='welcome'>
            <div className="dog">
                <img src="https://i.gifer.com/Qsmo.gif" alt="" />
        </div>
            <h1>Welcome To Godbless' Stock's Site </h1>
            
        <div className="typical">
        <Typical 
                    loop={Infinity}
                    steps={[
                      "Search all about company stocks 📉 🌎 ",
                      2000,
                      "All in one place 💻 ",
                      2000,
                    ]}
                  />
        </div>

         <h4>Click <span><NavLink to= '/stocks'>HERE</NavLink></span> To Enjoy ☺️</h4>

        
                
        </div>
    );
};

export default Home;

import '../styles/Home.css'
import React from 'react';
import Typical from "react-typical";

const Home = () => {
    return (
        <div className='welcome'>
            <h1>Welcome To Godbless' Stock's Site </h1>
            <Typical 
                    loop={Infinity}
                    steps={[
                      "Search all about company stocks 📉 🌎 ",
                      1000,
                      "All in one place 💻 ",
                      1000,
                    ]}
                  />
        <div className="typical">
        <Typical 
                    loop={Infinity}
                    steps={[
                      "Search all about company stocks 📉 🌎 ",
                      1000,
                      "All in one place 💻 ",
                      1000,
                    ]}
                  />
        </div>
        </div>
    );
};

export default Home;
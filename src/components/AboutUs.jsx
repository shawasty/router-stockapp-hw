import React from 'react';
import '../styles/AboutUs.css'
import Typical from "react-typical";

const AboutUs = () => {
    return (
        <div className='about-us'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Corrupti vel sunt reiciendis minima quod voluptas, placeat saepe <br />impedit explicabo reprehenderit <br /> sit a fugiat? Natus ratione laborum, eius <br /> perferendis ea numquam!</p>


        <div className="typic">
            <Typical 
                    loop={Infinity}
                    steps={[
                      "Hello There !!!😎",
                      2000,
                      "Come Back Later For More News📰",
                      1000,
                    ]}
                  />
        </div>
        </div>
    );
};

export default AboutUs;
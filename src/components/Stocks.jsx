import { useState, useEffect } from 'react';
import { stockData } from '../services/constants';
import { NavLink } from 'react-router-dom'
import React from 'react';
import '../styles/Stocks.css'
import NotFound from './NotFound';
import Typical from "react-typical";



const Stocks = (props) => {
    const [stocks, setStocks] = useState ({});
    const [symbol, setSymbol] = useState (``);

    // set searched item to setSymbol by onChange {(e) => setsymbol(e.target.value)}

    const handlegetStock = (e)=>{
        e.preventDefault();
       stockData(symbol).then(res=>{
            setStocks(res) 
            console.log(symbol)
          })}
      
    
    useEffect(()=>{
        stockData()
    },[])

    // const handleDetails =()=>{
    //     console.log('godbless...')
    // }


    return (
        <div className='search-form'>
            <div className="input">
            <input type="text" placeholder='Enter stock symbol' onChange={(e)=>setSymbol(e.target.value)} />
            <button onClick={(e)=>handlegetStock(e)}>SEARCH</button>
            </div>

            <div className='stockLink'>
                {/* when an entere value doesn't match, take to 404 page */}
           {     stocks ? 
            <NavLink to={`/stockdetails/${stocks.symbol}`} style={{textDecorationLine:'none'}} className="nav"> 
             <h4 > {stocks.symbol}</h4>
            </NavLink> : <NotFound/> }
            </div>
            
            <div className="list">
            <div className="typical">
                <Typical 
                    loop={Infinity}
                    steps={[
                      "Click the back arrow ⬅️ ",
                      2000,
                      "After Visiting Link Below ⬇️",
                      2000,
                    ]}
                  />
                <a href="https://gretlcycu.files.wordpress.com/2013/08/quick-ticker-symbol-list.pdf">LIST OF SYMBOLS</a>
            </div>
            </div>
            <div className="dog">
                <img src="https://i.gifer.com/Qsmo.gif" alt="" />
            </div>
        </div>
    );
};

export default Stocks;
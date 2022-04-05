import { useState, useEffect } from 'react';
import { stockData } from '../services/constants';
import { NavLink } from 'react-router-dom'
import React from 'react';
import NotFound from './NotFound';
import company from '../docs/company.pdf'



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
            <input type="text" placeholder='Enter stock symbol' onChange={(e)=>setSymbol(e.target.value)} />
            <button onClick={(e)=>handlegetStock(e)}>SEARCH</button>
            
            <div className='stockLink'>
                {/* when an entere value doesn't match, take to 404 page */}
           {     stocks ? 
            <NavLink to={`/stockdetails/${stocks.symbol}`} style={{textDecorationLine:'none'}}> 
             <h4 > {stocks.symbol}</h4>
            </NavLink> : <NotFound/> }
            </div>
            
            <div className="list">
                <a href="company">LIST OF SYMBOLS</a>
            </div>
        </div>
    );
};

export default Stocks;
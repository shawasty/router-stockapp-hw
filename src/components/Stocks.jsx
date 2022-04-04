import { useState, useEffect } from 'react';
import { stockData } from '../services/constants';
import React from 'react';



const Stocks = () => {
    const [stocks, setStocks] = useState ({});
    const [symbol, setSymbol] = useState (``);

    // set searched item to setSymbol by onChange {(e) => setsymbol(e.target.value)}

    const handlegetStock = (e)=>{
        e.preventDefault()
       stockData(symbol).then(res=>{
            setStocks(res) 
            console.log(symbol)
          })
      }
    
    useEffect(()=>{
        stockData()
    },[])



    return (
        <div className='search-form'>
            <input type="text" placeholder='Enter stock symbol' onChange={(e)=>setSymbol(e.target.value)} />
            <button onClick={(e)=>handlegetStock(e)}>SEARCH</button>
            <div className='stockCard'>
                
             <h4> {stocks.symbol}</h4>
            </div>
        </div>
    );
};

export default Stocks;
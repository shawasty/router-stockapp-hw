import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { stockData } from '../services/constants';

const StockCard = (props) => {

    const [stocks, setStocks] = useState ({});

    useEffect(()=>{
       handlegetStock();
    },[])
    const handlegetStock = ()=>{
       stockData(symbol).then(res=>{
            setStocks(res) 
            console.log(symbol)
          })}

    const { symbol } = useParams()
//  const stocks = props.stocks
    // console.log (symbol)
    return (
        <div>
            <h2>{stocks.symbol}</h2>
            <p>{stocks.companyName}</p>
            <p>{stocks.primaryExchange}</p>
            <p>${stocks.latestPrice}</p>
            <p>${stocks.week52High}</p>
            <p>${stocks.week52Low}</p>
            <p>${stocks.marketCap}</p>
        </div>
    );
};

export default StockCard;
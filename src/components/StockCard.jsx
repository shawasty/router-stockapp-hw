import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { stockData } from '../services/constants';
import '../styles/StockCard.css'

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
       
    <div className="table">
        <h1>{stocks.symbol}</h1>
        <>
        <table>
            <thead>
                <tr>
                    <th>COMPANY NAME</th>
                    <td>{stocks.companyName}</td>
                </tr>
                <tr>
                    <th>PRI. EXCHANGE</th>
                    <td>{stocks.primaryExchange}</td>
                </tr>
                <tr>
                    <th>LATEST PRICE</th>
                    <td>{stocks.latestPrice}</td>
                </tr>
                <tr>
                    <th>WEEK 52 HIGH</th>
                    <td>{stocks.week52High}</td>
                </tr>
                <tr>
                    <th>WEEK 52 LOW</th>
                    <td>{stocks.week52Low}</td>
                </tr>
                <tr>
                    <th>MARKET CAP</th>
                    <td>{stocks.marketCap}</td>
                </tr>
                </thead>
        </table>
        </>
       

    </div>
        
    );
};

export default StockCard;
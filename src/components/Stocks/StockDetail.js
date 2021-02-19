import React, {useState, useEffect} from 'react';
import axios from "axios";
import Fin_D from "./FinD";
import Bs_D from './BsD';
import StockChart from './p_chart';

const StocksDetail = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios
             .get("http://localhost:8000/CBView/"+props.name)
             .then(res => setData(res.data))
    }, [])
    return (
        <div>
            <div><StockChart name={props.name} /></div>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Price/ Chng</th>
                    <th>Mkt Cap</th>
                    <th>Volume</th>
                    <th>Turnover</th>
                    <th>T/V %</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return (
                        <tr key={item.co_S}>
                            <td>{item.co_N}</td>
                            <td>{item.price}</td>
                            <td>{(item.p_chng_pc * 100).toFixed(2)}</td>
                            <td>{(item.Mkt_cap / 10000000)}</td>
                            <td>{(item.volume / 100000)}</td>
                            <td>{((item.volume * item.price) / 10000000)}</td>
                            <td>{( (item.volume * item.price * 22) / item.Mkt_cap ).toFixed(3)}</td>
                        </tr>
                    );
                })} 
                
            </tbody>
        </table>
        <h3>FINANCIAL DATA</h3>
        <div><Fin_D name={props.name} /></div>
        <h3>BALANCESHEET DATA</h3>
        <div><Bs_D name={props.name} /></div>
        </div>
    );
}

export default StocksDetail;

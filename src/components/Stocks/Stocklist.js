import React, {useState, useEffect} from 'react';
import axios from "axios";
import StocksDetail from "./StockDetail";

const StockList = (props) => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [view, setView] = useState("List");
    const [co, setCo] = useState("");

    
    useEffect(()=> {
        axios.get("http://localhost:8000/CBView")
            .then(res => setData(res.data))        
    },[view])    
    const handleInputChange =(event) => {
        setSearchValue(event.target.value)
    }
    const handleClear = () => {
        setSearchValue("");
    }
    const shouldDisplayClear = searchValue.length > 0

    const filteredData = data.filter((item) => {
        return item.co_N.toLowerCase().includes(searchValue.toLowerCase())
    })
    const handleIClick = (name) => {
        setView("Stock")
        setCo(name)
    }
    const handleBack = () => {
        setView("List")
        console.log(view)
    }

    return(
        <div>
        { view === "List" && <input type="text" value={searchValue} onChange={handleInputChange} /> }
        { shouldDisplayClear && <button onClick={handleClear}>Clear</button> } 
        {view === "List" &&
        <table className="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Price/ Chng</th>
            <th>Mkt Cap (in Rs Cr)</th>
            <th>Volume (in lakhs)</th>
            <th>Turnover (in Rs Cr)</th>
            <th>T/V %</th>
        </tr>
        </thead>
        <tbody>
            {filteredData.map((item) => {
                return (
                <tr key={item.co_S}>
                    <td> <button onClick={()=> handleIClick(item.co_S)}>{item.co_N}</button></td>
                    <td>{item.price}</td>
                    <td>{(item.p_chng_pc * 100).toFixed(2)}</td>
                    <td>{(item.Mkt_cap / 10000000).toFixed(2)}</td>
                    <td>{(item.volume / 100000).toFixed(2)}</td>
                    <td>{((item.volume * item.price) / 10000000).toFixed(2)}</td>
                    <td>{( (item.volume * item.price * 22) / item.Mkt_cap ).toFixed(3)}</td>              
                </tr>
                );
            })}                
            </tbody>
        </table>
        }
        {view ==="Stock" &&  <div><button onClick={handleBack} >Back</button>   <StocksDetail name={co} /> </div>}
        
        </div>
    )
}
export default StockList;
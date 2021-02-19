import axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const StockChart = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios
        .get("http://localhost:8000/SCList/"+props.name)
        .then(res => setData(res.data))
    },[])
    return (
        <LineChart width={1300} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="close" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
        </LineChart>
    )    
}
export default StockChart;
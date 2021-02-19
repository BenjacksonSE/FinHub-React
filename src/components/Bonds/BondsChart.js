import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import _ from "lodash";

const BondsChart = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        debounceLoadData(data);
    },[])

    const debounceLoadData = useCallback(
        _.debounce((data) => {
          getData(data);
        }, 500),
        [] 
    );

    const getData = () => {
        axios
             .get("http://localhost:8000/Bonds/"+props.name)
             .then(res => setData(res.data))
    }
    return (
        <LineChart width={1300} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Close" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
        </LineChart>
    )    
}
export default BondsChart;
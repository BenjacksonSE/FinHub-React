import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import _ from "lodash";

const CommChart = (props) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState(props.name)
    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios
             .get("http://localhost:8000/Commds/"+props.name)
             .then(res => setData(res.data))
    }
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
export default CommChart;
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const FII_Chart = () => {
    const[data, setData] = useState([]);
    useEffect(() => {
        getData();
    },[])
    const getData = () => {
        axios.get('http://127.0.0.1:8000/FII_DII')
             .then(res => setData(res.data))
    }
    return (
        <BarChart width={1200} height={500} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
            <Bar type="monotone" dataKey="FII Rs Crores.2" stroke="#8884d8" />
            <Bar type="monotone" dataKey="DII Rs Crores.2" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="Unnamed: 0_level_0" />
            <YAxis />
            <Tooltip />
        </BarChart>
            
        
    )
}
export default FII_Chart;
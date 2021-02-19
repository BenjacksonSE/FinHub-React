import React, {useState, useEffect} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import CommChart  from './CommChart';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ButtonGroup, Button} from 'react-bootstrap/';

const CommList = () => {
    const [data, setData] = useState([]);
    const [view, setView] = useState();
    const [name, setName] = useState("");
    const [commd, setCommd] = useState([]);

    useEffect(() => {
        getData();
        getDataCommd();           
    },[name]);

    const getData = () => {
        axios.get("http://localhost:8000/Commds")
             .then(res => setData(res.data))
    }
    const getDataCommd = () => {
        axios.get("http://localhost:8000/Commds/"+name)
             .then(res => setCommd(res.data))
    }
    const handleClick = (arg) => {
        setView("Chart")
        return setName(arg)
    }
    return (
        <div>
            { view === "Chart" && 
                    <LineChart width={1300} height={500} data={commd} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="close" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
            }
            <ButtonGroup aria-label="Basic example">
                {data.map((item) => ( <Button  size="lg" variant="secondary" onClick={() => handleClick(item.Name)}>{item.Name}</Button> ))}
            </ButtonGroup>
            
            <div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Day Range</th>
                            <th>Year Range</th>
                        </tr>
                    </thead>
                    {data.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td>{item.DayRange}</td>
                                <td>{item.yrRange}</td>
                            </tr>
                        </tbody>
                    ))}    
                </Table>
            </div>
        </div>
    )
}

export default CommList;
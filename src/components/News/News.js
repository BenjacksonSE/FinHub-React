import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';

const News = () => {
    const [data, setData] = useState([]);
    const [sv, setSv] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/news")
             .then(res => setData(res.data))
    },[])

    const handleInputChange =(event) => {
        setSv(event.target.value)
        setSvDebounced.current(event.target.value)
    }
    const setSvDebounced = useRef(_.debounce(setSv, 1000));
    const handleClear = () => {
        setSv("");
    }
    const shouldDisplayClear = sv.length > 0

    const filteredData = data.filter((item) => {
        return item.Headline.toLowerCase().includes(sv.toLowerCase())
    })
    return (
        <Container>
            <input type="text" value={sv} onChange={handleInputChange} />
            { shouldDisplayClear && <button onClick={handleClear}>Clear</button> }
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>HeadLine</th>
                        <th>Google Search</th>
                    </tr>
                </thead>
                {filteredData.slice(0,25).map((item) => (
                    <tbody>
                        <tr>
                            <td>{item.Date}</td>
                            <td><a href={"https://economictimes.indiatimes.com/"+item.Link} target="_blank" >{item.Headline}</a></td>
                            <td><Button href={"https://www.google.com/search?q="+item.Headline} target="_blank">Google</Button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    )
}
export default News;
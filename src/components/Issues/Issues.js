import React, { useEffect, useState } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Issues = () => {
    const [ipod, setIpod] = useState([]);
    const [ncd, setNcd] = useState([]);
    const [reitd, setReitd] = useState([]);

    useEffect(() => {
        getDataIpo();
        getDataNcd();
        getDataReitd();
    },[])

    const getDataNcd = () => {
        axios.get("http://127.0.0.1:8000/BIssues")
             .then(res => setNcd(res.data))
    }
    const getDataIpo = () => {
        axios.get("http://127.0.0.1:8000/IPOS")
             .then(res => setIpod(res.data))
    }
    const getDataReitd = () => {
        axios.get("http://127.0.0.1:8000/REITS")
             .then(res => setReitd(res.data))
    }
    return (
        <div>
            <Row>
                <Col>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
    
                        </tr>
                    </thead>
                    { ipod.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.Date}</td>
                                <td><a href={item.Link} target="_blank">{item.Name}</a></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                </Col>
                <Col>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    { ncd.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.Date}</td>
                                <td><a href={item.Link} target="_blank">{item.Name}</a></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                </Col>
                <Col>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    { reitd.map((item) => (
                        <tbody>
                            <tr>
                                <td>{item.Date}</td>
                                <td><a href={item.Link} target="_blank">{item.Name}</a></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                </Col>
            </Row>
        </div>
    )
}
export default Issues;
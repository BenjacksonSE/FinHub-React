import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Row, Col, Container, Card ,CardGroup, ListGroup, Button} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import BondsChart from './BondsChart';

const BondsList = (props) => {
    const [data, setData] = useState([]);
    const [view, setView] = useState("List");
    const [bonds, setBonds] = useState("");

    
    useEffect(()=> {
        axios.get("http://localhost:8000/Bonds")
            .then(res => setData(res.data))        
    },[])    
    const y10FilteredData = data.filter((item) => {
        return item.Name.includes('10Y')
    })
    const indFilteredData = data.filter((item) => {
        return item.Name.includes('Ind')
    })
    const usFilteredData = data.filter((item) => {
        return item.Name.includes('U.S')
    })
    const ukFilteredData = data.filter((item) => {
        return item.Name.includes('U.K')
    })
    const gerFilteredData = data.filter((item) => {
        return item.Name.includes('Ger')
    })
    const handleClick = (name) => {
        setBonds(name)
        setView("chart")
    }
    return(
        <div>
            {view === "chart" && <BondsChart name={bonds} /> }
            {view === "List" &&
            <Container>
                <h1>10Y Yields</h1>
                <CardGroup>
                {y10FilteredData.map((item) => (
                <Card style={{ width: '18rem' }}>
                <Card.Header>{item.Name}</Card.Header>
                   
                       <ListGroup variant="flush">
                       <ListGroup.Item><strong>Yield :     </strong> {item.B_Yield}   </ListGroup.Item>
                       <ListGroup.Item><strong>Week Ago :  </strong> {item.B_Y_w}</ListGroup.Item>
                       <ListGroup.Item><strong>Month Ago : </strong> {item.B_Y_m}</ListGroup.Item>
                       <ListGroup.Item><strong>Weekly move : </strong> {(item.B_Yield - item.B_Y_w).toFixed(3)}</ListGroup.Item>
                       <ListGroup.Item><strong>Monthly move : </strong> {(item.B_Yield - item.B_Y_m).toFixed(3)}</ListGroup.Item>
                       </ListGroup>
                    <Card.Footer><Button variant="light" onClick={() => {handleClick(item.Name)}}>{item.Name} Chart</Button></Card.Footer>
                </Card>
                ))}
                </CardGroup>
                </Container>}
                <Row>
                        <Col>
                        <h3>India</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Yield</th>
                                    <th>Week Ago</th>
                                    <th>Month Ago</th>
                                </tr>
                            </thead>
                            {indFilteredData.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.B_Yield}</td>
                                        <td>{item.B_Y_w}</td>
                                        <td>{item.B_Y_m}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                        </Col>
                        <Col>
                        <h3>USA</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Yield</th>
                                    <th>Week Ago</th>
                                    <th>Month Ago</th>
                                </tr>
                            </thead>
                            {usFilteredData.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.B_Yield}</td>
                                        <td>{item.B_Y_w}</td>
                                        <td>{item.B_Y_m}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h3>UK</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Yield</th>
                                    <th>Week Ago</th>
                                    <th>Month Ago</th>
                                </tr>
                            </thead>
                            {ukFilteredData.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.B_Yield}</td>
                                        <td>{item.B_Y_w}</td>
                                        <td>{item.B_Y_m}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                        </Col>
                        <Col>
                        <h3>Germany</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Yield</th>
                                    <th>Week Ago</th>
                                    <th>Month Ago</th>
                                </tr>
                            </thead>
                            {gerFilteredData.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.B_Yield}</td>
                                        <td>{item.B_Y_w}</td>
                                        <td>{item.B_Y_m}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                        </Col>
                    </Row>
        </div>
    )
}
export default BondsList;


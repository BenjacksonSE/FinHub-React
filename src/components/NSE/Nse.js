import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Label, LabelList } from 'recharts';
// import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory';


const Brief = () => {
    const [iq, setIq] = useState([]);
    const [im, setIm] = useState([]);
    const [gainer, setGainer] = useState([]);
    const [looser, setLooser] = useState([]);
    const [symArray, setSymArray] = useState([]);

    useEffect(() => {
        getIq();
        getIm();
        getGainer();
        getLooser();
    },[])
    const getIq = () => {
        axios.get('http://127.0.0.1:8000/IndexQ')
             .then(res => setIq(res.data))
    }
    const getIm = () => {
        axios.get('http://127.0.0.1:8000/IndexM')
             .then(res => setIm(res.data))
             console.log(im)
    }
    const getGainer = () => {
        axios.get('http://127.0.0.1:8000/GainersL')
             .then(res => setGainer(res.data))
    }
    const getLooser = () => {
        axios.get('http://127.0.0.1:8000/LoosersL')
             .then(res => setLooser(res.data))
    }

    return (
        <div>
            <Row>
              <Col>
                <BarChart width={600} height={ 220} data={gainer} margin={{ top: 5, right: 5, bottom: 5, left: 5 }} >
                    <CartesianGrid strokeDasharray="3 3" /> 
                    <XAxis dataKey="Symbol" />
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="p_c" fill="#8884d8"></Bar>
                </BarChart>
             </Col>
             <Col>
                <BarChart width={600} height={220} data={looser}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Symbol" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="p_c" fill="#8884d8"><LabelList dataKey="p_c" position="top" /></Bar>
                </BarChart>
              </Col>
            </Row>
            <Row>
                <Col>
                <BarChart width={600} height={220} data={im}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Advances" fill="#8884d8" />
                    <Bar dataKey="Decline" fill="#82ca9d" />
                </BarChart>
                </Col>
                <Col>
                <BarChart width={600} height={220} data={iq}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="p_c" fill="#8884d8" />
                </BarChart>

                </Col>
            </Row>

                
        </div>    
    )
}
export default Brief; 

{/* <VictoryChart
domainPadding={10}
>  */}
  {/* <VictoryAxis dependentAxis crossAxis
        width={400}
        height={400}
        theme={VictoryTheme.material}
        offsetX={200}
        standalone={false}
  /> */}
{/* <VictoryBar horizontal
    style={{ data: { fill: "#c43a31" } }}
    data={gainer}
    labels={true}
    y="p_c"
    labelComponent={ <VictoryLabel text={({ datum }) => [` ${datum.Symbol}`]}  textAnchor={({ text }) => text.length > 1 ? "start" : "start"}/> }
/> */}
{/* <VictoryAxis /> */}
    {/* {
        gainer.map((item) => {
        return (
            <VictoryAxis dependentAxis
            key={item.p_c}
            label={item.Symbol}
            style={{ tickLabels: { fill: "none" } }}
            axisValue={item.Symbol}
            />
        );
        })
    } */}
{/* </VictoryChart> */}


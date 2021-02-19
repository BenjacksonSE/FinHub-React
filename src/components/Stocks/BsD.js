import React, {useState, useEffect} from 'react';
import axios from "axios";


const Bs_D = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios
             .get("http://localhost:8000/BSView/"+props.name)
             .then(res => setData(res.data))
    }, [])

    return (
        data.map(vard => (        
        <table className="table">
            <thead>
                <tr>
                    <th>RPR</th>
                    <th>CR</th>
                    <th>TFR</th>
                    <th>Cash %</th>
                    <th>WCDE</th>
                    <th>LTDE</th>
                    <th>DE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{(vard.RPR).toFixed(2) }</td>
                    <td>{vard.CR.toFixed(2)}</td>
                    <td>{vard.TFR.toFixed(2)}</td>
                    <td>{vard.CCR.toFixed(2)}</td>
                    <td>{ (vard.STDebt/ vard.Equity).toFixed(2)}</td>
                    <td>{ (vard.LTDebt/ vard.Equity).toFixed(2)}</td>
                    <td>{ (vard.TotalDebt/ vard.Equity).toFixed(2)}</td>
                </tr>
            </tbody>
    
    </table>
    ))
    );
}    
export default Bs_D;

















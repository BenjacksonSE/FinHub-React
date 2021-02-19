import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Card , CardGroup , ListGroup } from 'react-bootstrap';

const Fin_D = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios
             .get("http://localhost:8000/FNSView/"+props.name)
             .then(res => setData(res.data))
    }, [])

    return ( data.map(vard => (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>GP Mgn</th>
                        <th>EBITDA Mgn</th>
                        <th>EBIT Mgn</th>
                        <th>PBT Mgn</th>
                        <th>NP Mgn</th>
                        <th>Depn %</th>
                        <th>Int Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{((vard.gross_profit/vard.t_revenue)*100).toFixed(2)}</td>
                        <td>{ ((vard.ebitda/vard.t_revenue) * 100).toFixed(2)}</td>
                        <td>{ ((vard.ebit/vard.t_revenue) * 100).toFixed(2)}</td>
                        <td>{ ((vard.pbt/vard.t_revenue) * 100).toFixed(2)}</td>
                        <td>{ ((vard.Net_profit/vard.t_revenue) * 100).toFixed(2)}</td>
                        <td>{ ( (vard.depn_chg /((vard.nppe_cy + vard.nppe_ly)/2)) * 100).toFixed(2) }</td>
                        <td>{ ( (vard.int_expense /((vard.debt_ly + vard.debt)/2)) * 100).toFixed(2) }</td>
                    </tr>
                </tbody>
                <thead>
                    <th>Revenue</th>
                    <th>OPR/TR</th>
                    <th>Gross Profit</th>
                    <th>EBITDA</th>
                    <th>EBIT</th>
                    <th>PBT</th>
                    <th>NP</th>
    
                </thead>
                <tbody>
                    <tr key={vard.company_S_B}>
                        <td >{vard.t_revenue/ 10000000}</td>
                        <td>{Math.round(vard.op_revenue/vard.t_revenue).toFixed(2)}</td>
                        <td>{(vard.gross_profit/10000000).toFixed(2)}</td>
                        <td>{(vard.ebitda/10000000).toFixed(2)}</td>
                        <td>{(vard.ebit/10000000).toFixed(2)}</td>
                        <td>{(vard.pbt/ 10000000).toFixed(2)}</td>
                        <td>{(vard.Net_profit/10000000).toFixed(2)}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>D.EPS</th>
                        <th>Dilution</th>
                        <th>Tax Rate</th>
                        <th>Assets Increase</th>
                        <th>Debt Increase</th>
                        <th>Int Assets Inc</th>
                        <th>Intangible Assets /FA %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{vard.d_eps}</td>
                        <td>{Math.round(1 - (vard.b_eps/vard.d_eps)).toFixed(2)}</td>
                        <td>{(vard.tax_rate * 100).toFixed(2)}</td>
                        <td>{ ((vard.nppe_cy - vard.nppe_ly)/10000000).toFixed(2)}</td>
                        <td>{((vard.debt - vard.debt_ly)/10000000).toFixed(2)}</td>
                        <td>{((vard.int_assets_cy - vard.int_assets_ly)/10000000).toFixed(2)}</td>
                        <td>{( vard.int_assets_cy/ (vard.int_assets_cy + vard.nppe_cy)).toFixed(2)}</td>
                    </tr>
                </tbody>
        
        </table>
        <CardGroup>
                <Card style={{ width: '18rem' }}>
                <Card.Header>FUNDAMENTALS</Card.Header>
                   
                       <ListGroup variant="flush">
                        <ListGroup.Item> { ( parseFloat(vard.tax_rate) > 0.25 ) ? "Paying high taxes" : (parseFloat(vard.tax_rate ) > 0.20) ? "Normal tax rate" : 
                                            (parseFloat(vard.tax_rate) < 0.15) ? "Tax Rate is really Low" : "Below Normal tax"  } </ListGroup.Item>                     
                        <ListGroup.Item> { (vard.pbt/vard.t_revenue) > 0.5 ? ("Excellent PBT Margins - "+((vard.pbt/vard.t_revenue) * 100).toFixed(2)) : (vard.pbt/vard.t_revenue) > 0.3 ?
                                         ("Great PBT margin - "+((vard.pbt/vard.t_revenue) * 100).toFixed(2)) : (vard.pbt/vard.t_revenue) > 0.2 ? ("Decent PBT Margins - "+((vard.pbt/vard.t_revenue) * 100).toFixed(2)) : 
                                         (vard.pbt/vard.t_revenue) > 0.1 ? ("Okayish PBT margin - "+((vard.pbt/vard.t_revenue) * 100).toFixed(2)) : ("Poor PBT Margins - "+((vard.pbt/vard.t_revenue) * 100).toFixed(2))  } </ListGroup.Item>
                        <ListGroup.Item>{ (vard.ebit/vard.t_revenue) > 0.5 ? ("Excellent EBIT Margins - "+((vard.ebit/vard.t_revenue) * 100).toFixed(2)) : (vard.ebit/vard.t_revenue) > 0.3 ?
                                         ("Great EBIT margin - "+((vard.ebit/vard.t_revenue) * 100).toFixed(2)) : (vard.ebit/vard.t_revenue) > 0.2 ? ("Decent EBIT Margins - "+((vard.ebit/vard.t_revenue) * 100).toFixed(2)) : (vard.ebit/vard.t_revenue) > 0.1 ?
                                          ("Okayish EBIT margin - "+((vard.ebit/vard.t_revenue) * 100).toFixed(2)) : ("Poor EBIT Margins - "+((vard.ebit/vard.t_revenue) * 100).toFixed(2))  }</ListGroup.Item>
                        <ListGroup.Item> {  "TBF"  }</ListGroup.Item>
                       </ListGroup>
                       <Card.Footer></Card.Footer>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>ASSETS/DEBT</Card.Header>
                    <ListGroup variant="flush">                  
                        <ListGroup.Item>{"Assets increased by "+ (((vard.nppe_cy / vard.nppe_ly) - 1) * 100).toFixed(2) + "%" }</ListGroup.Item>
                        <ListGroup.Item> { ( (vard.nppe_cy - vard.nppe_ly)  /(vard.debt - vard.debt_ly)) > 1.5
                                            ? "Cash flow funded Investment" :  ( (vard.nppe_cy - vard.nppe_ly)  /(vard.debt - vard.debt_ly)) > 1.0 ?
                                                "Mostly debt funded Investment" : "Entirely Debt funded Investment" }   </ListGroup.Item>
                        <ListGroup.Item>{ ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) > 0.2 ? ("Good Depn rate at "+( ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) * 100).toFixed(2) +"%")
                                         : ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) > 0.14 ? ("Decent Depn rate at "+( ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) * 100).toFixed(2)+"%")
                                         : ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) > 0.07 ? ("Below par Depn rate at "+( ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) * 100).toFixed(2)+"%") :
                                         ("Pathetic Depn rate at "+( ( vard.depn_chg / ( ( (vard.nppe_cy + vard.nppe_cy)/ 2) +  ( (vard.int_assets_cy + vard.int_assets_ly)/ 2) ) ) * 100).toFixed(2)+"%") }</ListGroup.Item>
                        <ListGroup.Item>{   ("Debt increased by "+ (((vard.debt / vard.debt_ly) - 1) * 100).toFixed(2) + "%") }</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer></Card.Footer>
                </Card>
        </CardGroup>
        </div>
        )
    )
    )
}
export default Fin_D;











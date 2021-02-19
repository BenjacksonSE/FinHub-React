import './App.css';
import Navgbar from './components/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StockList from './components/Stocks/Stocklist';
import News from './components/News/News';
import Issues from './components/Issues/Issues';
import { createBrowserHistory } from 'history';
import BondsList from './components/Bonds/BondsList';
import CommList from './components/Commodities/CommList';
import Brief from './components/NSE/Nse';
import FII_Chart from './components/NSE/FII_Ch';
// import * as V from 'victory';


function App() {
  const createBrowserHistory = require('history').createBrowserHistory;
  return (
    
    <BrowserRouter>
    <div>
      <Navgbar />
      <Switch>
        <Route exact path="/stocks"  component={StockList} ></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/issues" component={Issues}></Route>
        <Route exact path="/bonds" component={BondsList}></Route> 
        <Route exact path='/commodities' component={CommList}></Route>
        <Route exact path='/NSEBrief' component={Brief}></Route>
        <Route exact path='/FII_DII' component={FII_Chart}></Route>
      </Switch>
    </div>
  
  </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nav from './Nav'
import Home from './Components/Home'
import Life from './Components/Life'
import Love from './Components/Love'
import Cover from './Components/Cover'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(){
  return(

    <Router>
<div className="App">
<Cover />
<Nav />
<Switch>
<Route exact path='/' component={Home} />
<Route path='/life' component={Life} />
<Route path='/love' component={Love} />
{/* <Route path='/cover' component={Cover} /> */}
</Switch>
</div>
</Router>
  )
}






export default App;

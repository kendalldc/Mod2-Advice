import React from 'react';
import './App.css';
import Nav from './Nav'
import Home from './Components/Home'
import Life from './Components/Life'
import Love from './Components/Love'
import Cover from './Components/Cover'
import About from './Components/About'

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
{/* <Cover /> */}
<Switch>
<Route exact path='/' component={Cover} />
<Route exact path='/home' component={Home} />
<Route exact path='/about' component={About} />
<Route path='/life' component={Life} />
<Route path='/love' component={Love} />
{/* <Route path='/cover' component={Cover} /> */}
</Switch>
<Nav />

</div>
</Router>
  )
}






export default App;

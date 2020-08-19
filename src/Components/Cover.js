import React from 'react';
// import {Link} from 'react-router-dom';
import Enter from './Enter'


function Cover (){
    return(
        <div className="cover">
<div className="primary-nav"></div>
<h1 className="cover-Text" > ADVISE ME.</h1>  <br/>     
{/* <Link to="/home"><button className="cover-Button">Enter</button></Link> */}
<Enter/>
 </div>
    )
}




export default Cover
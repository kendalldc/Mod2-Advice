import React from 'react';
import {Link} from 'react-router-dom';


function Cover (){
    return(
        <div className="cover">
<div className="primary-nav"></div>
<h1 className="cover-Text" > ADVISE ME.</h1>       
<Link to="/home"><button className="cover-Button">Enter</button></Link>

 </div>
    )
}




export default Cover
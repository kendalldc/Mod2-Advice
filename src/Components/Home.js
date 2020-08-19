import React from 'react';
import {Link} from 'react-router-dom';



function Home (){
    return(
        
<div className="Home">
   <h1 className="home-Advise"> What's your <br/> Vice?</h1>
   {/* <h2 className="home-Vice">What's your Vice?</h2>  */}

   <div>
  <Link to='/love'> <button className="vice-buttons">Love</button></Link>  <Link to='/life'><button  className="vice-buttons">Life</button></Link>
</div>
</div>
        )
    
}
    


export default Home

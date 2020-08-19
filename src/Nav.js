import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){

  
  return(
<nav>
    <h3>
      <Link className='nav-Link-Home' to='/'>Advise Me.</Link>
      </h3>
        <ul className='nav-Links'>
          
         <Link  className='nav-Link' to='/life'>
         <li>Life</li>
         </Link>
         
         <Link className='nav-Link'to='/love'>
           <li>Love</li>
           </Link>
        </ul>
</nav>
  )
}





export default Nav;

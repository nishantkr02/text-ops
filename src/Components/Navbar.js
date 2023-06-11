import React from 'react';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (


<div className='container my'>
      
<nav className="navbar navbar-expand bg-primary-subtle shadow my-3  ">
  <div className="container-fluid">
    <h1 className='text-primary p-2   '>TextOps.</h1> 
     
      <ul className="navbar-nav me-2 mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active fs-4 " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item  ">
          <Link className="nav-link fs-4" to="/About">About</Link>
        </li>
      
      </ul>
      
   

  </div>
</nav>
    </div>
  )
}

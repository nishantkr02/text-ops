import React from 'react';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (


    <div className='container my-'>
      
<nav className="navbar navbar-expand bg-primary-subtle shadow my-3  ">
  <div className="container-fluid">
    <h1 className='text-primary p-2  m-auto '>TextOps.</h1> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active fs-3 " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-3" to="/About">About</Link>
        </li>
      
      </ul>
      
    </div>

  </div>
</nav>
    </div>
  )
}

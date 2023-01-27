import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>

<header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal"><Link className="p-2" to="/Welcome">Welcome</Link></h5>
            <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2" to="/Login">Login</Link>
            <Link className="p-2" to="/SignUp">Sign Up</Link>
            
            </nav>
          </div>
        </header>
       
    </div>
  )
}

export default Header
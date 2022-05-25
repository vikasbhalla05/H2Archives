import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" to="/patient/login">Patient Login</Link>
                <Link className="nav-link" to="/doctor/login">Doctor Login</Link>
                <Link className="nav-link" to="/patient/dashboard">Patient Dashboart</Link>
                <Link className="nav-link" to='/doctor/dashboard'>Doctor Dashboard</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

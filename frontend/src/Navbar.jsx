import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
    className="navbar navbar-expand-sm navbar-light bg-light"
>
    <div className="container">
        <a className="navbar-brand" href="#">Logo</a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">contact</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

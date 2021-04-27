import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-md-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand"><Link to={`/`} className="regularLink">Ecommerce</Link></span>
                <div className="d-md-none">
                    <Link to={`/cart`} className="regularLink">
                        <CartWidget />
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex w-75 justify-content-around mx-auto">
                        <li className="nav-item">
                            <NavLink to={`/items`} activeClassName="activeLink" className="nav-link regularLink">Hombre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/items`} activeClassName="activeLink" className="nav-link regularLink">Mujer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/items`} activeClassName="activeLink" className="nav-link regularLink">Niños</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/items`} activeClassName="activeLink" className="nav-link regularLink">Niñas</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-md-block ">
                    <Link to={`/cart`} className="regularLink">
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
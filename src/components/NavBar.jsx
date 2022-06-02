import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/' >Hercules</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
                         </li>
                         <li className="nav-item">
                        <NavLink className="nav-link" to='/categoria/dj'>DJ</NavLink>
                         </li>
                         <li className="nav-item">
                        <NavLink className="nav-link" to='/categoria/audio'>AUDIO</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/cart'><CartWidget/></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar
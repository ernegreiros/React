import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <Link to="/" className="brand-logo" style={{ marginLeft: "1%" }}>Olosco</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/Graficos"><i class="material-icons">show_chart</i></Link></li>
                        <li><Link to="/Cards"><i class="material-icons">widgets</i></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;
import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <LinkWrapper to="/" className="brand-logo" activeStyle={{}} style={{ marginLeft: "1%" }}>React app</LinkWrapper>
                    <ul className="right hide-on-med-and-down">
                        <li><LinkWrapper to="/Graficos"><i className="material-icons">show_chart</i></LinkWrapper></li>
                        <li><LinkWrapper to="/Cards"><i className="material-icons">widgets</i></LinkWrapper></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;
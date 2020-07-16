import React, { Fragment } from 'react';
import NavBar from '../../Components/NavBar/NavBar';

const NotFound = () => {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <h1>NotFound</h1>
            </div>
        </Fragment>
    );
}

export default NotFound;
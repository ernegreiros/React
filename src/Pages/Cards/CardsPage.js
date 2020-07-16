import React, { Fragment } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Card from '../../Components/Card/Card';

const Cards = () => {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <h1>Pagina com Cards</h1>
                <div className="row">
                    <div className="col s6"><Card size='medium'/></div>
                    <div className="col s6"><Card size='medium'/></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col s12"><Card size='large' /></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Cards;
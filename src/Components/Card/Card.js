import React from 'react';

const Card = (props) => {
    const {size} = props;
    return (
        <div className="row">
            <div className="col s12 ">
                <div className={"card" + size}>
                    <div className="card-image">
                        <img className="responsive-img" alt="Card logo" src="https://www.hypeness.com.br/wp-content/uploads/2018/01/EDIT_Pocaterra-Ridge-in-Kananaskis-Country-CD.jpg" />
                        <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
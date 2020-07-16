import React, { Fragment } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import AreaChart from '../../Components/Charts/AreaChart';
import ChartPie from '../../Components/Charts/PieChart';
import ChartComposed from '../../Components/Charts/ComposedChart';

const Charts = () => {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <h1>Página com Gráficos</h1>
                <div className="row">
                    <div className="col s6"><AreaChart /></div>
                    <div className="col s6"><ChartPie /></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col s12"><ChartComposed /></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Charts;
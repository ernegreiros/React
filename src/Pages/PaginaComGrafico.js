import React, { Fragment } from 'react';
import NavBar from '../Components/NavBar';
import GraficoArea from '../Components/BarChart';
import GraficoPizza from '../Components/PieChart';
import GraficoComposto from '../Components/ComposedChart';

const Graficos = () => {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <h1>Página com Gráficos</h1>
                <div className="row">
                    <div className="col s6"><GraficoArea /></div>
                    <div className="col s6"><GraficoPizza /></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col s12"><GraficoComposto /></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Graficos;
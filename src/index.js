import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Graficos from './Pages/PaginaComGrafico';
import NotFound from './Pages/NotFound';
import Cards from './Pages/PaginaComCards';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/Graficos' component={Graficos} />
      <Route path='/Cards' component={Cards} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

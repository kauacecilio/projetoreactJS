import React from 'react';
import './assets/css/base/base.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import SubCategorias from './paginas/SubCategorias';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route path='*'>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import CadastroVideo from './pages/cadastro/video'; 
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/" component={home} exact />
    </switch>
  </BrowserRouter>, 
  document.getElementById('root')
);




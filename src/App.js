import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './page/Home_page';
import Login from './components/Login';
import Formulario from './components/Formulario';
import Navegation from './page/Navegation';


function App() {
  return (
      <Router>
        <Navegation/>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/login" component = {Login}/>
        <Route path = "/create" component = {Formulario}/>

      </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container d-flex justify-content-between">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <span className="navbar-text">Aluno: Brenno Elimar</span>
        </div>
      </Navbar>
    </div>
  );
}

export default App;

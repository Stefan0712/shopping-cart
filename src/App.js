import React, {useState} from "react";
import {Outlet, Link} from 'react-router-dom'
import './styles/app.css'
function App() {
  return (
    <div className="page">
    <nav>
        <div className="title">
          <div className="logo"><img src='./images/logo.png' alt='logo'></img></div>
        </div>
        <Link to='Home'>Home</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;

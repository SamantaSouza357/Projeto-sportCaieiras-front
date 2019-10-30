import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Navbar from './componentes/Navbar.js';
import Header from './componentes/Header.js';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>

    </div>
  );
}

export default App;

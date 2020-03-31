import React from 'react';
import './App.css';

import Header from './common/template/Header'
import Routes from './main/Routes'
import Footer from './common/template/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

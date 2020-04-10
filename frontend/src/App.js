import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom'

import Header from './common/template/Header'
import Routes from './main/Routes'
import Footer from './common/template/Footer'
import Messages from './common/msg/Messages'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes />
        <Footer />
        <Messages />
      </HashRouter>
    </div>
  );
}

export default App;

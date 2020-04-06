import React from 'react';
import './App.css';

import Header from './common/template/Header'
import Routes from './main/Routes'
import Footer from './common/template/Footer'
import Messages from './common/msg/Messages'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
      <Messages />
    </div>
  );
}

export default App;

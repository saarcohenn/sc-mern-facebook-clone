import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widget from './Components/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      {/* header */}
      {/* Sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;

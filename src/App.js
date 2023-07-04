import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import EmailList from './Components/Email List/EmailList';
import Compose from './Components/Compose/Compose';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <EmailList />
      </div>
      <Compose />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import EmailList from './Components/Email List/EmailList';
import Compose from './Components/Compose/Compose';
import { useSelector } from 'react-redux';

function App() {
  const isComposeOpen = useSelector(state => state.mail.isComposeOpen)
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <EmailList />
      </div>
      {isComposeOpen && <Compose />}
    </div>
  );
}

export default App;

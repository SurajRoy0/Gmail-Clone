import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import EmailList from './Components/Email List/EmailList';
import Compose from './Components/Compose/Compose';
import { useSelector } from 'react-redux';
import EmailBody from './Components/EmailBody/EmailBody';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn'
import SentEmails from './Components/Email List/SentEmails';
import SentEmailBody from './Components/EmailBody/SentEmailBody'

function App() {
  const isComposeOpen = useSelector(state => state.mail.isComposeOpen)
  const user = useSelector(state => state.auth.user)
  return (
    <>
      {user ? (
        <div className="app">
          <Header />
          <div className="app__body">
            <SideBar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/sent" element={<SentEmails />} />
              <Route path="/emails/:emailId" element={<EmailBody />} />
              <Route path="/sent/:emailId" element={<SentEmailBody />} />
            </Routes>
          </div>
          {isComposeOpen && <Compose />}
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;

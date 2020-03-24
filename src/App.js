import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import MarketingInfo from './Components/MarketingInfo';
import OptForm from './Components/OptForm';
import { AppWrap } from './Components/styledComps/styles';

function App() {
  return (
    <>
      <Nav />

      <AppWrap>
        <OptForm />
        <MarketingInfo />
      </AppWrap>
    </>
  );
}

export default App;

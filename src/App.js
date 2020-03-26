import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import MarketingInfo from './Components/MarketingInfo';
import OptForm from './Components/OptForm';
import { AppWrap, FormOverlay } from './Components/styledComps/styles';

function App() {
  const [displayAnim, setDisplayAnim] = useState({
    opacity: 0,
    display: 'none'
  });
  const [displayInfo, setDisplayInfo] = useState({
    opacity: 1,
    display: 'flex'
  });

  const onHide = () => {
    setDisplayAnim({
      opacity: 0,
      display: 'none'
    });
    setDisplayInfo({
      opacity: 1,
      display: 'flex'
    });
  };
  const onShow = () => {
    setDisplayAnim({
      opacity: 1,
      display: 'flex'
    });
    setDisplayInfo({
      opacity: 0,
      display: 'none'
    });
  };
  return (
    <>
      <Nav onShow={onShow} />
      <FormOverlay
        className='overlay hide'
        style={{ ...displayAnim, opacity: displayAnim.opacity }}
      >
        <OptForm onHide={onHide} onShow={onShow} displayAnim={displayAnim} />
      </FormOverlay>
      <AppWrap
        className='appwrap'
        style={{ ...displayInfo, opacity: displayInfo.opacity }}
      >
        <MarketingInfo onShow={onShow} displayInfo={displayInfo} />
      </AppWrap>
    </>
  );
}

export default App;

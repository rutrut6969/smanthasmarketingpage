import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import MarketingInfo from './Components/MarketingInfo';
import OptForm from './Components/OptForm';
import About from './Components/About';
import { AppWrap, FormOverlay } from './Components/styledComps/styles';
import { removeHide, addHide } from './Components/functions/styleselectors';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path='/about'>
          <Nav onShow={removeHide} />
          <FormOverlay className='overlay hide animIn'>
            <OptForm onHide={addHide} onShow={removeHide} />
          </FormOverlay>
          <AppWrap className='appwrap'>
            <About onShow={removeHide} />
          </AppWrap>
        </Route>
        <Route path='/'>
          <Nav onShow={removeHide} />
          <FormOverlay className='overlay hide animIn'>
            <OptForm onHide={addHide} onShow={removeHide} />
          </FormOverlay>
          <AppWrap className='appwrap'>
            <MarketingInfo onShow={removeHide} />
          </AppWrap>
        </Route>
      </Switch>
    </>
  );
}

export default App;

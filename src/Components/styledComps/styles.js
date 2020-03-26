import React from 'react';
import styled from 'styled-components';

export const NavWrap = styled.section`
  width: 100%;
  height: 8vh;
  background-color: rgba(245, 95, 198, 0.69);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.7);
  box-shadow: 2px 2px 15px rgba(117, 26, 89, 0.77);
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: black;
  width: 15%;
  text-align: center;
  padding: 1%;
  font-weight: bold;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
    box-shadow: 1px 1px 5px black;
    border-radius: 10px;
    transition: 0.2s ease-in;
  }
`;

export const AppWrap = styled.div`
  background-color: rgba(247, 49, 186, 0.7);
  height: 100vh;
  z-index: -1;
  width: 100%;
  padding-top: 4%;
  padding-left: 2%;
  padding-left: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;
export const MarketingInfoBody = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 5%;
  padding: 2%;
  border-radius: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.7);
  flex-flow: column wrap;
`;
export const Info = styled.p`
  width: 95%;
  text-align: left;
  color: rgba(211, 211, 211, 0.85);
`;

export const Cta = styled.button`
  background-color: rgba(245, 95, 198, 0.69);
  height: 30px;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 10px rgba(117, 26, 89, 0.77);
  border-radius: 5px;

  &:hover {
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.77);
    cursor: pointer;
    transition: 0.2s ease;
    background-color: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 0.1);
  }
`;
export const Opt = styled.form`
  display: flex;
  flex-flow: column;
  width: 35%;
  height: 300px;
  background-color: rgba(211, 211, 211, 0.7);
  /* align-self: center; */
  /* justify-self: center; */
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(211, 211, 211);
`;

export const OptInput = styled.input`
  border: none;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
  width: 35%;
  height: 20px;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  margin: 2%;

  &:-webkit-autofill {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
  }
`;

export const Message = styled.textarea`
  border: none;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
  background-color: transparent;
  border-radius: 5px;
`;
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
`;
export const FormOverlay = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Close = styled.p`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  }
`;

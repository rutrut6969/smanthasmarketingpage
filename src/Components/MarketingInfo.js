import React from 'react';
import {
  MarketingInfoBody,
  Info,
  Cta,
  H1,
  MarketWrap,
  IntroWrap,
  ImageWrap,
  Image
} from './styledComps/styles';
import { Link } from 'react-router-dom';

const MarketingInfo = props => {
  return (
    <>
      <MarketWrap className='marketWrap'>
        <IntroWrap className='introWrap'>
          <H1>I'm Here to Assist You!</H1>
          <MarketingInfoBody className='genInfo'>
            <Info>
              Hey there, I'm a Social Marketing specialist, and virtual
              assistant. I'm here to assist you in your endeavors. My name is
              Samantha Lee, and here's a few of my data entries for previous
              clients:
            </Info>
            <Cta onClick={props.onShow}>Check it out!</Cta>
          </MarketingInfoBody>
          <div className='img'></div>
        </IntroWrap>
        <IntroWrap className='introWrap switch'>
          <div className='img2'></div>
          <MarketingInfoBody className='marketInfo'>
            <Info>
              I'd also like to tell you a little about what I do!
              <br />
              I'm a professional model/actress as declared on my about page,{' '}
              <Link className='facebook' to='/about'>
                here
              </Link>{' '}
              On top of being a virtual Assistant I'm also a social media
              marketer,which I've been doing for 3 years now! I advertise for
              clients via posts on my social media:{' '}
              <a
                href='https://www.facebook.com/sushiimamamodel'
                className='facebook'
              >
                My Facebook Page
              </a>{' '}
              <br />
              Here's a social media ad for you!
            </Info>
            <Cta onClick={props.onShow}>Get Ahold Of Me!</Cta>
          </MarketingInfoBody>
        </IntroWrap>
      </MarketWrap>
    </>
  );
};
export default MarketingInfo;

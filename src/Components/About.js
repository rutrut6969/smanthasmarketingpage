import React from 'react';
import {
  Info,
  AboutInfo,
  AboutWrap,
  H1,
  H3,
  VidWrap,
  Cta
} from './styledComps/styles';

export default function About(props) {
  return (
    <>
      <H1>My name is Samantha</H1>
      <AboutWrap className='aboutWrap'>
        <AboutInfo className='aboutInfo'>
          <Info>
            <p>
              I suffer from P.T.S.D and have been through severe traumatic
              events. I don't let that stop me. I am a signed, published model,
              and actress of 8 years. I'm signed to POPM ENT. INC. as a POPM
              ELITE MODEL. I started modeling when I was just 14. My mother put
              me in a modeling school where I learned the basic poses, runway,
              fashion, and photo shoots. I got my certificate from there and
              started working with a famous Red Sox player, then modeling for
              them. I did a few fashion shows as well as a few plays for
              theater. This was back in my home state of Massachusetts. I also
              took dance, advanced hip hop, jazz, ballet, and gymnastics. I
              moved to Pennsylvania when I was 20 and continued to shoot with
              local photographers and film makers. I ended up being published in
              8 magazines. Then I finished my first couple of modeling,
              promotional videos on YouTube.
            </p>
          </Info>
          <Cta onClick={props.onShow}>Hire Me!</Cta>
        </AboutInfo>
        <VidWrap className='vidWrap'>
          <H3>Check out my video!</H3>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/tYT1en0By4E'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            className='video'
          ></iframe>
        </VidWrap>
        <AboutInfo className='aboutInfo'>
          <Info>
            <p>
              I model because I've been through so much abuse growing up. There
              have been many times I wanted to give up . So many people who told
              me I could never make it . I'm here to prove them wrong . I'm here
              to let them know the black sheep can win too. My absolute dream an
              goal for modeling, as in the long run would be to mentor younger
              models, train them and help them get booked for gigs, but first I
              have a few personal goals I want to accomplish, like be in a Music
              Video or a T.V. show. I would love to be hosted for a radio
              interview and make cover one day . This is my career . I take this
              very seriously . I will not stop until I reach my dreams ! Lots of
              new and exciting things coming ! Stay tuned and follow my journey
              ! And remember it's not the outside that matters . But what's on
              the inside that really truly counts.
            </p>
          </Info>
          <Cta onClick={props.onShow}>Hire Me!</Cta>
        </AboutInfo>
      </AboutWrap>
    </>
  );
}

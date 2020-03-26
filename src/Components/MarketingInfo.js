import React from 'react';
import { MarketingInfoBody, Info, Cta } from './styledComps/styles';
import { removeHide } from '../hide';
const MarketingInfo = props => {
  return (
    <MarketingInfoBody className='genInfo'>
      <Info>
        Hi ! My name is Samantha and I’m a signed and published full time
        model/actress my side gig is a virtual assistant. I do social media
        marketing advertising emails and data entry’s I’ve helped multiple
        ladies and am very negotiable I did plans with a couple lady’s . I offer
        3 different monthly packages. First package is the beginners package I
        charge 175$ for one month of posts including hashtags captions quotes
        and pictures . . Pretty much your the boss and you tell me how you want
        it to look and I make the posts ! This is for all social media accounts
        . My second package is the pro package for 350$ that includes everything
        in first packaging plus daily advertising and marketing of your company
        . Third package is boss babe package for 500$ , includes everything
        mentioned in first two packages plus data entry’s you may need done . I
        can also show examples and review from last client from this group 🙂 I
        would be more then happy to assist you as well just let me know if this
        is something you are interested in !
      </Info>
      <Cta onClick={props.onShow}>Check it out!</Cta>
    </MarketingInfoBody>
  );
};
export default MarketingInfo;

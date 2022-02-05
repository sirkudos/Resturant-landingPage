import React from 'react';
import { SubHeading } from '../../components';

import {images} from '../../constants'

import './Header.css';

const Header = () => {
  return (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading
       title="Chase the new flavour"
      />
      <h1 className="app__header-h1">The Key to To Fine Dining</h1>
      <p className="p__opensans" style={{margin:"2rem 0"}}>kind check for your best food in town and dont 
          miss thing out as we are about to start the show.
      </p>
      <button type='button' className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
       <img src={images.welcome} alt="header img" />
    </div>
  </div>

  )
};

export default Header;

import React from 'react';
import {
  Router,
  Route,
} from 'react-router'

import HeaderContainer from '../../containers/HeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import HomeContainer from '../../containers/HomeContainer'

const Main = (props) => { 
  return (
    <div>
      <HeaderContainer />

      <Route exact path="/" component={HomeContainer} />

      <FooterContainer />
    </div>
  )  

}

export default Main;

import React,{Component} from 'react';
import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import Styles from './style.css';

const MyComponent = () => (
  <AutoPlaySwipeableViews>
    <div className={Styles.slider} >
      <img src="//s2.juancdn.com/bao/161019/0/0/5807329a151ad1c3038b457c_750x290.jpg?iopcmd=convert&Q=80&dst=jpg"/>
    </div>
    <div className={Styles.slider}>
      <img src="//s2.juancdn.com/bao/161020/5/e/58081bf9151ad153388b4593_750x290.jpg?iopcmd=convert&Q=80&dst=jpg"/>
    </div>
    <div className={Styles.slider}>
      <img src="//s2.juancdn.com/bao/161020/4/a/58081f21151ad1bd388b459b_750x290.jpg?iopcmd=convert&Q=80&dst=jpg"/>
    </div>
    <div className={Styles.slider}>
      <img src="//s2.juancdn.com/bao/161020/1/3/580820ab151ad153388b45c7_750x290.jpg?iopcmd=convert&Q=80&dst=jpg"/>
    </div>
    <div className={Styles.slider}>
      <img src="//s2.juancdn.com/bao/161020/f/a/58083d2e151ad13f208b45c9_750x290.jpg?iopcmd=convert&Q=80&dst=jpg"/>
    </div>
  </AutoPlaySwipeableViews>
);


export default MyComponent;

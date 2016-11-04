import React, {Component} from 'react'
import {render} from 'react-dom';

import { Router, Route, Link,browserHistory } from 'react-router'


import './common/main.css';//使用require导入css文件

import Greeter from './component/greeter/Greeter';
import Header from './component/header/header';
import Banner from './component/banner/banner';
import Footer from './component/footer/footer';


class AppDemo extends Component{
  render() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    );
  }
}

render(<AppDemo/>, document.getElementById('root'));

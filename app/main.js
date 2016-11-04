import React,{Component} from 'react';
import { render } from 'react-dom';
import { browserHistory,hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import style from './common/main.css';
import './common/font-awesome/css/font-awesome.css';  //引入font-awesome,需要安装 file-loader，并且在webpack中配置
import FontAwesome from './common/utils/setrem';

/*--------------------导入底部菜单组件------------------*/
import Footer from './component/footer/footer';


/*--------------------导入各个模块------------------*/
import Home       from    './module/zhekou/home';
import Jujia      from    './module/jujia/list';
import Global     from    './module/global/global';
import Cart       from    './module/cart/cart';
import Mine       from    './module/mine/mine';

import HomeContent from './module/content/';


/*--------------------调用dender方法，渲染路由------------------*/
render((
  <Router history={hashHistory}>
    <Route path="/" component={Footer}>
      <IndexRoute component={Home}/>

      <Route path="/home" component={Home}>
        <Route path="cate/:cateID" component={HomeContent} />
      </Route>

      <Route path="/jujia" component={Jujia} />
      <Route path="/global" component={Global} />
      <Route path="/cart" component={Cart} />
      <Route path="/mine" component={Mine} />
    </Route>
  </Router>
), document.getElementById('root'))

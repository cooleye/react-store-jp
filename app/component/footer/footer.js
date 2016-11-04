import React, {Component} from 'react';
import styles from './footer.css';//导入
import {Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ajax from '../../common/utils/ajax';

let Footer = ({ children, location }) =>{

  return(
    <div className={styles.cover}>
      <div className={styles.container}>

            <div className={styles.item}>
              <Link to="/home/cate/上新">
                <div className={styles.item_up}><img src="http://s2.juancdn.com/bao/160823/9/a/57bbb0be151ad154148b45f7_72x72.png"/></div>
                <div className={styles.item_down}><span>今日折扣</span></div>
              </Link>
            </div>

            <div className={styles.item}>
              <Link to="/jujia">
              <div className={styles.item_up}><img src="http://s2.juancdn.com/bao/160823/8/7/57bbb0cf151ad16c278b45b2_72x72.png"/></div>
              <div className={styles.item_down}><span>居家馆</span></div>
              </Link>
            </div>

            <div className={styles.item}>
              <Link to="/global">
              <div className={styles.item_up}><img src="http://s2.juancdn.com/bao/160914/9/b/57d8ca80151ad15b618b4584_72x72.png"/></div>
              <div className={styles.item_down}><span>全球购</span></div>
              </Link>
            </div>

            <div className={styles.item}>
              <Link to="/cart">
              <div className={styles.item_up}><img src="http://s2.juancdn.com/bao/160823/0/3/57bbb0f0151ad15a2a8b458f_72x72.png"/></div>
              <div className={styles.item_down}><span>购物车</span></div>
              </Link>
            </div>

            <div className={styles.item}>
              <Link to="/mine">
              <div className={styles.item_up}><img src="http://s2.juancdn.com/bao/160914/0/d/57d8ca99151ad109618b4584_72x72.png"/></div>
              <div className={styles.item_down}><span>我的卷皮</span></div>
              </Link>
            </div>

      </div>

      <div>
      {React.cloneElement(children, {
        key: location.pathname
      })}
      </div>
    </div>
  )
}




export default Footer;

import React, {Component} from 'react';
import styles from './slidemenu.css';//导入

class Header extends Component{

  render() {

    return (
      <div className={styles.container} >
        <ul style={{width:480}}>
            <li>上新</li>
            <li>女装</li>
            <li>鞋包</li>
            <li>母婴</li>
            <li>居家数码</li>
            <li>男士</li>
            <li>美妆</li>
            <li>美食</li>
        </ul>
      </div>
    );
  }
}

export default Header;

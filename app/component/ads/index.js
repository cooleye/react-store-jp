import React, {Component} from 'react';
import styles from './style.css';//导入



class Menu extends Component{
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.leftPart}>
            <img src="//s2.juancdn.com/bao/161026/8/7/581007d5151ad1fd3b8b4577_375x456.jpg?iopcmd=convert&Q=88&dst=jpg"/>
          </div>

          <div className={styles.rightPart}>
            <div className={styles.topPart}>
              <img src="http://s2.juancdn.com/bao/161024/8/f/580dccf6151ad113298b45f5_375x228.jpg?iopcmd=convert&Q=88&dst=jpg"/>
            </div>
            <div className={styles.bottomPart}>
              <img src="//s2.juancdn.com/bao/161012/8/2/57fdadda151ad144548b458b_375x228.jpg?iopcmd=convert&Q=88&dst=jpg"/>
            </div>
          </div>
      </div>
    );
  }
}

export default Menu;

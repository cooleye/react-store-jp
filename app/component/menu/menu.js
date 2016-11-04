import React, {Component} from 'react';
import styles from './menu.css';//导入



class Menu extends Component{
  render() {
    return (
      <div className={styles.container}>
          <ul>

          <li>
            <div className={styles.topPart}><img src="http://s2.juancdn.com/bao/160905/9/0/57cd1455151ad1f6428b45bf_80x80.png?iopcmd=convert&Q=88&dst=png"/></div>
            <div className={styles.bottomPart}>最后疯抢  </div>
          </li>
          <li>
            <div className={styles.topPart}><img src="http://s2.juancdn.com/bao/160905/0/a/57cd1466151ad1cf368b4621_80x80.png?iopcmd=convert&Q=88&dst=png"/></div>
            <div className={styles.bottomPart}>9.9包邮</div>
          </li>
          <li>
            <div className={styles.topPart}><img src="http://s2.juancdn.com/bao/160905/4/8/57cd14a2151ad1e1348b4633_80x80.png%3Fiopcmd=convert&Q=88&dst=png"/></div>
            <div className={styles.bottomPart}>拼团</div>
          </li>
          <li>
            <div className={styles.topPart}><img src="http://s2.juancdn.com/bao/160905/7/4/57cd14a7151ad1ab408b45ab_80x80.png?iopcmd=convert&Q=88&dst=png"/></div>
            <div className={styles.bottomPart}>即将上线</div>
          </li>

          </ul>
      </div>
    );
  }
}

export default Menu;

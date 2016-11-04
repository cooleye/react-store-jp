import React, {Component} from 'react';
import styles from './banner.css';//导入

class Banner extends Component{
  render() {
    return (
      <div className={styles.container}>
          <img src="http://s2.juancdn.com/bao/161027/e/5/581155df151ad185688b45bc_750x290.jpg?iopcmd=convert&Q=80&dst=jpg"/>
      </div>
    );
  }
}

export default Banner;

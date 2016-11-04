import React, {Component} from 'react'
import styles from './global.css';//导入
import Header from '../../component/header/header';
import Swiper from '../../component/swiper/';


class Global extends Component{
  render() {


    return (
      <div className={styles.container}>
        <Header title="全球购" headerStyle={{fontSize:20,fontWeight:600,}}/>
        <div style={{marginTop:45,}}>
          <Swiper/>

        </div>
      </div>
    );
  }
}

export default Global;

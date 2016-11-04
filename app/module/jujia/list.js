import React, {Component} from 'react'

import styles from './list.css';//导入

import Header       from '../../component/header/header';
import SlideMenu    from '../../component/slideMenu/';
import Banner       from '../../component/banner/';
import Menu         from '../../component/menu/menu';
import Ads          from '../../component/ads/';
import Timer        from '../../component/timer/';
import ProductList  from '../../component/productList/';

class List extends Component{
  render() {
    return (
      <div className={styles.container}>
        <Header title="居家馆" headerStyle={{fontSize:20,fontWeight:600,}}/>
        <SlideMenu/>
        <div style={{marginTop:45,}}>
          <Banner/>
          <Menu/>
          <Ads/>
          <Timer/>
          <ProductList url="http://h5.yztctech.net/api/jp/jp_jujia_list.php"/>
        </div>
      </div>
    );
  }
}

export default List;

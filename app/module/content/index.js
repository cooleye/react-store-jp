import React, {Component} from 'react'

import Header       from '../../component/header/header';
import Menu         from '../../component/menu/menu';
import Ads          from '../../component/ads/';
import Timer        from '../../component/timer/';
import ProductList  from '../../component/productList/';
import Swiper from '../../component/swiper/';

import styles from './style.css';

const Content = ({params:{cateID}}) => {

  return(
    <div className={styles.container} >
        <Swiper/>
        <Menu/>
        <Ads/>
        <Timer/>
        <ProductList url="http://h5.yztctech.net/api/jp/jp_zhekou_list.php"/>
    </div>
  )
}

export default Content;

import React, {Component} from 'react'

import styles from './cart.css';//导入

import Header from '../../component/header/header';

class Cart extends Component{
  render() {
    return (
      <div className={styles.container}>
        <Header title="购物车" headerStyle={{fontSize:20,fontWeight:600,}}/>
        <div style={{padding:30,backgroundColor:'#fff',marginTop:45,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <div><img  style={{width:150,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png"/></div>
          <p style={{fontSize:16,fontWeight:600,height:30,}}>购物车还是空荡荡的</p>
          <p style={{height:30,color:'#aaa'}}>快去挑选商品吧</p>
          <div style={{marginTop:20,borderWidth:1,borderColor:'red',borderStyle:'solid',width:150,color:'red',fontSize:14}}>今日特卖</div>
        </div>
      </div>
    );
  }
}

export default Cart;

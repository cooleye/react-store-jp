import React, {Component} from 'react'
import '../../common/font-awesome/css/font-awesome.css';
import FontAwesome from 'react-fontawesome';
import styles from './mine.css';//导入

import Header from '../../component/header/header';

class Mine extends Component{
  render() {
    return (
      <div className={styles.container}>


        <div className={styles.header} style={{fontSize:16,color:'#fff'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{flex:1,justifyContent:'center',alignItems:'center',}}><img style={{width:20,height:20,verticalAlign:'middle',}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?ts=e9d0a80021bd678d_1477538346"/></span><span style={{flex:5}}>个人中心</span><span style={{flex:1}}> </span>
          </div>
          <div style={{display:'flex',paddingBottom:30,}}>
            <div style={{flex:3,textAlign:'right'}}>登陆</div>
            <div style={{flex:2}}>|</div>
            <div style={{flex:3,textAlign:'left'}}>注册
            <FontAwesome
              className='fa-align-justify'
              name='fa'
              size='4x'
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            </div>
          </div>
        </div>


        <div>
          <div style={{display:'flex',backgroundColor:'#fff',}} className={styles.rowItem}>
            <span style={{flex:1,textAlign:'left',marginLeft:10,fontSize:14,}}>我的订单</span>
            <span className={styles.rowItem} style={{flex:1,textAlign:'right',marginRight:10,fontSize:12,color:'#aaa',}}>查看全部订单</span>
            <em><img className={styles.icon} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/details.png?ts=ce07756a381b2cc9_1477578160"/></em>
          </div>
          <div style={{display:'flex',height:60,backgroundColor:'#fff',paddingTop:10,fontSize:12}}>
            <div style={{flex:1,textAlign:'center',alignItems:'center',justifyContent:'center',}}>
              <div style={{height:25,}}><img style={{width:25,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/payfor.png?ts=e9d0a80021bd678d_1477538346"/></div>
              <div style={{height:25,lineHeight:2}}>待付款</div>
            </div>
            <div style={{flex:1,textAlign:'center',alignItems:'center',justifyContent:'center',}}>
              <div style={{height:25,}}><img style={{width:25,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/payfor.png?ts=e9d0a80021bd678d_1477538346"/></div>
              <div style={{height:25,lineHeight:2}}>待付款</div>
            </div>
            <div style={{flex:1,textAlign:'center',alignItems:'center',justifyContent:'center',}}>
              <div style={{height:25,}}><img style={{width:25,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/express.png?ts=e9d0a80021bd678d_1477538346"/></div>
              <div style={{height:25,lineHeight:2}}>待付款</div>
            </div>
            <div style={{flex:1,textAlign:'center',alignItems:'center',justifyContent:'center',}}>
              <div style={{height:25,}}><img style={{width:25,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/afterSales.png?ts=e9d0a80021bd678d_1477538346"/></div>
              <div style={{height:25,lineHeight:2}}>待付款</div>
            </div>


          </div>
        </div>



       <div style={{backgroundColor:'#fff',marginTop:10,}}>
          <div style={{display:'flex',alignItems:'center'}}>
             <img style={{flex:1,marginLeft:10,width:10,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/favor.png?ts=e9d0a80021bd678d_1477538346"/>
             <span style={{flex:8,textAlign:'left',marginLeft:10,fontSize:14}}>我的收藏</span>
             <span style={{flex:1}}>  </span>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
             <img style={{flex:1,marginLeft:10,width:10,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/coupons.png?ts=e9d0a80021bd678d_1477538346"/>
             <span style={{flex:8,textAlign:'left',marginLeft:10,fontSize:14}}>我的优惠券</span>
             <span style={{flex:1}}> > </span>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
             <img style={{flex:1,marginLeft:10,width:10,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/coupons.png?ts=e9d0a80021bd678d_1477538346"/>
             <span style={{flex:8,textAlign:'left',marginLeft:10,fontSize:14}}>我的钱包</span>
             <span style={{flex:1}}> > </span>
          </div>
       </div>



       <div style={{backgroundColor:'#fff',marginTop:10,}}>
          <div style={{display:'flex',alignItems:'center'}}>
             <img style={{flex:1,marginLeft:10,width:10,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/help.png?ts=e9d0a80021bd678d_1477538346"/>
             <span style={{flex:8,textAlign:'left',marginLeft:10,fontSize:14}}>客服中心</span>
             <span style={{flex:1}}> > </span>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
             <img style={{flex:1,marginLeft:10,width:10,}} src="//s.juancdn.com/jpwebapp_v1/images_v1/user/about.png?ts=e9d0a80021bd678d_1477538346"/>
             <span style={{flex:8,textAlign:'left',marginLeft:10,fontSize:14}}>关于卷皮</span>
             <span style={{flex:1}}> > </span>
          </div>
       </div>


      </div>
    );
  }
}

export default Mine;

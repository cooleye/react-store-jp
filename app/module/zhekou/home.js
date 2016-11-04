import React, {Component} from 'react'
import { Link } from 'react-router';
import styles from './home.css';//导入
import Header       from '../../component/header/header';


let Home = ({children})=>(
  <div className={styles.container}>
    <Header title="卷皮" headerStyle={{fontSize:26,fontWeight:600,color:'red'}}/>
    <div className={styles.slideMenu}>
      <ul style={{width:480}}>
          <li><Link to={`/home/cate/上新`}>上新</Link></li>
          <li><Link to={'/home/cate/女装'}>女装</Link></li>
          <li><Link to={'/home/cate/鞋包'}>鞋包</Link></li>
          <li><Link to={'/home/cate/母婴'}>母婴</Link></li>
          <li><Link to={'/home/cate/居家数码'}>居家数码</Link></li>
          <li><Link to={'/home/cate/男士'}>男士</Link></li>
          <li><Link to={'/home/cate/美妆'}>美妆</Link></li>
          <li><Link to={'/home/cate/美食'}>美食</Link></li>
      </ul>
    </div>

    {children}

  </div>
)

export default Home;

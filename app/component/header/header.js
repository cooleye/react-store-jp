import React, {Component} from 'react';
import styles from './header.css';//导入

// import fontAwesome from '../../common/font-awesome-4.7.0/css/font-awesome.min.css';//导入

/*
*   #为header 添加title属性来定义当前header的title
*   #为header 添加 headerStyle属性来修改header样式
*   headerStyle的值为一个对象，例如：headerStyle={{backgroundColor:'green',color:'red'}}
*   如何设置了headerStyle就采用headerStyle中的样式，如果未设置，就用默认的样式
*   #
*/

const iconStyle = {
  width:20,
  height:20,
  backgroundImage:'url(../../images/btn-sign.png)',
  backgroundSize:22,
  backgroundRepeat:'no-repeat',
  flex:1,
}
const titleStyle = {
  flex:8,
}

class Header extends Component{

  constructor(props){
    super(props);
  }

  _setStyle(){

    let defaultStyle = {
      color: '#000',
      backgroundColor:'#fff',
      fontSize:28,
      fontFamily:'黑体',
      fontWeight:'bold',
    };

    if(this.props.headerStyle){
      let opts = this.props.headerStyle;

      for(let k in opts){
        defaultStyle[k] = opts[k];
      }
    }

    return defaultStyle;
  }


  render() {

    return (
      <div className={styles.container} style={this._setStyle()} >
        <i style={{flex:1}}></i>
        <span style={titleStyle}>{this.props.title}</span>
        <i style={iconStyle}></i>
      </div>
    );
  }
}

export default Header;

import React, {Component} from 'react'

export default class Item extends Component{
  render(){

    return(
      <li style={{width:this.props.width}} key={this.props.id}>
        <img src={this.props.source.pic}/>
        <div style={{textAlign:'left',paddingLeft:5,display:'flex',}}><span style={{flex:4,fontSize:16,color:'red'}}>{this.props.source.price}</span><span style={{flex:1,color:'#aaa'}}>{this.props.source.time}</span></div>
        <div style={{textAlign:'left',paddingLeft:5,color:'#aaa'}}>{this.props.source.desc}</div>
      </li>
    )
  }
}

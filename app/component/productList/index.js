import React, {Component} from 'react';
import styles from './style.css';//导入
import Item from  './productItem';
import Ajax from '../../common/utils/ajax';
const SCREEN_WIDTH = document.body.clientWidth;


class ProductList extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[],
    }
  }

  getData(){
      Ajax({
          url: this.props.url,
          type: "GET",
          data: {},
          dataType: "json",
          success: function (response) {
            // console.log(JSON.parse(response));
            this.setState({
              data: JSON.parse(response).data
            });
          }.bind(this),
          fail: function (status) {
            // console.log(status);
          }.bind(this)
      });
  }

  componentDidMount(){
    this.getData();
  }


  render() {

    var commentNodes = this.state.data.map(function(comment) {
      return (
        <Item width={SCREEN_WIDTH/2} source={comment} key={comment.id}/>
      )
    });


    return (
      <div className={styles.container}>
        <ul>
          {commentNodes}
        </ul>
      </div>
    );
  }
}

export default ProductList;

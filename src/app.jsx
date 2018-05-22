

import React from 'react';
import ReactDOM from 'react-dom';


//1：子组件想父组件传递数据

class Father extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: '#aaa',
      fontSzie: '30px'
    }
  }
  render(){
    return(
      <div>Father</div>
    )
  }
}


class Child extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSzie: '50px'
    }
  }
  render(){
    return(
      <div></div>
    )
  }
}

ReactDOM.render(
  <div>
     <Father />
  </div>,
  document.getElementById("app")
)
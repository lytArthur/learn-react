

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class A extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
          <Switch> 
               <Route exact path={`${this.props.match.path}`} render={()=>{
                 return <div>当前组件是组件A本身，没有参数</div>
               }} />
                <Route path={`${this.props.match.path}/sub`} render={(route) => {
                    return <div>当前组件sub</div>
                }} />
                <Route path={`${this.props.match.path}/:id`} render={(route) => {
                    return <div>当前组件: 带参数的A本身，参数为：{route.match.params.id}</div>
                }} />
          </Switch>  
      </div>
    )
  }
}


class B extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>组件B</div>
    )
  }
}

class Wrapper extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
       <div>
         <Link to="/a">this is component A</Link>
         <br />
         <Link to="/a/123">this is component A  有参数</Link>
         <br />
         <Link to="/a/sub">this is component sub</Link>
         <br />
         <Link to="/b">this is component B</Link>
         <br />
         {this.props.children}
       </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Wrapper>
        <Route path="/a" component={A}/>
        <Route path="/b" component={B}/>
    </Wrapper>
</Router>,
document.getElementById('app')
)
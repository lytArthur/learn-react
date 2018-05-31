

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from 'react-router-dom';
import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
          {/* 只匹配第一个匹配到的 */}
          <Layout>
              <Switch>
                  <Route exact path="/" component = {Home}/>
                  <Route exact path="/product" component = {Home}/>
                  <Route exact path="/product.category" component = {Home}/>
              </Switch>
          </Layout>
      </Router>
    )
  }
}

//渲染
ReactDOM.render(
   <App />,
   document.getElementById('app')
);
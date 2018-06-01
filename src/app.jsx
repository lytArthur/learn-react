

import   React         from 'react';
import   ReactDOM      from 'react-dom';
import   { BrowserRouter as Router, Redirect, Route, Link, Switch } from 'react-router-dom';
import   Layout        from 'component/layout/index.jsx';
import   Home          from 'page/home/index.jsx';
import   Login         from 'page/login/index.jsx';



class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
          <Switch>
              <Route  path="/Login" component = {Login}/>            
              <Route  path="/" render={props => (
                  <Layout>
                      <Switch>
                          <Route exact path="/" component = {Home}/>
                          <Route exact path="/product" component = {Home}/>
                          <Route exact path="/product.category" component = {Home} />
                      </Switch>
                 </Layout>
              ) }/>            
          </Switch>
      </Router>
    )
  }
}

//渲染
ReactDOM.render(
   <App />,
   document.getElementById('app')
);
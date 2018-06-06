

import   React         from 'react';
import   ReactDOM      from 'react-dom';
import   { BrowserRouter as Router, Redirect, Route, Link, Switch } from 'react-router-dom';
import   Layout        from 'component/layout/index.jsx';
import   Home          from 'page/home/index.jsx';
import   Login         from 'page/login/index.jsx';
import   ErrorPage     from 'page/error/index.jsx';
import   UserList      from 'page/user/index.jsx';
import   ProductRouter from 'page/product/router.jsx';




class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route path="/product" component = {ProductRouter} />
                    <Route path="/product.category" component = {Home} />
                    <Route path="/user/index" component = {UserList} />
                    <Redirect exact from="/user" to="/user/index" />
                    <Route  component = {ErrorPage}/>
                </Switch>
          </Layout>
    )
    return (
      <Router>
          <Switch>
              <Route  path="/Login" component = {Login}/>            
              <Route  path="/" render={ props => LayoutRouter }/>            
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
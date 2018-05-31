import React from 'react';
import SiderNav from 'component/side-nav/index.jsx';
import NavTop from 'component/topnav/index.jsx'
import './theme.css'
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                 <NavTop />
                 <SiderNav />
                 {this.props.children}
            </div>
        )
    }
}


export default Layout
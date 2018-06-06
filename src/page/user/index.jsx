import React          from 'react';
import PageTitle      from 'component/page-title/index.jsx';
import { Link }       from 'react-router-dom';

class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="page-wrapper">
              <PageTitle title="用户列表" />
              <div className="row">
                   <div className="clo-md-12">
                      <table className="table table-striped table-bordered">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>ID</th>
                                  <th>ID</th>
                                  <th>ID</th>
                                  <th>ID</th>
                                  <th>ID</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>111</td>
                                  <td>111</td>
                                  <td>111</td>
                                  <td>111</td>
                                  <td>111</td>
                                  <td>111</td>
                              </tr>
                          </tbody>
                      </table>
                   </div>
              </div>
            </div>
        )
    }
}

export default UserList
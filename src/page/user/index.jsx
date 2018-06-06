import React          from 'react';
import PageTitle      from 'component/page-title/index.jsx';
import { Link }       from 'react-router-dom';
import　Pagination    from 'util/pagination/index.jsx';
import MUtil          from 'util/mm.jsx';
import User           from 'service/user-service.jsx';

const _mm       = new MUtil();
const _user      = new User();
class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list           : [],
            total          : 0,
            pageNum        : 1,
            firstLoading   : true
        }
    }
    componentDidMount(){
        this.LoadUserList();
    }
    LoadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
            this.setState(res, () => {
                this.setState({
                    firstLoading: false
                });
            });
        }, errMsg => {
            this.setState({
                list: []
            })
            _mm.errorTips(errMsg);
        })
    }
    //页数发生变化的时候
    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.LoadUserList();
        })
    }
    render(){
        let listBody = this.state.list.map((item, index) => {
            return (
                  <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{new Date(item.createTime).toLocaleString()}</td>
                  </tr>
            )
        })
        let listError = (
            <tr>
                <td colSpan='5' className='text-center'>
                    {this.state.firstLoading ? "正在加载...":"没有找到相应的结果"}
                </td>
            </tr>
        )
        let tableBody = this.state.list.length > 0 ? listBody : listError
        return (
            <div id="page-wrapper">
              <PageTitle title="用户列表" />
              <div className="row">
                   <div className="clo-md-12">
                      <table className="table table-striped table-bordered">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>用户名</th>
                                  <th>邮箱</th>
                                  <th>电话</th>
                                  <th>注册时间</th>
                              </tr>
                          </thead>
                          <tbody>
                              { tableBody }
                          </tbody>
                      </table>
                   </div>
              </div>
              <Pagination current = {this.state.pageNum} total = {this.state.total} onChange = {(pageNum) =>  {
                  this.onPageNumChange(pageNum)
              }} />
            </div>
        )
    }
}

export default UserList
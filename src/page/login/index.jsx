import React from 'react';
import './index.scss'
import MUtil from './../../util/mm.jsx';

const _mm = new MUtil();


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onInputChange(e) {
        let username  = e.target.name,
            inputValue = e.target.value
        this.setState({
            [username]: inputValue
        })
    }
    onSubmit() {
        _mm.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                username: this.state.username,
                password: this.state.password,
            }
        }).then((res) =>{

        },(err) => {

        });
    }
    render(){
        return (
                    <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default login-panel">
                                <div className="panel-heading">欢迎登陆 index 管理系统</div>
                                <div className="panel-body">
                                      <div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">用户名</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" 
                                            name="username"
                                            placeholder="请输入用户名"
                                            onChange={e => this.onInputChange(e)}
                                             />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">密码</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"
                                             name="password"                                            
                                             placeholder="请输入密码"
                                             onChange={e => this.onInputChange(e)}
                                              />
                                        </div>
                                        <button  className="btn btn-lg btn-primary btn-block"
                                        onClick={e => this.onSubmit(e)}
                                        >登陆</button>
                                        </div>
                                </div>
                           </div>
                    </div>
        )
    }
}

export default Login
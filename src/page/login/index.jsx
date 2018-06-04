import React    from 'react';
import './index.scss'
import MUtil    from 'util/mm.jsx';
import User     from 'service/user-service.jsx';

const _mm       = new MUtil();
const _user     = new User();


console.log(_user);

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount() {
        document.title ='登录';
    }
    onInputChange(e) {
        let inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
        console.log(this.state.username);
        console.log(this.state.password);
    }
    onInputKeyup(e) {
        if(e.keyCode ==13){
            this.onSubmit();
        }
    }
    onSubmit() {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        }
        let checkResult = _user.checkLoginInfo(loginInfo);
        if(checkResult.status){
            _user.login(loginInfo).then((res) =>{
                _mm.setStorage('userInfo',res);
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }else{
            _mm.errorTips(checkResult.msg);
        }
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
                                            onKeyUp={e=>this.onInputKeyup(e)}
                                            onChange={e => this.onInputChange(e)}
                                             />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">密码</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"
                                             name="password"                                            
                                             placeholder="请输入密码"
                                             onKeyUp={e=>this.onInputKeyup(e)}
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
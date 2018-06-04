import React from 'react'
import MUtil    from 'util/mm.jsx';
const _mm       = new MUtil();

class User{
    login(loginInfo) {
        return _mm.request({
            method: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    //推出登陆
    logout() {
        return _mm.request({
            method: 'POST',
            url: '/user/logout.do',
        });
    }
    //检查登陆接口的数据
    checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username);
        let password = $.trim(loginInfo.password);
        if(!loginInfo.username){
            return {
                status: false,
                msg: '用户名信息不能为空！'
            }
        }
        if(!loginInfo.password){
            return {
                status: false,
                msg: '密码信息不能为空！'
            }
        }      
        return {
            status: true,
            msg: '验证通过！'
        }
    }
}

export default User;
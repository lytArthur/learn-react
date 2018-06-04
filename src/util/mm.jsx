class MUtil {
    // 请求服务器
    request(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                type       : param.method   || 'get',
                url        : param.url      || '',
                dataType   : param.type     || "json",
                data       : param.data     || null,
                success    : res => {
                    // 数据成功
                    if(0 === res.status){
                        typeof resolve === 'function' && resolve(res.data || res.msg);
                    }
                    // 没登录状态, 且强制登录, 自动跳转到登录页
                    else if(res.status === 10){
                        this.doLogin();
                    }
                    // 其他状态，调用error
                    else{
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
    }
    //跳转登录
    doLogin() {
        window.location.href = './login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || '';
        let reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        let result = queryString.match(reg);
        return result? decodeURIComponent(result[2]) : null;
    }
    //错误提示
    errorTips(errMsg) {
        alert(errMsg || "出问题了哦！")
    }
    setStorage(name, data) {
        let dataType = typeof data;
        if(dataType === "object" ){
            window.localStorage.setItem(name,JSON.stringify(data))
        }
        //判断基础类型
        else if(['string','boolean','number'].indexOf(dataType) >= 0){
            window.localStorage.setItem(name,data);
        }
        else{
            alert("该类型不能用于本地存储");
        }
    }
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil  
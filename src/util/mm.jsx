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
}

export default MUtil  
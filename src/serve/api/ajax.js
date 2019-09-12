import axios from 'axios';
export default function ajax(url = '', params = {}, type = 'GET') {
    // 变量 接受最终输出的
    let promise;
    // 返回promise对象
    return new Promise((resolve, reject) => {
        // 请求类型
        if (type === 'GET') {
            //把对象转换为字符串
            let paramsStr = '';
            //遍历
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            });
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            // 拼接完整路径
            url += "?" + paramsStr;
            // 发起get请求
            promise = axios.get(url);
        } else if (type.toUpperCase === 'POST') {
            // 发起post请求
            promise = axios.post(url, params);
        }
        // 处理结果并返回
        promise.then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    });
}
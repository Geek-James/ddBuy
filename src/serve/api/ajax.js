import axios from 'axios';
export default function ajax(url = '', params = {}, type = 'GET') {
    // 1.定义变量 接受最终输出的
    let promise;
    // 2.返回promise对象
    return new Promise((resolve, reject) => {
        // 3.请求类型 转为大写
        if (type.toUpperCase() === 'GET') {
            // 4.把对象转换为字符串
            let paramsStr = '';
            // 5.遍历
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            });
            // 6.过滤字符串最后的&
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            // 7.拼接完整路径
            url += "?" + paramsStr;
            // 8.发起get请求
            promise = axios.get(url);
        } else if (type.toUpperCase() === 'POST') {
            // 9.发起post请求
            promise = axios.post(url, params);
        }
        // 10.处理结果并返回
        promise.then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    });
}
import axios from 'axios';
import cookie from 'js-cookie'
import { Message } from 'element-ui'

const Axios = axios.create({
    // 配置axios的默认URL
    baseURL: "", 
    // 配置超时时间
    timeout: 10000,
    // 响应数据的类型
    responseType: "json",
    // 允许跨域携带cookie
    withCredentials: false, 
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});



// 配置请求拦截
Axios.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    config.headers['Accept'] = "application/json, text/plain, */*"
    // const token = cookie.get('名称');
    // if(token){ config.params = {'token':token}}
    return config
}, error => {
    Message({ message: '系统出错', type: 'error', duration: 3 * 1000 })
    return Promise.reject(error)
}
);

// 配置响应拦截
Axios.interceptors.response.use(response => {
    // 在这里你可以判断后台返回数据携带的请求码
    if (response.status==200){
        return Promise.resolve(response);
    }else{
        Message({ message: response.statusText||'网络出错', type: 'error', duration: 3 * 1000 })
        return Promise.reject(error)
    }
    
}, error => {
    Message({ message: '后台出错', type: 'error', duration: 3 * 1000 })
    return Promise.reject(error)
});

/**
 * 封装方法
 * @param url
 * @param data
 * @returns { Promise }
 */
export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            Axios.get(url, {
                params: params
            })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    post(url, data = {}) {
        return new Promise((resolve, reject) => {
            Axios.post(url, data)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err)
                })
        })
    },
    put(url, data = {}) {
        return new Promise((resolve, reject) => {
            Axios.put(url, data)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err)
                })
        })
    }
}





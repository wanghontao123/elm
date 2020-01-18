import axios from 'axios'
import _ from 'loadsh'
import { loading } from '@/actions/global'  // 获取 

let cancelToken = axios.CancelToken
const cancel = []

const removePending = config => {
    for (let p in cancel) {
        if (cancel[p].u === config.url) {
            cancel[p].f()
        }
    }
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
    //在一个ajax发送前执行一下取消操作
    removePending(config)
    config.cancelToken = new cancelToken(c => {
        cancel.push({
            f: c,
            u: config.url,
        })
    })
    window.store.dispatch(loading(true))  // 加载的时候
    return config
}, error => {
    return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
    window.store.dispatch(loading(false)) // 加载完毕的时候
    return response
}, error => {
    switch (_.get(error, 'response.status', '')) {
        case 504:
            console.log('您已经断网了....')
            break;

        default:
            break;
    }
    return Promise.reject(error)
})

export function requestPost(url, action = {}) {

    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            baseURL: '/api',
            url,
            data: action,
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export function requestGet(url, action = {}) {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: '/api',
            url,
            params: action,
        })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

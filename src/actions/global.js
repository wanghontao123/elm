import { ASYNC_STATUS } from '@/constants/actionTypes'

// 判断 axios 的请求
export const loading = options => {
    return {
        type: ASYNC_STATUS,
        payload: options
    }
}

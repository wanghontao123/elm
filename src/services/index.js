import api from './api'
import { requestPost, requestGet } from '@/utils/request'
// 张慧敏 api
export const seach = options => requestGet(api.search, options)
export const homeSearch = options => requestGet(api.homeSearch, options)
export const userInfos = options => requestGet(api.userInfo, options)
// 李晓超 api
export const login = options => requestPost(api.login, options)
export const captchas = options => requestPost(api.captchas, options)  // 验证码
export const signout = () => requestGet(api.signout)  // 退出

// 王红涛 api

// 崔亚俊 api
export const carousel_list = () => requestGet(api.carousel_list)
export const shop_list = options => requestGet(api.shop_list, options)
export const shop_info = options => requestGet(`/shopping/restaurant/${options}`)
export const shop_food = options => requestGet(`/shopping/getcategory/${options}`)
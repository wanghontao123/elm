import api from './api'
import { requestPost, requestGet } from '@/utils/request'
// 张慧敏 api
export const seach = options => requestGet(api.search, options)
export const homeSearch = options => requestGet(api.homeSearch, options)
export const userInfos = options => requestGet(api.userInfo, options)
// 李晓超 api
export const login = options => requestPost(api.login, options)
export const changepassword = options => requestPost(api.changepassword, options)
export const captchas = options => requestPost(api.captchas, options)  // 验证码
export const signout = () => requestGet(api.signout)  // 退出
export const addAddresses = (user, options) => requestPost(`/v1/users/${user}/addresses`, options)  // 增加收货地址
export const addressesList = (user) => requestGet(`/v1/users/${user}/addresses`)  // 收货列表


// 王红涛 api

// 崔亚俊 api
export const carousel_list = () => requestGet(api.carousel_list)
export const shop_list = options => requestGet(api.shop_list, options)
export const shop_info = options => requestGet(api.shop_info(options))
export const shop_food = options => requestGet(api.shop_food(options))
export const shop_sort = options => requestGet(api.shop_sort, options)
export const assess_tags = options => requestGet(api.assess_tags(options))
export const assess_scores = options => requestGet(api.assess_scores(options))
export const food_sort = options => requestGet(api.food_sort, options)
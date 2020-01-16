import api from './api'
import { requestPost, requestGet } from '@/utils/request'
// 张慧敏 api

// 李晓超 api

// 王红涛 api

// 崔亚俊 api
export const carousel_list = () => requestGet(api.carousel_list)
export const shop_list = options => requestGet(api.shop_list, options)
export const seach = options => requestGet(api.search, options)
export const shop_info = options => requestGet(`/shopping/restaurant/${options}`)
export const shop_food = options => requestGet(`/shopping/getcategory/${options}`)
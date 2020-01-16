import { createActions } from 'redux-actions'
import { carousel_list, shop_list, shop_info, shop_food } from '@/services'
import { CAROUSEL_LIST, SHOP_LIST, SHOP_INFO, SHOP_FOOD } from "@/constants/actionTypes";

export const shoplist = createActions({
    [CAROUSEL_LIST]: () => carousel_list(),
    [SHOP_LIST]: options => shop_list(options),
    [SHOP_INFO]: options => shop_info(options),
    [SHOP_FOOD]: options => shop_food(options)
})
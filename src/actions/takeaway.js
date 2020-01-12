import { createActions } from 'redux-actions'
import { carousel_list, shop_list } from '@/services'
import { CAROUSEL_LIST, SHOP_LIST } from "@/constants/actionTypes";

export const shoplist = createActions({
    [CAROUSEL_LIST]: () => carousel_list(),
    [SHOP_LIST]: options => shop_list(options)
})
import { createActions } from 'redux-actions'
import { 
    carousel_list, 
    shop_list, 
    shop_info, 
    shop_food, 
    shop_sort, 
    assess_tags, 
    assess_scores,
    food_sort,
} from '@/services'
import { 
    CAROUSEL_LIST, 
    SHOP_LIST, 
    SHOP_INFO, 
    SHOP_FOOD, 
    SHOP_SORT, 
    ASSESS_TAGS, 
    ASSESS_SCORES,
    FOOD_SORT,
} from "@/constants/actionTypes";

export const shoplist = createActions({
    [CAROUSEL_LIST]: () => carousel_list(),
    [SHOP_LIST]: options => shop_list(options),
    [SHOP_INFO]: options => shop_info(options),
    [SHOP_FOOD]: options => shop_food(options),
    [SHOP_SORT]: options => shop_sort(options),
    [ASSESS_TAGS]: options => assess_tags(options),
    [ASSESS_SCORES]: options => assess_scores(options),
    [FOOD_SORT]: options => food_sort(options),
})
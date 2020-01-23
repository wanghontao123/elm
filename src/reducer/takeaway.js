import { handleActions } from 'redux-actions'
import { 
    CAROUSEL_LIST, 
    SHOP_LIST, 
    SHOP_INFO, 
    SHOP_FOOD, 
    SHOP_SORT, 
    ASSESS_TAGS, 
    ASSESS_SCORES, 
    FOOD_SORT 
} from '@/constants/actionTypes';
import _ from 'lodash'

const shopState = {
    carList: [],
    shpList: [],
    shpInfo: {},
    shpFood: {},
    shpSort: [],
    assessTags: [],
    assessScores: {},
    fodSort: [],
}

export default handleActions({
    [CAROUSEL_LIST]: (state, action) => ({ ...state, carList: _.get(action, 'payload', []) }),
    [SHOP_LIST]: (state, action) => ({ ...state, shpList: _.get(action, 'payload', []) }),
    [SHOP_INFO]: (state, action) => ({ ...state, shpInfo: _.get(action, 'payload', {}) }),
    [SHOP_FOOD]: (state, action) => ({ ...state, shpFood: _.get(action, 'payload', {}) }),
    [SHOP_SORT]: (state, action) => ({ ...state, shpSort: _.get(action, 'payload', {}) }),
    [ASSESS_TAGS]: (state, action) => ({ ...state, assessTags: _.get(action, 'payload', []) }),
    [ASSESS_SCORES]: (state, action) => ({ ...state, assessScores: _.get(action, 'payload', {}) }),
    [FOOD_SORT]: (state, action) => ({ ...state, fodSort: _.get(action, 'payload', []) }),
}, shopState)
import { handleActions } from 'redux-actions'
import { CAROUSEL_LIST, SHOP_LIST, SHOP_INFO } from '@/constants/actionTypes';
import _ from 'lodash'

const shopState = {
    carList: [],
    shpList: [],
    shpInfo: {}
}

export default handleActions({
    [CAROUSEL_LIST]: (state, action) => ({ ...state, carList: _.get(action, 'payload', []) }),
    [SHOP_LIST]: (state, action) => ({ ...state, shpList: _.get(action, 'payload', []) }),
    [SHOP_INFO]: (state, action) => ({ ...state, shpInfo: _.get(action, 'payload', [])})
}, shopState)
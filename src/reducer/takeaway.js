import { handleActions } from 'redux-actions'
import { CAROUSEL_LIST, SHOP_LIST } from '@/constants/actionTypes';
import _ from 'lodash'

const shopState = {
    carList: [],
    shpList: []
}

export default handleActions({
    [CAROUSEL_LIST]: (state, action) => ({ ...state, carList: _.get(action, 'payload', []) }),
    [SHOP_LIST]: (state, action) => ({ ...state, shpList: _.get(action, 'payload', []) })
}, shopState)
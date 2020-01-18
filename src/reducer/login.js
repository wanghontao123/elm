import { handleActions } from 'redux-actions'
import { LOGIN_POST, CAPTCHAS_POST, } from '@/constants/actionTypes';
import _ from 'lodash'

const loginState = {
    loginData: [],
    captchasData: [],
}

export default handleActions({
    [LOGIN_POST]: (state, action) => ({ ...state, loginData: _.get(action, 'payload.data', []) }),
    [CAPTCHAS_POST]: (state, action) => ({ ...state, captchasData: _.get(action.payload, 'data.code', []) }), // 验证码

}, loginState)
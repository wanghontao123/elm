import { createActions } from 'redux-actions'
import { login, captchas, } from '@/services'
import { LOGIN_POST, CAPTCHAS_POST, } from '@/constants/actionTypes'

export const loginFn = createActions({
    [LOGIN_POST]: options => login(options),
    [CAPTCHAS_POST]: options => captchas(options),  // 验证码
})
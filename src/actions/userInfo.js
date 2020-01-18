import { userInfos } from '@/services'
import { USER_INFO } from '@/constants/actionTypes'

export function userInfo (options) {
    return{
        type: USER_INFO,
        payload: userInfos(options)
    }
}
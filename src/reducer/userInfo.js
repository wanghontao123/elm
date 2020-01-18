import { USER_INFO, } from '@/constants/actionTypes'

const userState = {
    userInfo: [],
}

export default function seachCity(state = userState, action) {
    switch (action.type) {
        // 触发改变
        case USER_INFO:
            return { ...state, userInfo: action.payload }
        default:
            return state
    }
}
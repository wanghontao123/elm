import { SEACH_CITY, } from '@/constants/actionTypes'

const seachState = {
    seachData: [],  // 控制loading效果
}

export default function seachCity(state = seachState, action) {
    switch (action.type) {
        // 触发改变
        case SEACH_CITY:
            return { ...state, seachData: action.payload }
        default:
            return state
    }
}
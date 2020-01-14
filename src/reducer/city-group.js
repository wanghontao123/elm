import { CITY_GROUP, } from '@/constants/actionTypes'

const cityState = {
    cityGroup: [],  // 控制loading效果
}

export default function global(state = cityState, action) {
    switch (action.type) {
        // 触发改变
        case CITY_GROUP:
            return { ...state, ...{ cityGroup: action.payload.data } }
        default:
            return state
    }
}


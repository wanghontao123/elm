import { CITY_HOT } from '@/constants/actionTypes'

const cityState = {
    cityHot: [],  // 控制loading效果
}

export default function global(state = cityState, action) {
    switch (action.type) {
        // 触发改变
        case CITY_HOT:
            return { ...state, ...{ cityHot: action.payload } }
        default:
            return state
    }
}


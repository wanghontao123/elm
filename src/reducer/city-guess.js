import { CITY_LIST, } from '@/constants/actionTypes'

const cityState = {
    cityList: [],  // 控制loading效果
}

export default function global(state = cityState, action) {
    switch (action.type) {
        // 触发改变
        case CITY_LIST:
            return { ...state, ...{ cityList: action.payload } }
        default:
            return state
    }
}


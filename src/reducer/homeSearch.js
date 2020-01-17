import { HOME_SEARCH } from '@/constants/actionTypes'

const homeSeachState = {
    homeSearch: [],  // 控制loading效果
}

export default function global(state = homeSeachState, action) {
    switch (action.type) {
        // 触发改变
        case HOME_SEARCH:
            return { ...state, homeSearch: action.payload }
        default:
            return state
    }
}
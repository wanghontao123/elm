import { SEARCH_TITLE, } from '@/constants/actionTypes'

const initState = {
    searchTable: [],  // 控制loading效果
}

export default function search(state = initState, action) {
    switch (action.type) {
        // 触发改变
        case SEARCH_TITLE:
            return { ...state, ...{ searchTable: action.payload } }
        default:
            return state
    }
}


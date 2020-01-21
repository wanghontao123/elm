import { SEARCH_TITLE, SEARCH_HISOTY, SEARCH_CITY_GET, } from '@/constants/actionTypes'

const initState = {
    searchTable: [],  // 控制loading效果
    searchHistory: [], //历史记录
    searchCity: [], // 搜索城市地址
}

const arr = []
function history(item) {
    if(item != '') {
        arr.push(item)
    } else {
        arr.length = 0
    }
    return arr
}



export default function search(state = initState, action) {
    switch (action.type) {
        // 触发改变
        case SEARCH_TITLE:
            return { ...state, ...{ searchTable: action.payload } }

        case SEARCH_HISOTY:
            return { ...state,searchHistory: history(action.payload) }

        case SEARCH_CITY_GET:
            return { ...state, ...{ searchCity: action.payload } }

        default:
            return state
    }
}


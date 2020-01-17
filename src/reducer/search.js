import { SEARCH_TITLE, SEARCH_HISOTY} from '@/constants/actionTypes'

const initState = {
    searchTable: [],  // 控制loading效果
    searchHistory: [] //历史记录
}

const arr = []
function history(item) {
    
    if(item != '') {
        arr.push(item)
        return arr
    } else {
        return []
    }
    


}



export default function search(state = initState, action) {
    switch (action.type) {
        // 触发改变
        case SEARCH_TITLE:
            return { ...state, ...{ searchTable: action.payload } }
        case SEARCH_HISOTY:
            return { ...state,searchHistory: history(action.payload) }
        default:
            return state
    }
}


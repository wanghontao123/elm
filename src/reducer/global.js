import { ASYNC_STATUS } from '@/constants/actionTypes'

const globalState = {
    loading: false,  // 控制loading效果
}

export default function global(state = globalState, action) {
    switch (action.type) {
         // 触发改变
         case ASYNC_STATUS:
            return { ...state, ...{ loading: action.payload } }  
    
        default:
            return state
    }
}


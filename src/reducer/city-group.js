import { CITY_GROUP, } from '@/constants/actionTypes'

const cityState = {
    cityGroup: [],  // 控制loading效果
}
let sort = cityGroup => {
    const ordered = {}
    Object.keys(cityGroup).sort().forEach(function (key) {
        ordered[key] = cityGroup[key]
    })
    return ordered
}

export default function global(state = cityState, action) {
    switch (action.type) {
        // 触发改变
        case CITY_GROUP:
            return { ...state, ...{ cityGroup: sort(action.payload) } }
        default:
            return state
    }
}
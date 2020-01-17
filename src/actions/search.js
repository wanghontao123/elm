import { requestGet } from '@/utils/request'
import { SEARCH_TITLE, SEARCH_HISOTY } from '@/constants/actionTypes'

export function searchTitle (items) {
    return {
        type: SEARCH_TITLE,
        payload: requestGet(`/v4/restaurants?${items}`)
    }
}

export function searchHistory (items) {
    return {
        type: SEARCH_HISOTY,
        payload: items
    }
}

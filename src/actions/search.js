import { requestGet } from '@/utils/request'
import { SEARCH_TITLE } from '@/constants/actionTypes'

export function searchTitle (items) {
    return{
        type: SEARCH_TITLE,
        payload: requestGet(`/v4/restaurants?${items}`)
    }
}

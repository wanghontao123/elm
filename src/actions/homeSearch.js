import { homeSearch } from '@/services'
import { HOME_SEARCH } from '@/constants/actionTypes'

export function homeSearchs (options) {
    return{
        type: HOME_SEARCH,
        payload: homeSearch(options)
    }
}
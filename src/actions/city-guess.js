import { requestGet } from '@/utils/request'
import { CITY_LIST } from '@/constants/actionTypes'

export function cityGuess (options) {
    return{
        type: CITY_LIST,
        payload: requestGet(`/api/v1/cities?${options}` )
    }
}
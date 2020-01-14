import { requestGet } from '@/utils/request'
import { CITY_HOT } from '@/constants/actionTypes'

export function cityHots (options) {
    return{
        type: CITY_HOT,
        payload: requestGet(`/v1/cities?${options}` )
    }
}
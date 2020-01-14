import { requestGet } from '@/utils/request'
import { CITY_HOT } from '@/constants/actionTypes'

export function cityHots (options) {
    return{
        type: CITY_HOT,
        payload: requestGet(`/api/v1/cities?${options}` )
    }
}
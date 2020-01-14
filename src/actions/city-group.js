import { requestGet } from '@/utils/request'
import { CITY_GROUP } from '@/constants/actionTypes'

export function cityGroups (options) {
    return{
        type: CITY_GROUP,
        payload: requestGet(`/api/v1/cities?${options}` )
    }
}
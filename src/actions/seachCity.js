import { seach } from '@/services'
import { SEACH_CITY } from '@/constants/actionTypes'

export function seachCity (options) {
    return{
        type: SEACH_CITY,
        payload: seach(options)
    }
}
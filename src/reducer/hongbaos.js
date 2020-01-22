import { handleActions } from 'redux-actions'
import { HOMGBAOS_USABLE, HOMGBAOS_PAST, HOMGBAOS_EXCHANGE } from '@/constants/actionTypes';

const hongbaoState = {
    hongbaosData: [],
    hongbaosPast: [],
    hongbaosExchange: [],
}

export default handleActions({
    [HOMGBAOS_USABLE]: (state, action) => ({ ...state, hongbaosData: action.payload }),
    [HOMGBAOS_PAST]: (state, action) => ({ ...state, hongbaosPast: action.payload }),
    [HOMGBAOS_EXCHANGE]: (state, action) => ({ ...state, hongbaosExchange: action.payload }),

}, hongbaoState)
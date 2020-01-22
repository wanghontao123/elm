import { createActions } from 'redux-actions'
import { hongbaos, pasthongbaos, exchangehongbaos } from '@/services'
import { HOMGBAOS_USABLE, HOMGBAOS_PAST, HOMGBAOS_EXCHANGE } from '@/constants/actionTypes';

export const hbFn = createActions({
    [HOMGBAOS_USABLE]: (opt, opt2) => hongbaos(opt, opt2), // 可用红包
    [HOMGBAOS_PAST]: (opt, opt2) => pasthongbaos(opt, opt2), // 过期红包
    [HOMGBAOS_EXCHANGE]: (opt, opt2) => exchangehongbaos(opt, opt2), // 兑换红包
})
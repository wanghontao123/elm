import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'loadsh'
import { Header_Top, } from '@@'
import { hump } from '@/utils/string'
import { hbFn } from '@/actions/hongbaos'
import { HOMGBAOS_PAST, } from '@/constants/actionTypes'
import './home_hb_past.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
    hongbaosPast: state.hongbaos.hongbaosPast, // 过期红包
}), {
    hongbaosPastGet: hbFn[hump(HOMGBAOS_PAST)]
})
class extends Component {

    componentDidMount() {
        const { loginData: { user_id }, hongbaosPastGet } = this.props
        // 获取可用红包
        hongbaosPastGet(user_id, {
            limit: 20,
            offset: 0,
        })
    }

    render() {
        const hongbaosPast = _.get(this.props, 'hongbaosPast', [])  // 过期红包
        return (
            <div className="home_hb_past">
                <Header_Top
                    title="历史红包"
                />

                <div className='home_hb_past_content'>
                    {
                        hongbaosPast.map((v, k) => {
                            return (
                                <div className='home_hb_past_content_lists' key={k}>
                                    <div className='home_hb_past_content_lists_rep'></div>
                                    <div className='home_hb_past_content_lists_top'>
                                        <div>
                                            <p>￥ <span>{v.amount} </span> </p>
                                            <p>{v.description_map.sum_condition}</p>
                                        </div>
                                        <div>
                                            <p>{v.name}</p>
                                            <p>
                                                {v.description_map.validity_periods}
                                            </p>
                                            <p>
                                                {v.description_map.phone}
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        v.limit_map &&
                                        <div className='home_hb_past_content_lists_bot'>
                                            <p>{v.limit_map.restaurant_flavor_ids}</p>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}


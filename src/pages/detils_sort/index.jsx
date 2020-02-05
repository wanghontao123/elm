import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { shoplist } from "@/actions/takeaway"
import { SHOP_SORT, FOOD_SORT } from '@/constants/actionTypes'

import { Good_view } from '@@'

import { Icon } from 'antd'

import { hump } from '@/utils/string'

import './style.less'

export default @connect(state => {
    return {
        shpSort: state.takeaway.shpSort,
        fodSort: state.takeaway.fodSort,
    }
}, {
    shopsSort: shoplist[hump(SHOP_SORT)],
    foodsSort: shoplist[hump(FOOD_SORT)]
})
class extends PureComponent {
    componentDidMount() {
        const { shopsSort, foodsSort } = this.props
        // console.log(this.props.location.state.id)
        shopsSort()
        foodsSort({
            latitude: 39.93526,
            longitude: 116.42243,
            offset: 0,
            limit: 20,
            'extras[]': 'activities',
            keyword: '',
            restaurant_category_id: '',
            'restaurant_category_ids[]': 265,
            order_by: null,
            'delivery_mode[]': null
        })
    }
    // 返回上一级
    toBack = () => {
        this.props.history.go(-1)
    }
    // 跳 详情
    toInfo = id => {
        this.props.history.push(`/info/detils_list/${id}`)
    }
    render() {
        // console.log(this.props)
        const { toBack, toInfo, props: { shpSort, fodSort, location: { state: { title } } } } = this
        const goodlist = []
        fodSort.length > 0 && fodSort.map((res, key) => {
            // console.log(res)
            goodlist[key] = {
                id: res.id,
                name: res.name,
                image_path: res.image_path,
                supports: res.supports,
                rating: res.rating,
                recent_order_num: res.recent_order_num,
                float_minimum_order_amount: res.float_minimum_order_amount,
                float_delivery_fee: res.float_delivery_fee,
                distance: res.distance,
                order_lead_time: res.order_lead_time,
                delivery_mode: res.delivery_mode || { color: "57A9FF", id: 1, is_solid: true, text: "蜂鸟专送" },
            }
        })
        // console.log(goodlist)
        return (
            <div className="details_sort">
                <div className="sort_header">
                    <div className="back">
                        <Icon type="left" onClick={toBack} />
                    </div>
                    <span>{title}</span>
                </div>
                <div className="sort_action">
                    <div className="sort_action_title sort_action_active">分类</div>
                    <div className="sort_action_sort sort_action_active">排序</div>
                    <div className="sort_action_filter sort_action_active">筛选</div>
                </div>
                <div className="sort_section">
                    {
                        goodlist.map((res, key) => (
                            <Good_view {...res}
                                key={key}
                                toInfo={toInfo}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
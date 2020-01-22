import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { shoplist } from "@/actions/takeaway"
import { SHOP_SORT } from '@/constants/actionTypes'

import { Good_view } from '@@'

import { Icon } from 'antd'

import { hump } from '@/utils/string'

import './style.less'

export default @connect(state => {
    return {
        shpSort: state.takeaway.shpSort,
    }
}, {
    shopsSort: shoplist[hump(SHOP_SORT)],
})
class extends PureComponent {
    componentDidMount() {
        const { shopsSort } = this.props
        shopsSort()
    }
    toBack = () => {
        this.props.history.go(-1)
    }
    render () {
        // console.log(this.props)
        const { toBack, props: { location: { state: { title } } } } = this
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
            </div>
        )
    }
}
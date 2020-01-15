import React, { Component } from 'react';
import { connect } from 'react-redux'

import { shoplist } from "@/actions/takeaway"
import { hump } from '@/utils/string'
import { SHOP_INFO } from '@/constants/actionTypes'
import './style.less'


export default @connect(state => {
    console.log(state)
    return {
        shpInfo: state.takeaway.shpInfo
    }
}, {
    shopsInfo: shoplist[hump(SHOP_INFO)]
})
class extends Component {
    componentDidMount() {
        const { props: { shopsInfo, match: { params: { id } } } } = this
        shopsInfo(id)
    }
    render() {
        return (
            <div className="details_list">
                details_list
            </div>
        );
    }
}
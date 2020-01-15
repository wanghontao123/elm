import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Icon, Tabs } from 'antd'
import { shoplist } from "@/actions/takeaway"
import { hump } from '@/utils/string'
import { SHOP_INFO } from '@/constants/actionTypes'
import _ from 'lodash'
import './style.less'

const { TabPane } = Tabs

function callback(key) {
    console.log(key);
}

export default @connect(state => {
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

    toBack = () => {
        this.props.history.go(-1)
    }

    render() {
        const { props: { shpInfo }, toBack } = this
        console.log(shpInfo)
        const { image_path, name, piecewise_agent_fee, promotion_info, activities = [] } = shpInfo
        console.log(activities)
        return (
            <div className="details_list">
                {/* 返回 上一级 */}
                <div className="shop_list_header" onClick={toBack}>
                    返回
                </div>
                {/* title 区域 */}
                <div className="shop_list_title">
                    {/* 基本 信息 */}
                    <div className="shop_list_group">
                        <div className="shop_list_view">
                            <img className="image_filter" src={`//elm.cangdu.org/img/${image_path}`} alt="" />
                            <div className="shop_list_image">
                                <img src={`//elm.cangdu.org/img/${image_path}`} alt="" />
                            </div>
                            <div className="shop_list_info">
                                <div className="shop_list_text">
                                    <div className="shop_list_name">
                                        {name}
                                    </div>
                                    <div className="shop_list_delivery">
                                        <p>商家配送 / 分钟送达 / {_.get(piecewise_agent_fee, "tips", "暂无信息")}</p>
                                        <p>{promotion_info}</p>
                                    </div>
                                </div>
                                <div className="shop_list_toinfo">
                                    <Icon type="right" />
                                </div>
                            </div>
                        </div>
                        {/* 活动 区域 */}
                        {
                            activities.length > 0 && <div className="shop_list_show">
                                <span>{activities[0].icon_name}</span>
                                <span>{activities[0].description}(APP专享)</span>
                                <span>
                                    {activities.length}个活动
                                    <Icon type="right" />
                                </span>
                            </div>
                        }
                    </div>
                </div>
                <div className="shop_list_tab">
                    <div className="shop_list_tab_nav">
                        <Tabs 
                            tabBarStyle={{borderBottom: "0", flex: "1"}}
                            defaultActiveKey="1" 
                            onChange={callback}
                            animated={false}
                        >
                            <TabPane tab="商品" key="1">
                                Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="评价" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="shop_list_buy">

                </div>
            </div>
        );
    }
}
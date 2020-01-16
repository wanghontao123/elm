import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { shoplist } from "@/actions/takeaway"
import { hump } from '@/utils/string'
import { SHOP_INFO, SHOP_FOOD } from '@/constants/actionTypes'
import _ from 'lodash'
import './style.less'

export default @connect(state => {
    return {
        shpInfo: state.takeaway.shpInfo,
        shpFood: state.takeaway.shpFood
    }
}, {
    shopsInfo: shoplist[hump(SHOP_INFO)],
    shopsFood: shoplist[hump(SHOP_FOOD)]
})
class extends Component {
    componentDidMount() {
        const { props: { shopsInfo, shopsFood, match: { params: { id } } } } = this
        shopsInfo(id)
        shopsFood(id)

    }

    toBack = () => {
        this.props.history.go(-1)
    }
    
    // 封装 伪数组 转 数组方法
    toArray = nodes => {
        return Array.prototype.slice.call(nodes)
    }
    
    // 选项卡 切换
    toTab = ({ target ,target: { nodeName } }) => {
        nodeName == 'SPAN' && (() => {
            const { toArray } = this
            // 内容 元素
            let contents = document.querySelectorAll(".shop_list_tab_content")
            // 切换 元素
            let btns = target.parentNode.parentNode.children
            // 切换 逻辑 spans 获取内部 span 组成 数组
            let spans = []
            toArray(btns).map(res => {
                // 清空 span className
                res.children.item(0).className = ''
                spans.push(res.children.item(0))
            })
            // 为当前点击的 span 添加 className
            target.className = "tab_active"

            spans.map((res, key) => {
                // 清空所有 内容 元素
                toArray(contents)[key].style = 'display: none'
                if(res.className) {
                    // 使 对应的 内容元素 显示
                    toArray(contents)[key].style = 'display: flex'
                }
            })
        })()
    }

    /* tabFood = ({ target, target: { className } }) => {
        className == 'select_nav_title' && (() => {
            const { toArray } = this
            let titles = document.querySelectorAll('.select_nav_title')
            toArray(titles).map(res => {
                res.style = 'background: #f3f3f3'
                res.style = 'border-left: 0.1rem solid #f3f3f3'
            })
        })()
    } */
    

    render() {
        const { props: { shpInfo, shpFood }, toBack, toTab, tabFood } = this
        const { image_path, name, piecewise_agent_fee, promotion_info, activities = [] } = shpInfo
        const { category_list = [] } = shpFood
        // console.log(category_list)
        return (
            <div className="details_list">
                {/* 返回 上一级 */}
                <div className="shop_list_header">
                    <span onClick={toBack}>返回</span>
                </div>
                {/* title 区域 */}
                <div className="shop_list_title">
                    {/* 基本 信息 */}
                    <div className="shop_list_group">
                        <div className="shop_list_view">
                            {/* 模糊 背景 */}
                            <img className="image_filter" src={`//elm.cangdu.org/img/${image_path}`} alt="" />
                            {/* 商铺 头像 */}
                            <div className="shop_list_image">
                                <img src={`//elm.cangdu.org/img/${image_path}`} alt="" />
                            </div>
                            {/* 商铺 信息 */}
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
                {/* 选项卡 */}
                <div className="shop_list_tab">
                    {/* 选择区 */}
                    <div className="shop_list_tab_nav" onClick={toTab}>
                        <div className="btn_tab"><span className="tab_active">商品</span></div>
                        <div className="btn_tab"><span>评价</span></div>
                    </div>
                    {/* 内容区 */}
                    <div className="shop_list_tab_content content_products" style={{display: "flex"}}>
                        <div className="products_select">
                            <div className="select_nav" onClick={tabFood}>
                                {
                                    category_list.length > 1 && category_list.map((res, key) => (
                                        <div
                                            className="select_nav_title" 
                                            key={key}
                                        >{res.name}</div>
                                    ))
                                }
                            </div>
                            <div className="select_list">

                            </div>
                        </div>
                        <div className="products_buy">

                        </div>
                    </div>
                    <div className="shop_list_tab_content content_assess">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        );
    }
}
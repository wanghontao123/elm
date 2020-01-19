import React, { Component } from 'react';
// redux
import { connect } from 'react-redux'
import { shoplist } from "@/actions/takeaway"
import { SHOP_INFO, SHOP_FOOD } from '@/constants/actionTypes'
// 插件
import LazyLoad from 'react-lazyload'
// 组件
import { Icon } from 'antd'
import { Tab_nav } from '@@'
// 公共方法
import { hump } from '@/utils/string'
import _ from 'lodash'
// 样式表
import './style.less'

// 详情页
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

    toArray = nodes => {
        return Array.prototype.slice.call(nodes)
    }

    // 选项卡 切换
    toTab = ({ target, target: { nodeName } }) => {
        nodeName === 'SPAN' && (() => {
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
                if (res.className) {
                    // 使 对应的 内容元素 显示
                    toArray(contents)[key].style = 'display: flex'
                }
            })
        })()
    }

    tabFood = ({ target }) => {
        let qid = ''
        target.className === 'select_nav_title' && (() => {
            const { toArray } = this
            let titles = document.querySelectorAll('.select_nav div')
            toArray(titles).map(res => {
                res.className = 'select_nav_title'
            })
            target.className = 'select_nav_title_active'
            qid = target.id
        })()
        let will = document.querySelector(`.select_list #q${qid}`)
        if (will)
            will.scrollIntoView()
    }

    witchImg = ({ target }) => {
        target.src = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2970038114,3134509011&fm=26&gp=0.jpg'
    }

    render() {
        const { props: { shpInfo, shpFood }, toBack, toTab, tabFood, witchImg } = this
        const { image_path, name, piecewise_agent_fee, promotion_info, activities = [] } = shpInfo
        const { category_list = [] } = shpFood
        category_list.map(res => {
            res.isActive = 'select_nav_title'
        })
        category_list.length > 0 && (() => {
            category_list[0].isActive = 'select_nav_title_active'
        })()
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
                            <LazyLoad overflow>
                                <img className="image_filter" src={`//elm.cangdu.org/img/${image_path}`} alt="" />
                            </LazyLoad>
                            {/* 商铺 头像 */}
                            <div className="shop_list_image">
                                <LazyLoad overflow>
                                    <img src={`//elm.cangdu.org/img/${image_path}`} alt="" />
                                </LazyLoad>
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
                <Tab_nav
                    txt={[
                        { active: true, title: '商品', cname: 'content_products', view: 'flex' }, 
                        { active: false, title: '评价', cname: 'content_assess', view: 'none' }
                    ]}
                >
                    <div className="content_products">1</div>
                    <div className="content_assess">2</div>
                </Tab_nav>
            </div>
        );
    }
}



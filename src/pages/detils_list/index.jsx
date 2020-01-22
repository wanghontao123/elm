import React, { Component, PureComponent } from 'react';
// redux
import { connect } from 'react-redux'
import { shoplist } from "@/actions/takeaway"
import { SHOP_INFO, SHOP_FOOD, ASSESS_TAGS } from '@/constants/actionTypes'
// 插件
import LazyLoad from 'react-lazyload'
// 组件
import { Icon, Rate } from 'antd'
import { Tags } from '@@'
// 公共方法
import { hump } from '@/utils/string'
import _ from 'lodash'
// 样式表
import './style.less'

// 详情页
export default @connect(state => {
    return {
        shpInfo: state.takeaway.shpInfo,
        shpFood: state.takeaway.shpFood,
        assessTags: state.takeaway.assessTags,
    }
}, {
    shopsInfo: shoplist[hump(SHOP_INFO)],
    shopsFood: shoplist[hump(SHOP_FOOD)],
    assessTag: shoplist[hump(ASSESS_TAGS)],
})
class extends Component {
    componentDidMount() {
        const { props: { shopsInfo, shopsFood, assessTag, match: { params: { id } } } } = this
        shopsInfo(id)
        shopsFood(id)
        assessTag(id)
    }
    // 返回上一级
    toBack = () => {
        this.props.history.go(-1)
    }
    // 伪数组 转 数组
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
    // 商铺 商品 导航
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
            will.scrollIntoView({
                behavior: "smooth",
            })
    }
    // 图片 监听
    witchImg = ({ target }) => {
        target.src = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2970038114,3134509011&fm=26&gp=0.jpg'
    }
    // 跳转 商铺 详情页
    toInfo = () => {
        const { props: { match: { params: { id } } } } = this
        this.props.history.push({
            pathname: '/info/detils_info',
            state: {
                id,
            }
        })
    }
    // 商品 添加 or 商品 详情
    clickShop = () => {
        console.log('clickShop')
    }
    // 查看订单 or 去结账
    buySubmit = () => {
        console.log('buySubmit')
    }

    render() {
        /* 
            shpInfo 商铺 详情 信息
            category_list 商铺 商品 列表
            toBack 返回上一级
            toTab 选项卡切换
            witchImg 图片监听
            tabFood 索引导航
        */
        const { props: { shpInfo, shpFood, assessTags }, toBack, toTab, tabFood, witchImg, toInfo, clickShop, buySubmit } = this
        const { image_path, name, piecewise_agent_fee, promotion_info, activities = [], rating } = shpInfo
        const { category_list = [] } = shpFood

        category_list.map(res => {
            res.isActive = 'select_nav_title'
        })
        category_list.length > 0 && (() => {
            category_list[0].isActive = 'select_nav_title_active'
        })()
        // console.log(assessTags)
        // 评论区
        const assessList = []
        assessTags.map((res, key) => {
            assessList[key] = {
                id: res._id,
                title: res.name,
                num: res.count,
                isclick: JSON.stringify(res.unsatisfied),
                cname: 'tagchild'
            }
        })
        assessList[0].cname = 'tagchild_active'
        
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
                                    <Icon type="right" onClick={toInfo} />
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
                    <div className="shop_list_tab_content content_products" style={{ display: "flex" }}>
                        <div className="products_select">
                            {/* 索引 导航 */}
                            <div className="select_nav" onClick={tabFood}>
                                {
                                    category_list.length > 1 && category_list.map((res, key) => {
                                        return res.foods.length !== 0 && (() => {
                                            return <div
                                                id={res.id}
                                                className={res.isActive}
                                                key={key}
                                            >
                                                {res.name}</div>
                                        })()
                                    })
                                }
                            </div>
                            <div className="select_list">
                                {
                                    category_list.length > 1 && category_list.map((res, key) => {
                                        return res.foods.length !== 0 && (() => {
                                            return <div
                                                key={key}
                                                id={`q${res.id}`}
                                                className="select_list_region"
                                            >
                                                <div className="select_list_header">
                                                    <div className="select_list_header_title">{res.name}</div>
                                                    <div className="select_list_header_info">{res.description}</div>
                                                    <div className="select_list_header_move">· · ·</div>
                                                </div>
                                                <div className="select_list_section">
                                                    {
                                                        res.foods.length > 0 && res.foods.map((value, index) => (
                                                            <div
                                                                key={index}
                                                                className="select_list_section_good"
                                                                onClick={clickShop}
                                                            >
                                                                {/* {console.log(value)} */}
                                                                <div className="section_good_img">
                                                                    <LazyLoad overflow>
                                                                        <img src={`//elm.cangdu.org/img/${value.image_path}`} alt="" onError={witchImg} />
                                                                    </LazyLoad>
                                                                </div>
                                                                <div className="section_good_text">
                                                                    <p>
                                                                        <span className="section_good_text_title">{value.name}</span>
                                                                        {
                                                                            _.get(value.attributes, '[0].icon_name', '') === '招牌' ?
                                                                                <span className="section_good_text_label"><b>招牌</b></span>
                                                                                : null
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        <b>{value.description}</b>
                                                                    </p>
                                                                    <p>
                                                                        <span>月售{value.month_sales}份</span>
                                                                        <span>好评率{value.satisfy_rate}%</span>
                                                                    </p>
                                                                    <p>
                                                                        <span>
                                                                            {
                                                                                _.get(value.activity, 'image_text', '')
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            value.specifications.length > 0 ?
                                                                                <span> <b>￥{value.specfoods[0].price}</b> 起</span> :
                                                                                <span><b>￥{value.specfoods[0].price}</b></span>
                                                                        }
                                                                        {
                                                                            value.specifications.length > 0 ?
                                                                                <span>
                                                                                    <b style={{ borderRadius: '0.1rem' }}>选规格</b>
                                                                                </span> :
                                                                                <span>
                                                                                    <b style={{ borderRadius: '50%' }}><Icon type='plus' /></b>
                                                                                </span>
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        })()
                                    })
                                }
                            </div>
                        </div>
                        <div className="products_buy" onClick={buySubmit}>
                            <div className="buy_car">
                                <span>
                                    <Icon type="shopping-cart" />
                                </span>
                            </div>
                            <div className="buy_bill">
                                <div className="buy_view_price">
                                    <div>￥20.00</div>
                                    <div>配送费￥5</div>
                                </div>
                                {/* 4CD964 */}
                                <div className="buy_submit" style={{ background: '#535356' }}>还差20起送</div>
                            </div>
                        </div>
                    </div>
                    <div className="shop_list_tab_content content_assess">
                        <div className="assess_mack">
                            <div className="assess_header">
                                <hgroup>
                                    <div>{rating}</div>
                                    <div>综合评价</div>
                                    <div>高于周边商家76.9%</div>
                                </hgroup>
                                <hgroup>
                                    <div>
                                        <span>服务态度</span>
                                        <span>
                                            <Rate className="star-size" allowHalf defaultValue={4.5} />
                                            <b>4.7</b>
                                        </span>
                                    </div>
                                    <div>
                                        <span>菜品评价</span>
                                        <span>
                                            <Rate className="star-size" allowHalf defaultValue={4.5} />
                                            <b>4.8</b>
                                        </span>
                                    </div>
                                    <div>
                                        <span>送达时间</span>
                                        <span><em>分钟</em></span>
                                    </div>
                                </hgroup>
                            </div>
                            <div className="assess_tag">
                                <Tags
                                    list={assessList}
                                    className="tags_list"
                                />
                            </div>
                            <div className="assess_list"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
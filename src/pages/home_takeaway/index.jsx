import React, { PureComponent } from 'react'
// redux
import { connect } from 'react-redux'
import { shoplist } from "@/actions/takeaway"
import { CAROUSEL_LIST, SHOP_LIST, } from '@/constants/actionTypes'
// 插件
import LazyLoad from 'react-lazyload'
import Swiper from 'react-id-swiper'
// 组件
import Header from '@@/Header'
import { Good_view } from '@@'
// 公用方法
import { hump } from '@/utils/string'
import _ from 'lodash'
// 样式表
import './style.less'
import 'swiper/css/swiper.css'

export default @connect(state => {
    return {
        carList: state.takeaway.carList,
        shpList: state.takeaway.shpList,
    }
}, {
    carouselList: shoplist[hump(CAROUSEL_LIST)],
    shopsList: shoplist[hump(SHOP_LIST)],
})
class extends PureComponent {
    componentDidMount() {
        const { carouselList, shopsList } = this.props
        carouselList()
        shopsList({
            latitude: '31.22967',
            longitude: '121.4762'
        })
    }

    // 跳 详情
    toInfo = id => {
        this.props.history.push(`/info/detils_list/${id}`)
    }

    // 跳 分类
    toSort = lis => {
        const { props: { history: { push } } } = this
        push('/info/detils_sort', lis)
    }

    jump = evt => {
        const value = evt.target.innerHTML
        const { history } = this.props
        value === '我的' ? history.push('/home_my') : history.push('/login')
    }

    // swiper 导航
    SimpleSwiperWithParams = () => {
        const { props: { carList }, toSort } = this
        let list = _.chunk(carList, 8)
        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        }
        return (
            <Swiper {...params}>
                {
                    list.length > 0 && list.map((res, key) => (
                        <div className="swiper-list" key={key}>
                            {
                                res.map((content, index) => (
                                    <div
                                        className="swiper-content"
                                        key={index}
                                        onClick={() => toSort({
                                            id: content.id,
                                            title: content.title
                                        })}
                                    >
                                        <div className="swiper-image">
                                            <LazyLoad overflow>
                                                <img src={`https://fuss10.elemecdn.com${content.image_url}`} alt="" />
                                            </LazyLoad>
                                        </div>
                                        <div className="swiper-title">{content.title}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </Swiper>
        )
    }

    render() {
        const { props: { shpList }, toInfo, SimpleSwiperWithParams } = this
        const sera = JSON.parse(localStorage.getItem('placehHistory'))
        const rule = sera ? _.get(sera[sera.length - 1], 'address', '') : ''
        const goodlist = []
        shpList.length > 0 && shpList.map((res, key) => {
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
                delivery_mode: res.delivery_mode,
            }
        })
        return (
            <div className="home_takeaway">
                {/* 头部 */}
                <Header
                    left={'search'}
                    mid={rule}
                    right={localStorage.getItem('user_id') ? '我的' : '登录 | 注册'}
                    back={this.back}
                    jump={this.jump}
                />
                {/* 主体 */}
                <div className="takeaway-section">
                    {/* 拖拽 导航 */}
                    <div className="takeaway-banner">
                        <SimpleSwiperWithParams />
                    </div>
                    {/* 商铺 信息 */}
                    <div className="takeaway-shoplist">
                        <div className="takeaway-title">
                            附近商家
                        </div>
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
            </div>
        )
    }
}

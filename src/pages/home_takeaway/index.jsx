import React, { PureComponent } from 'react'
import { shoplist } from "@/actions/takeaway"
import { CAROUSEL_LIST, SHOP_LIST, SHOP_INFO } from '@/constants/actionTypes'
import { connect } from 'react-redux'
import Swiper from 'react-id-swiper'

import 'swiper/css/swiper.css'
import { hump } from '@/utils/string'
import { Good_view } from '@@'
import _ from 'lodash'
import './style.less'

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
    toKind = id => {
        console.log(id)
    }
    
    test = () => {
        console.log('test')
    }

    // swiper 导航
    SimpleSwiperWithParams = () => {
        const { props: { carList }, test } = this
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
                                        onClick={() => test(content.id)}
                                    >
                                        <div className="swiper-image">
                                            <img src={`https://fuss10.elemecdn.com${content.image_url}`} alt=""/>
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
        // console.log(this.props)
        const { props: { shpList }, toInfo, test, SimpleSwiperWithParams } = this
        // console.log(shpList)
        return (
            <div className="home_takeaway">
                {/* 头部 */}
                <div className="takeaway-header">
                    <div className="takeaway-search takeaway-header-box">
                        搜索
                    </div>
                    <div className="takeaway-address takeaway-header-box">
                        地址信息
                    </div>
                    <div className="takeaway-login takeaway-header-box">
                        登录|注册
                    </div>
                </div>
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
                            shpList.length > 0 && shpList.map((res, key) => (
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

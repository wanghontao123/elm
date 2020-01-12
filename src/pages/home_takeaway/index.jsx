import React, { PureComponent } from 'react'
import { shoplist } from "@/actions/takeaway"
import { CAROUSEL_LIST, SHOP_LIST } from '@/constants/actionTypes'
import { connect } from 'react-redux'
import { hump } from '@/utils/string'
import { Good_view } from '@@'
import './style.less'

@connect(state => {
    return {
        carList: state.shoplist.carList,
        shpList: state.shoplist.shpList,
    }
}, {
    carouselList: shoplist[hump(CAROUSEL_LIST)],
    shopsList: shoplist[hump(SHOP_LIST)]
})
class takeaway extends PureComponent {
    componentDidMount() {
        const { carouselList, shopsList } = this.props
        carouselList()
        shopsList({
            latitude:'31.22967',
            longitude:'121.4762'
        })
    }
    render() {
        console.log(this.props)
        const { props: { shpList } } = this
        console.log(shpList)
        return (
            <div className="home_takeaway">
                <div className="takeaway-header">
                    <div className="takeaway-search takeaway-header-box">
                        搜索
                    </div>
                    <div className="takeaway-address takeaway-header-box" onClick={() => {
                        const { shopsList } = this.props
                        shopsList({ latitude: "31.22967", longitude: "121.4762" })
                        
                    }}>
                        地址信息
                    </div>
                    <div className="takeaway-login takeaway-header-box">
                        登录|注册
                    </div>
                </div>
                <div className="takeaway-section">
                    <div className="takeaway-banner">

                    </div>
                    <div className="takeaway-shoplist">
                        <div className="takeaway-title">
                            附近商家
                        </div>
                        {
                            shpList.map((res, key) => (
                                <Good_view { ...res } 
                                    key={key}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default takeaway
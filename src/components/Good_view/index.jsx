import React, { PureComponent } from 'react'
import LazyLoad from 'react-lazyload'
import { Rate } from 'antd'
import './style.less'

export default class extends PureComponent {
    render () {
        // console.log(this.props)
        const { 
            props: { 
                id,
                image_path,
                name,
                supports,
                rating,
                recent_order_num,
                delivery_mode: {
                    text
                },
                float_minimum_order_amount,
                float_delivery_fee,
                distance,
                order_lead_time,
                toInfo = () => {}
            }
        } = this
        let star = Math.ceil(rating)
        star > rating ? star -= 0.5 : star += 0.5
        return (
            <div className="good-view" onClick={() => toInfo(id)}>
                <div className="good-pic">
                    <LazyLoad overflow>
                        <img src={`//elm.cangdu.org/img/${image_path}`} alt=""/>
                    </LazyLoad>
                </div>
                <div className="good-group">
                    <div className="good-info">
                        <div className="good-title">
                            <div className="good-effect">品牌</div>
                            <div className="good-name">{name}</div>
                        </div>
                        <div className="good-support">
                            {
                                supports.map((res, key) => (
                                    <span key={key}>{res.icon_name}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="good-info">
                        <div className="good-sales-lt">
                            <Rate className="star-size" allowHalf defaultValue={star} />
                            <div className="star-info">
                                <span>{rating} </span>
                                月售{recent_order_num}单
                            </div>
                        </div>
                        <div className="good-sales-rt">
                            <span>{text}</span>
                            <span>准时达</span>
                        </div>
                    </div>
                    <div className="good-info">
                        <div>￥{float_minimum_order_amount}起送 / 配送费约￥{float_delivery_fee}</div>
                        <div>{distance} / <span>{order_lead_time}</span></div>
                    </div>
                </div> 
            </div>
        )
    }
}
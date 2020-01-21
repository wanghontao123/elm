import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { shoplist } from "@/actions/takeaway"
import { SHOP_INFO } from '@/constants/actionTypes'
import { Icon } from 'antd'
import { hump } from '@/utils/string'
import _ from 'lodash'
import './style.less'


export default @connect(state => {
    return {
        shpInfo: state.takeaway.shpInfo
    }
}, {
    shopsInfo: shoplist[hump(SHOP_INFO)]
})
class extends PureComponent {
    componentDidMount() {
        const { props: { shopsInfo, location: { state: { id } } } } = this
        shopsInfo(id)
    }
    toBack = () => {
        this.props.history.go(-1)
    }
    // 是否展示
    showDomView = (show, node) => {
        let showDomView = document.querySelector(node)
        showDomView.style = `display: ${show}`
    }
    showImage = (url) => {
        this.showDomView('flex', '.show_license')
    }
    hideImage = () => {
        this.showDomView('none', '.show_license')
    }
    render() {
        const { props: { shpInfo }, showImage, hideImage, toBack } = this
        return (
            <div className="detils_info">
                {/* 营业 许可 证件图 */}
                <div className="show_license" onClick={hideImage}>
                    <div className="content_image">
                        <img src={`//elm.cangdu.org/img/167543e555722785.jpeg`} alt="" />
                    </div>
                </div>
                {/* 商家 详情 */}
                <div className="shop_info">
                    <div className="shop_info_header">
                        <div className="back">
                            <Icon type="left" onClick={toBack} />
                        </div>
                        <span>商家详情</span>
                    </div>
                    <div className="shop_info_section">
                        <div className="shop_info_section_doing">
                            <div className="doing_title">活动与属性</div>
                            <div className="doing_list">
                                {
                                    // 待 —— 优化
                                    (() => {
                                        const doing_list = _.concat(_.get(shpInfo, 'activities', []), _.get(shpInfo, 'supports', []))
                                        return doing_list.map((res, key) => {
                                            let icon_name_bg = '#999'
                                            switch (res.icon_name) {
                                                case "减":
                                                    icon_name_bg = '#F07373'
                                                    break;
                                                case "新":
                                                    icon_name_bg = '#70BC46'
                                                    break;
                                                case "准":
                                                    icon_name_bg = '#57A9FF'
                                                    break;
                                                default:
                                                    icon_name_bg = '#999'
                                                    break;
                                            }
                                            return <div className="doing_list_li" key={key}>
                                                <span style={{
                                                    background: icon_name_bg
                                                }}>{res.icon_name}</span>
                                                <span>{res.description}</span>
                                            </div>
                                        })
                                    })()
                                }
                            </div>
                        </div>
                        <div className="shop_info_section_control">
                            <div className="control_title">
                                <span>食品监督安全公示</span>
                                <span>企业认证详情 <Icon type="right" /> </span>
                            </div>
                            <div className="control_info">
                                <div className="control_info_status">
                                    {
                                        _.get(shpInfo, 'status', '') ?
                                            <span style={{ background: '#7ED321' }}></span> :
                                            <span style={{ background: '#FF0000' }}></span>
                                    }
                                </div>
                                <div className="control_info_text">
                                    <p>监督检查结果：{
                                        _.get(shpInfo, 'status', '') ?
                                            <span style={{ color: '#7ED321' }}>良好</span> :
                                            <span style={{ color: '#FF0000' }}>差</span>
                                    }</p>
                                    <p>检查日期：</p>
                                </div>
                            </div>
                        </div>
                        <div className="shop_info_section_info">
                            <div className="section_info_title">
                                商家信息
                            </div>
                            <ul className="section_info_list">
                                <li>
                                    <span>{_.get(shpInfo, 'name', '暂无')}</span>
                                </li>
                                <li>
                                    <span>地址： {_.get(shpInfo, 'address', '暂无')}</span>
                                </li>
                                <li>
                                    <span>营业时间： [{_.get(shpInfo, 'opening_hours[0]', '暂无')}]</span>
                                </li>
                                <li>
                                    <span>营业执照</span>
                                    <span><Icon type="right" onClick={() => showImage(_.get(shpInfo, 'license[business_license_image]', '暂无'))} /></span>
                                </li>
                                <li>
                                    <span>餐饮服务许可证</span>
                                    <span><Icon type="right" onClick={() => showImage(_.get(shpInfo, 'license[catering_service_license_image]', '暂无'))} /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


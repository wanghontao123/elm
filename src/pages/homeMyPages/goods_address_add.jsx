import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, Buttons, Inputs } from '@@'
import { addAddresses } from '@/services'
import { message } from 'antd'
import './goods_address_add.less'

export default 
@connect(state => ({}), {})
class extends Component {
    state = {
        name: '',   // 姓名
        plot: '',   // 小区(搜索)
        address: '', // 地址
        phone: '', // 手机号
        phone_t: '', // 手机号2

        name_Status: '',   // 姓名
        plot_Status: '',   // 小区(搜索)
        address_Status: '', // 地址
        phone_Status: '', // 手机号
        phone_t_Status: '', // 手机号2
    }

    componentDidMount() {
        const local = localStorage.searchCity && JSON.parse(localStorage.getItem('searchCity')).name
        this.setState({
            plot: local
        })
    }

    onChange = items => {
        this.setState({
            [items.name]: items.value,
            [items.name + '_Status']: items.status,
        })
    }

    // 点击新增地址
    add = () => {
        const {
            name, plot, address, phone, phone_t,
            name_Status, plot_Status, address_Status, phone_Status, phone_t_Status,
        } = this.state

        if (name_Status && address_Status && phone_Status ) {

            const user = localStorage.user_id
            const local = JSON.parse(localStorage.getItem('searchCity'))

            addAddresses(user, {
                address: local.name,
                address_detail: address,
                geohash: local.latitude,
                name,
                phone,
                tag: '1',
                sex: 1,
                poi_type: 0,
                phone_bk: phone_t,
                tag_type: 1,
            })
                .then(res => {
                    if(res.data.success) {
                        message.success(res.data.success)
                        this.props.history.push('/info/goods_address')
                    } else {
                        message.warning(res.data.message)
                    }
                })
        } else {
            message.warning('请填写完整')
        }

    }

    // 点击跳转
    jump = () => {
        this.props.history.push('/info/goods_address_search')
    }

    render() {
        return (
            <div className="goods_address_add">
                <Header_Top
                    title="新增地址"
                />

                <div className='goods_address_add_content'>
                    <Inputs
                        placeholder='请填写你的姓名'
                        onChange={this.onChange}
                        name='name'
                        reg='^[\u4E00-\u9FA5A-Za-z0-9_]{3,}$'
                        regtext='请填写您的姓名'
                    />

                    <div onClick={this.jump}>
                        <Inputs
                            placeholder='请输入小区/写字楼/学校等'
                            onChange={this.onChange}
                            name='plot'
                            defaultValue={this.state.plot}
                        />
                    </div>

                    <Inputs
                        placeholder='请填写详细送餐地址'
                        onChange={this.onChange}
                        name='address'
                        reg='^[\u4E00-\u9FA5A-Za-z0-9_]{3,}$'
                        regtext='送餐地址太短了, 不能识别'
                    />

                    <Inputs
                        placeholder='请填写能够联系到您的手机号'
                        onChange={this.onChange}
                        name='phone'
                        reg='^(1[3|8|7|5][0-9]{9})$'
                        regtext='请输入正确的手机号'
                    />

                    <Inputs
                        placeholder='备用联系电话(选填)'
                        onChange={this.onChange}
                        name='phone_t'
                        reg='^(1[3|8|7|5][0-9]{9})$'
                        regtext='请输入正确的手机号'
                    />

                    <Buttons
                        title='新增地址'
                        color='#4cd964'
                        onClick={this.add}
                    />
                </div>
            </div>
        );
    }
}


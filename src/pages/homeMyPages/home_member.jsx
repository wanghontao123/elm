import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import { requestGet } from '@/utils/request'
import './home_member.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {

    componentDidMount() {
        const id = localStorage.getItem('user_id')
        requestGet(`v1/user?user_id${id}`)
            .then(res => console.log(res))
    }

    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        return (
            <div className="home_member">
                <Header_Top
                    title="我的会员"
                />
                <p>为账户 <b>{username}</b> 购买会员</p>
                <div className='vip-services'>
                    <div className='vip-top'>
                        <p>会员特权</p>
                        <p></p>
                        <p>会员说明 ></p>
                    </div>
                </div>
            </div>
        )
    }
}


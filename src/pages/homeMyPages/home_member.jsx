import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import { userInfo } from '@/actions/userInfo'
import './home_member.less'

export default 
@connect(state => ({
    userInfos: state.userInfo.userInfo
}), {
    userInfo
})
class extends Component {
    componentDidMount () {
        const id = localStorage.getItem('user_id')
        this.props.userInfo({user_id: id})
    }

    render() {
        const { username } = this.props.userInfos
        console.log(this.props.userInfos)
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


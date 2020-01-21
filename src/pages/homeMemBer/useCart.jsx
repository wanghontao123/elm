import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import cs from 'classnames'
import { notification } from 'antd'
import { Header } from '@@'
import { userInfo } from '@/actions/userInfo'
import './useCart.less'

export default @connect(state => ({
    userInfos: state.userInfo.userInfo
}), {
    userInfo
})
class extends PureComponent {
    state = {
        user: '',
        pass: ''
    }
    componentDidMount() {
        const id = localStorage.getItem('user_id')
        this.props.userInfo({ user_id: id })
    }
    user = evt => {
        this.setState({
            user: evt.target.value
        })
    }
    pass = evt => {
        this.setState({
            pass: evt.target.value
        })
    }
    openNotificationWithIcon = type => {
        notification[type]({
            message: '无效的卡号',
        })
    }
    submit = () => {
        this.openNotificationWithIcon('warning')
    }
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }
    render() {
        const { username } = this.props.userInfos
        const { user, pass } = this.state
        const disabled = user.length !== 10 || pass.length !== 6 ? true : false
        return (
            <div className='usercart'>
                <Header
                    left={'left'}
                    mid={'兑换会员'}
                    right={''}
                    back={this.back}
                />
                <p>
                    成功兑换后将关联当前帐号：<span>{username}</span>
                </p>
                <div className='usercart-mid'>
                    <input
                        type="text"
                        placeholder='请输入十位卡号'
                        value={user}
                        onChange={this.user}
                    />
                    <input
                        type="password"
                        placeholder='请输入六位卡密'
                        value={pass}
                        onChange={this.pass}
                    />
                </div>
                <div className='usercart-bot'>
                    <button
                        disabled={disabled}
                        onClick={this.submit}
                        className={cs({ d1: disabled === true, d2: disabled === false })}
                    >
                        兑换
                    </button>
                    <p>——— 温馨提示 ———</p>
                    <ul>
                        <li>新兑换的会员服务，权益以「会员说明」为准。</li>
                        <li>月卡：30次减免配送费</li>
                        <li>季卡：90次减免配送费</li>
                        <li>年卡：360次减免配送费</li>
                        <li>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</li>
                    </ul>
                </div>
            </div>
        )
    }
}

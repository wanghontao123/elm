import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import { Header_Top, List, Buttons, Popup } from '@@'
import { userInfo } from '@/actions/userInfo'
import { signout } from '@/services'
import './home_info.less'

export default 
@connect(state => ({
    loginData: state.userInfo.userInfo,
}), {
    userInfo,  // 用户信息
})
class extends Component {

    componentDidMount() {
        const user_id = localStorage.getItem('user_id')
        this.props.userInfo({ user_id })
    }
    
    state = {
        status: false
    }

    // 控制显示隐藏
    popup = () => {
        this.setState({
            status: true
        })
    }

    // 关闭
    close = () => {
        this.setState({
            status: false
        })
    }

    // 退出
    exit = () => {
        signout()
            .then(res => {
                message.success(res.message)
                localStorage.removeItem('user_id')
                this.props.history.push('/home_my')
            })
    }


    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        const { status } = this.state
        return (
            <div className="home_info">
                <Header_Top
                    title="账户信息"
                />

                <div className='home_info_list'>
                    <div type='file'>
                        <List
                            title='头像'
                            rightContent='//elm.cangdu.org/img/default.jpg'
                        />
                    </div>
                    <List
                        title='用户名'
                        rightContent={username}
                        path='/info/setusername'
                    />
                    <List
                        title='收货地址'
                        path='/info/goods_address'
                    />
                    <p>
                        账号绑定
                    </p>
                    <div onClick={this.popup}>
                        <List
                            title='手机'
                            icon={{
                                icon: 'iconfont icon-shouji',
                                color: 'blue',
                            }}

                        />
                    </div>
                    <p>
                        安全设置
                    </p>
                    <List
                        title='登录密码'
                        rightContent='修改'
                    />

                    <Popup
                        text='请在手机APP中设置'
                        title='确定'
                        color='#4cd964'
                        status={status}
                        onClick={this.close}
                    />

                    <div className='home_info_button'>
                        <Buttons
                            title='退出登录'
                            color='#d8584a'
                            onClick={this.exit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


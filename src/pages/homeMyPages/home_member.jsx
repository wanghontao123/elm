import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import './home_member.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {
    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        return (
            <div className="home_member">
                <Header_Top
                    title="我的会员"
                />
                我的会员
            </div>
        );
    }
}


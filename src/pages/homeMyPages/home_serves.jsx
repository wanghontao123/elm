import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import './home_serves.less'

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
            <div className="home_serves">
               <Header_Top 
                    title="服务中心"
               />
               服务中心
            </div>
        );
    }
}


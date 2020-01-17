import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import './home_download.less'

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
            <div className="home_download">
                <Header_Top
                    title="下载"
                />

                下载
            </div>
        );
    }
}


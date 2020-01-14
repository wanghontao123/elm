import React, { Component } from 'react'
import { withRouter } from "react-router"
import Header from '@@/Header'
import './style.less'

export default @withRouter
class extends Component {
    state={
        left: 'ele.me',
        mid: '',
        right: '登录 | 注册'
    }

    back = () => {
        this.props.history.push('/info/city')
    }

    jump = () => {
        this.props.history.push('/login')
    }

    render() {
        const { left, right, mid } = this.state
        return (
            <div className="city"> 
                <Header 
                    left={left}
                    mid={mid}
                    right={right}
                    back={this.back}
                    jump={this.jump}
                />
                <div className="city-mid"></div>
            </div>
        )
    }
}
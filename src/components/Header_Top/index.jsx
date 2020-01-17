import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

export default @withRouter
class extends Component {
    fn = () => {
        window.history.back(-1)  // 点击路由 -1
    }
    render() {
        const { right, title } = this.props
        return (
            <div className="component_header">
                <p onClick={this.fn}><span className='iconfont icon-zuo'></span></p>
                <p>{title}</p>
                <p>{right}</p>
            </div>
        )
    }
}


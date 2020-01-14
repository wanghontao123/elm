import React, { Component } from 'react'
import { Icon } from 'antd'

export default class extends Component {
    render() {
        const { left, right, mid, back, jump } = this.props
        return (
            <div className="header-top">
                <p onClick={back}><Icon type={left} /></p>
                <p>{mid}</p>
                <p onClick={jump}>{right}</p>
            </div>
        )
    }
}


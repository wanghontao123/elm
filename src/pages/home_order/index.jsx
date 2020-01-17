import React, { Component } from 'react'
import Header from '@@/Header'
import './style.less'

export default class extends Component {
    back = () => {
        this.props.history.go('-1')
    }
    render() {
        return (
            <div className="order">
                <Header 
                    left={'left'}
                    mid={'我的订单'}
                    right={''}
                    back={this.back}
                />
            </div>
        )
    }
}


import React, { Component } from 'react'
import './style.less'

export default class extends Component {
    state = {
        style: {},
        status: true,
    }
    onChange = e => {
        const value = e.target.value
        const { reg } = this.props
        // 验证成功
        if (value.match(reg)) {
            this.setState({
                style: { color: 'green', border: '1px solid green'},
                status: true,
            }, () => {
                this.props.onChange({
                    name: this.props.name,
                    status: this.state.status,
                    value
                })
            })
        } else {  // 验证失败
            this.setState({
                style: { color: 'red', border: '1px solid red'},
                status: false,
            }, () => {
                this.props.onChange({
                    name: this.props.name,
                    status: this.state.status,
                    value
                })
            })
        }
    }

    render() {
        const { placeholder, regtext, defaultValue, reg, } = this.props
        const { style, status } = this.state
        return (
            <div className="component_Inputs">
                <input
                    placeholder={placeholder}
                    onChange={this.onChange}
                    style={reg ? style : null}
                    value={defaultValue}
                />
                <p>
                    {!status && regtext}
                </p>
            </div>
        )
    }
}


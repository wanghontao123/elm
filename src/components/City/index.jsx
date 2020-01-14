import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { name, click} =this.props
        return (
            <p onClick={click}>{name}</p>
        )
    }
}
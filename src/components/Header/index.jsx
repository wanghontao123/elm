import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { left, right, mid, back, jump } = this.props
        return (
            <div className="header-top">
                <p onClick={back}>{left}</p>
                <p>{mid}</p>
                <p onClick={jump}>{right}</p>
            </div>
        )
    }
}


import React, { PureComponent } from 'react'

export default class extends PureComponent {
    render() {
        const { click, v} = this.props
        return (
            <dl onClick={() => click(v)}>
                <dt>{v.name}</dt>
                <dd>{v.address}</dd>
            </dl>
        )
    }
}

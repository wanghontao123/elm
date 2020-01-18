import React, { PureComponent } from 'react'
import './styles.less'

export default
    class extends PureComponent {
    render() {
        const { title, color, onClick } = this.props
        return (
                <button
                    className='components_buttons'
                    style={{ background: color }}
                    onClick={onClick}
                >
                    {title}
                </button>
        )
    }
}
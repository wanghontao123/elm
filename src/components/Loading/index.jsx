import React, { PureComponent } from 'react'
import './styles.less';

export default class extends PureComponent {
    render() {
        const { img } = this.props
        return (
            <div className='component_Loading'>
                <img src={img} alt=''/>
            </div>
        )
    }
}
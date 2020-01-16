import React, { PureComponent } from 'react'
import './style.less'

export default class extends PureComponent {
    render () {
        const { icon, title } = this.props
        return (
            <div className="component_list" onClick={this.props.onClick}>
                <div>
                    <span 
                        className={icon.icon}
                        style={{
                            fontSize:`${icon.fontSize}`,
                            color:`${icon.color}`,
                        }}
                    ></span>
                    <span>{title}</span>
                </div>
                <div>
                    <span className='iconfont icon-you1'></span>
                </div>
            </div>
        )
    }
}
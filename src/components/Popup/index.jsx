import React, { Component } from 'react'
import { Buttons } from '@@'
import './style.less'

export default
class extends Component {
    render() {
        const { text, title, color, status } = this.props
        return (
            status ?
            <div className="component_popup">
                <div className='component_popup_icon'>
                    <span className='iconfont icon-tishishuoming'></span>
                </div>
                <div className='component_popup_text'>
                    {text}
                </div>
                <div className='component_popup_buttons'>
                    <Buttons 
                        title={title}
                        color={color}
                        onClick={this.props.onClick}
                    />
                </div>
            </div>
            : null
        )
    }
}


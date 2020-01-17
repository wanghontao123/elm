import React, { Component } from 'react'
import { Buttons } from '@@'
import './style.less'

export default
    class extends Component {
    render() {
        const {
            text, // 文字
            number,  // 数量
            unit,  // 单位  
            title,  // 按钮的文字
            color, // 按钮的背景颜色
        } = this.props
        return (
            <div className='component_cardStatus'>
                <div className='component_cardStatus_content'>
                    <div className='component_cardStatus_title'>
                        <p>当前{text}</p>
                        <p>
                            <span className='iconfont icon-tishishuoming'></span>
                            {text}说明
                        </p>
                    </div>
                    <div className='component_cardStatus_number'>
                        <span>{number}</span>{unit}
                    </div>
                    <div className='component_cardStatus_button'>
                        <Buttons
                            title={title}
                            color={color}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}


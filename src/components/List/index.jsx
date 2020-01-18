import React, { PureComponent } from 'react'
import './style.less'

export default class extends PureComponent {
    render() {
        const { icon, title, right, rightContent } = this.props
        return (
            <div className="component_list" onClick={this.props.onClick}>
                <div>
                    {
                        icon ?
                            <span
                                className={icon.icon}
                                style={{
                                    fontSize: `${icon.fontSize}`,
                                    color: `${icon.color}`,
                                }}
                            ></span>
                            : null
                    }

                    <span>{title}</span>
                </div>
                <div>
                    {/* 判断 rightContent 里面有没有 jpg , 如果有渲染图片 */}
                    {
                        rightContent && rightContent.indexOf('jpg') != -1 ?
                        <img src={rightContent} />
                        : rightContent
                    }
                    {
                        !right ?
                            <span className='iconfont icon-you1'></span>
                            : right
                    }
                </div>
            </div>
        )
    }
}
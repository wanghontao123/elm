import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

export default @withRouter
class extends PureComponent {

    // 点击跳转 path
    jump = items => {
        console.log(items);
        
        this.props.history.push(items)        
    }
    render() {
        const { icon, title, right, rightContent, path } = this.props
        return (
            <div className="component_list" onClick={() => this.jump(path)}>
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
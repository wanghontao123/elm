import React, { PureComponent } from 'react'
import cs from 'classnames'
import './style.less'

export default class extends PureComponent {
    toArray = nodes => {
        return Array.prototype.slice.call(nodes)
    }
    // 选项卡 切换
    toTab = ({ target, target: { nodeName } }) => {
        nodeName === 'SPAN' && (() => {
            const { toArray, props: { children } } = this
            console.log(children)
            // 内容 元素
            let contents = document.querySelectorAll(".shop_list_tab_content")
            // 切换 元素
            let btns = target.parentNode.parentNode.children
            // 切换 逻辑 spans 获取内部 span 组成 数组
            let spans = []
            toArray(btns).map(res => {
                // 清空 span className
                res.children.item(0).className = ''
                spans.push(res.children.item(0))
            })
            // 为当前点击的 span 添加 className
            target.className = "tab_active"

            spans.map((res, key) => {
                // 清空所有 内容 元素
                toArray(contents)[key].style = 'display: none'
                if (res.className) {
                    // 使 对应的 内容元素 显示
                    toArray(contents)[key].style = 'display: flex'
                }
            })
        })()
    }
    render() {
        const { toTab, props: {
            txt = [
                { active: true, title: 'tab1', cname: 'tab1', view: 'flex' }, 
                { active: false, title: 'tab2', cname: 'tab2', view: 'none' }
            ],
            children
        } } = this
        // console.log(children)
        return (
            <div className="shop_list_tab">
                {/* 选择区 */}
                <div className="shop_list_tab_nav" onClick={toTab}>
                    {
                        txt.map((res, key) => (
                            <div className="btn_tab" key={key}>
                                {/* active 选中的 tab */}
                                <span className={cs({ tab_active: res.active })}>{res.title}</span>
                            </div>
                        ))
                    }
                </div>
                {/* 内容区 */}
                {
                    txt.map((res, key) => (
                        // cname 每个不同的 区域 样式表
                        <div
                            className={cs({shop_list_tab_content: true, [res.cname]: true,})}
                            key={key}
                            style={{display: res.view}}
                        >
                            {
                                children.map(res => {
                                    // console.log(res)
                                })
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}
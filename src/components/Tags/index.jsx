import React, { PureComponent } from 'react'

export default class extends PureComponent {
    toArray = nodes => {
        return Array.prototype.slice.call(nodes)
    }
    toTags = ({ target }, cName) => {
        target.className === "tagchild" && (() => {
            const { toArray } = this
            let domlist = document.querySelectorAll(`.${cName} div`)
            toArray(domlist).map(res => {
                res.className = 'tagchild'
            })
            target.className = 'tagchild_active'
        })()
    }
    render() {
        const { props: { className = '', list = [] }, toTags } = this
        // console.log(list)
        return (
            <div className={className} onClick={(e) => toTags(e, className)} >
                {
                    list.length > 0 && list.map((res, key) => (
                        <div {...res} 
                            key={key}
                            className={res.cname}
                            style={{background: JSON.parse(res.isclick) && "#F5F5F5", color: JSON.parse(res.isclick) && "#AAA"}}
                        >
                            {res.title}({res.num})
                        </div>
                    ))
                }
            </div>
        )
    }
}
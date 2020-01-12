import React, { PureComponent } from 'react'
import './style.less'

export default class extends PureComponent {
    render () {
        console.log(this.props)
        const { props: { 
            image_path = "http://img4.imgtn.bdimg.com/it/u=4119460714,34676184&fm=26&gp=0.jpg",
            name,
            supports,

         } } = this
        return (
            <div className="good-view">
                <div className="good-pic">
                    <img src="http://img4.imgtn.bdimg.com/it/u=4119460714,34676184&fm=26&gp=0.jpg" alt=""/>
                </div>
                <div className="good-group">
                    <div className="good-info">
                        <div className="good-title">
                            <div className="good-effect">品牌</div>
                            <div className="good-name">{name}</div>
                        </div>
                        <div className="good-support">
                            {
                                supports.map((res, key) => (
                                    <span key={key}>{res.icon_name}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="good-info"></div>
                    <div className="good-info"></div>
                </div> 
            </div>
        )
    }
}
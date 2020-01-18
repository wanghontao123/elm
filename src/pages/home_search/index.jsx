import React, { Component } from 'react'
import _ from 'loadsh'
import { connect } from 'react-redux'
import { homeSearchs } from '@/actions/homeSearch'
import { Search, Header, } from '@@'
import './style.less'

export default @connect(state => ({
    homeSearch: state.homeSearch.homeSearch
}), {
    homeSearchs,
})
class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: '',
            searchGoods: []
        }
    }

    //搜索的value值
    change = evt => {
        this.setState({ val: evt.target.value })
    }
    //点击搜索
    btn = () => {
        const { val } = this.state
        const geohash = _.get(this.props, 'match.params.geohash', '')
        const obj = {
            keyword: val,
            geohash,
        }
        this.props.homeSearchs(obj)
        let arr = JSON.parse(localStorage.getItem('searchHistory')) || []
        arr.push(val)
        localStorage.setItem('searchHistory', JSON.stringify(arr))
    }
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }

    clear = () => {
        localStorage.removeItem('searchHistory')
        this.setState({
            val: ''
        })
    }

    render() {
        const { homeSearch } = this.props
        const { val } = this.state
        const sera = JSON.parse(localStorage.getItem('searchHistory'))
        return (
            <div className="home-search">
                <Header
                    left='left'
                    mid='搜索'
                    back={this.back}
                />
                <section>
                    <Search
                        change={this.change}
                        btn={this.btn}
                        placeholder={'请输入商家或美食名称'}
                    />
                    {
                        homeSearch.length > 0 && val ?
                            <div className='home-search-good'>
                                <p>商家</p>
                                {
                                    homeSearch.length > 0 && homeSearch.map((v, k) => (
                                        <dl key={k}>
                                            <dt><img src={`//elm.cangdu.org/img/${v.image_path}`} alt={v.name} /></dt>
                                            <dd>
                                                <p>{v.name}</p>
                                                <p>月售 {v.recent_order_num} 单</p>
                                                <p> {v.float_minimum_order_amount} 元起送/距离{v.distance}</p>
                                            </dd>
                                        </dl>
                                    ))
                                }
                            </div>
                            : ''
                    }
                    {
                        sera ?
                            <div className='history'>
                                <p>搜索历史</p>
                                <div className='text'>
                                    {
                                        sera.length > 0 && sera.map((v, k) => (
                                            <p key={k}>{v}</p>
                                        ))
                                    }
                                </div>
                                <div className='clear' onClick={this.clear}>清空搜索历史</div>
                            </div> : ''
                    }
                </section>
            </div>
        )
    }
}
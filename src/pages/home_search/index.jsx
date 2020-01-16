import React, { Component } from 'react'
import _ from 'loadsh'
import { connect } from 'react-redux'
import Header from '@@/Header'
import { seachCity } from '@/actions/seachCity'
import Search from '@@/Search'
import SearchHistory from '@@/SearchHistory'
import './style.less'

export default  @connect(state => ({
    seachData: state.seachCity.seachData
}), {
    seachCity,
})
class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: '',
            searchHistory: []
        }
    }

    //搜索的value值
    change = evt => {
        this.setState({ val: evt.target.value })
    }
    //点击搜索
    btn = () => {
        const { val } = this.state
        const obj = {
            city_id: _.get(this.props, 'match.params.id', ''),
            keyword: val,
            type: 'search'
        }
        this.props.seachCity(obj)
    }
    //点击搜索到的跳转，存localStorage
    click = item => {
        const { searchHistory } = this.state
        searchHistory.push(item)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        const geohash = item.geohash
        this.props.history.push(`/?geohash=${geohash}`)
    }
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }
    //清除历史纪录
    clear = () => {
        localStorage.removeItem('searchHistory')
    }

    render() {
        const { seachData } = this.props
        const sera = JSON.parse(localStorage.getItem('searchHistory'))
        return (
            <div className="search">
                <Header
                    left='left'
                    mid='搜索'
                    back={this.back}
                />
                <section>
                    <Search
                        change={this.change}
                        btn={this.btn}
                    />
                    {
                        seachData.length > 0 ?
                            <div className='search'>
                                {
                                    seachData.length > 0 && seachData.map((v, k) => (
                                        <SearchHistory
                                            v={v}
                                            key={k}
                                            click={this.click}
                                        />
                                    ))
                                }
                            </div> : ''
                    }
                    {
                        sera ?
                            <div className='history'>
                                <p>搜索历史</p>
                                <div className='text'>
                                    {
                                        sera.length > 0 && sera.map((v, k) => (
                                            <SearchHistory
                                                v={v}
                                                key={k}
                                                click={this.click}
                                            />
                                        ))
                                    }
                                </div>
                                <div className='clear' onClick={this.clear}>清空所有</div>
                            </div> : ''
                    }
                </section>
            </div>
        )
    }
}
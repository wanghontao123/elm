import React, { Component } from 'react'
import { Input, Button } from 'antd'
import _ from 'loadsh'
import { connect } from 'react-redux'
import Header from '@@/Header'
import { seachCity } from '@/actions/seachCity'
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

    change = evt => {
        this.setState({ val: evt.target.value })
    }

    btn = () => {
        const { val } = this.state
        const obj = {
            city_id: _.get(this.props, 'match.params.id', ''),
            keyword: val,
            type: 'search'
        }
        this.props.seachCity(obj)

    }

    click = item => {
        const { searchHistory } = this.state
        searchHistory.push(item)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        const geohash = item.geohash
        this.props.history.push(`/?geohash=${geohash}`)
    }

    back = () => {
        this.props.history.go('-1')
    }
    
    clear = () =>{
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
                    <div className="section-input">
                        <Input
                            placeholder="请输入商家或美食名称"
                            onChange={this.change}
                        />
                        <Button
                            type="primary"
                            onClick={this.btn}>
                            提交
                        </Button>
                    </div>
                    {
                        seachData.length > 0 ?
                            <div className='search'>
                                {
                                    seachData.length > 0 && seachData.map((v, k) => (
                                        <dl key={k} onClick={() => this.click(v)}>
                                            <dt>{v.name}</dt>
                                            <dd>{v.address}</dd>
                                        </dl>
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
                                            <dl key={k} onClick={() => this.click(v)}>
                                                <dt>{v.name}</dt>
                                                <dd>{v.address}</dd>
                                            </dl>
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
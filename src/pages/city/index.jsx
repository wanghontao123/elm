import React, { Component } from 'react'
import Header from '@@/Header'
import { connect } from 'react-redux'
import { cityGuess } from '@/actions/city-guess'
import { cityHots } from '@/actions/city-hot'
import { cityGroups } from '@/actions/city-group'
import City from '@@/City'
import qs from 'qs'
import './style.less'

export default @connect(state => ({
    cityList: state.cityGuess.cityList,
    cityHot: state.cityHot.cityHot,
    cityGroup: state.cityGroup.cityGroup
}), {
    cityGuess,
    cityHots,
    cityGroups
})
class extends Component {
    componentDidMount() {
        this.props.cityGroups(qs.stringify({ type: 'group' }))
        this.props.cityGuess(qs.stringify({ type: 'guess' }))
        this.props.cityHots(qs.stringify({ type: 'hot' }))
    }
    state = {
        left: 'ele.me',
        mid: '',
        right: '登录 | 注册',
        list: []
    }
    //回退
    back = () => {
        this.props.history.push('/info/city')
    }
    //跳登录页面
    jump = () => {
        this.props.history.push('/login')
    }
    //点击跳转到搜索页面附带id
    click = item => {
        this.props.history.push(`/home_search/${item}`)
    }
    //排序
    sort = cityGroup => {
        const ordered = {}
        Object.keys(cityGroup).sort().forEach(function (key) {
            ordered[key] = cityGroup[key]
        })
    }

    render() {
        const { left, right, mid, list } = this.state
        const { cityList, cityHot, cityGroup } = this.props
        return (
            <div className="city">
                <Header
                    left={left}
                    mid={mid}
                    right={right}
                    back={this.back}
                    jump={this.jump}
                />
                <div className="city-mid">
                    <div className="city-mid-top">
                        <div className='show'>
                            <p>当前城市定位</p>
                            <p>定位不准时，请在城市列表中选择</p>
                        </div>
                        <div className='current'>
                            <City
                                name={cityList.name}
                                click={() => this.click(cityList.id)}
                            />
                            <p>></p>
                        </div>
                    </div>

                    <div className="city-hot">
                        <p>热门城市</p>
                        <div className='city-hot-list'>
                            {
                                cityHot.map((v, k) => (
                                    <City
                                        name={v.name}
                                        click={() => this.click(v.id)}
                                        key={k}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="city-else">
                        {
                            Object.getOwnPropertyNames(cityGroup).map((v, k) => (
                                <div key={k}>
                                    <div className='title'>{v}</div>
                                    <div className='else-city'>
                                        {
                                            cityGroup[v] instanceof Array && cityGroup[v].map((v, k) => (
                                                <City
                                                    name={v.name}
                                                    click={() => this.click(v.id)}
                                                    key={k}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
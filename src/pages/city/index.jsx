import React, { Component } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { cityGuess } from '@/actions/city-guess'
import { cityHots } from '@/actions/city-hot'
import { cityGroups } from '@/actions/city-group'
import Header from '@@/Header'
import City from '@@/City'
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
        this.props.history.push(`/info/citySearch/${item}`)
    }

    render() {
        const { left, right, mid } = this.state
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
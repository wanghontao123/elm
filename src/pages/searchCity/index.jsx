import React, { Component } from 'react'
import _ from 'loadsh'
import { connect } from 'react-redux'
import { seachCity } from '@/actions/seachCity'
import { Search, Header, SearchData, SearchHistoryList } from '@@'
import './styles.less'

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
            placehHistory: []
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
        let arr = JSON.parse(localStorage.getItem('placehHistory')) || []
        if (arr.length === 0) {
            arr.push(item)
        } else {
            arr.map(v => {
                if (v.name !== item.name) {
                    arr.push(item)
                }
            })
        }
        localStorage.setItem('placehHistory', JSON.stringify(arr))
        const geohash = item.geohash
        this.props.history.push(`/?geohash=${geohash}`)
    }
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }
    //清除历史纪录
    clear = () => {
        localStorage.removeItem('placehHistory')
        this.setState({
            val: ''
        })
    }
    //跳转页面
    jump = () => {
        this.props.history.push('/info/city')
    }

    render() {
        const { seachData } = this.props
        const { val } = this.state
        const sera = JSON.parse(localStorage.getItem('placehHistory'))
        return (
            <div className="search-city">
                <Header
                    left='left'
                    mid='搜索'
                    back={this.back}
                    jump={this.jump}
                    right='切换城市'
                />
                <section>
                    <Search
                        change={this.change} // 可控组件
                        btn={this.btn} // 点击提交搜索
                        placeholder={'输入学校、商务楼、地址'} //placeholder提示文字
                        value={val}
                    />
                    <SearchData
                        seachData={seachData} // 搜索匹配到的数据
                        click={this.click} // 点击跳转页面是显示对应的数据
                        val={val}
                    />
                    <SearchHistoryList
                        sera={sera}  //历史纪录的数据
                        clear={this.clear} // 清除历史纪录
                        click={this.click} // 点击跳转页面是显示对应的数据
                        clearText={'清空所有'}
                    />
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'loadsh'
import qs from 'qs'
import { searchCity } from '@/actions/search'
import { Header_Top, Search } from '@@'
import './goods_address_search.less'

export default 
@connect(state => ({
    searchCityData: state.search.searchCity
}), {
    searchCity,
})
class extends Component {

    state = {
        value: '',
    }

    onChange = evt => {
        this.setState({ value: evt.target.value })
    }

    btn = () => {
        const { value } = this.state
        const { searchCity } = this.props
        const obj = qs.stringify({
            city_id: 1,
            keyword: value,
            type: 'search',
        })
        searchCity(obj)
    }

    // 点击跳转
    fn = items => {
        localStorage.setItem('searchCity',JSON.stringify(items))
        this.props.history.push('/info/goods_address_add')
    }

    render() {
        const searchCityData = _.get(this.props, 'searchCityData', []) // 搜索的城市
        const { value } = this.state
        return (
            <div className="goods_address_search">
                <Header_Top
                    title="搜索地址"
                />

                <div className='goods_address_search_content'>
                    <Search
                        placeholder='请输入小区/写字楼/学校等'
                        value={value}
                        change={this.onChange}
                        btn={this.btn}
                    />

                    <div className='goods_address_search_content_Warning '>
                        为了满足商家的送餐要求, 建议您从列表中选择地址
                    </div>

                    <div className='goods_address_search_content_lists'>
                        {
                            searchCityData.length > 0 ? searchCityData.map((v, k) => {
                                return (
                                    <div key={k} className='div_list' onClick={() => this.fn(v)}>
                                        <p>{v.name}</p>
                                        <p>{v.address}</p>
                                    </div>
                                )
                            })
                                :
                                <div className='goods_address_search_content_null'>
                                    <p>找不到地址?</p>
                                    <p>请尝试输入小区、写字楼或学校名</p>
                                    <p>详细地址 (如门牌号) 可稍后输入哦。</p>
                                </div>
                        }
                    </div>


                </div>
            </div>
        );
    }
}


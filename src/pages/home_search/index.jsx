import React, { Component } from 'react'
import _ from 'loadsh'
import Header from '@@/Header'
import Search from '@@/Search'
import './style.less'

export default class extends Component {
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
        console.log(111)
    }
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }

    render() {
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
                        placeholder={'请输入商家或美食名称'}
                    />
                </section>
            </div>
        )
    }
}
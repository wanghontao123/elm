import React, { Component } from 'react';
import './style.less'
import Header from '@@/Header'
import { Input, Button } from 'antd'

export default  class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            searchHistory: []
        }
    }
    
    getVal = e => {
        this.setState({ val: e.target.value })
    }

    btn = () => {
        const { val, searchHistory } = this.state
        searchHistory.push(val)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))

    }

    render() {
        return (
            <div className="search"> 
                <Header 
                    left='left'
                    mid='搜索'
                />
                <section>
                    <div className="section-input">
                        <Input  
                            placeholder="请输入商家或美食名称"
                            onChange={this.getVal}
                        /> 
                        <Button 
                            type="primary" 
                            onClick={this.btn}>
                                提交
                        </Button>
                    </div>
                    <div className="hide-title">
                        <p>搜索历史</p>
                        <p>清空搜索历史</p>
                    </div>
                </section>
            </div>
        );
    }
}
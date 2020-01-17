import React, { Component } from 'react';
import './style.less'
import Header from '@@/Header'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import { searchTitle } from '@/actions/search'
export default  @connect(state => {
    return { }
}, {
    searchTitle
})

class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            searchHistory: []
        }
    }
    
    getVal = evt => {
        this.setState({ txt: evt.target.value })
    }

    btn = () => {
        const { txt, searchHistory } = this.state
        searchHistory.push(txt)
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
                            value={this.state.txt}
                        /> 
                        <Button 
                            type="primary" 
                            onClick={this.btn}>
                                提交
                        </Button>
                    </div>
                    <div className="section-info">
                        
                    </div>
                    <div className="hide-title">
                        <p>搜索历史</p>
                        <p>清空搜索历史</p>
                    </div>
                </section>
            </div>
        )
    }
}
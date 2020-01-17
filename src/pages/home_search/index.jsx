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
            searchHistory: [],
            bool: false,

        }
    }
    
    getVal = evt => {
        this.setState({ txt: evt.target.value })
    }

    btn = () => {
        const { txt, searchHistory, bool } = this.state
        this.setState({
            searchHistory: [...searchHistory, txt],
            txt: '',
            bool:true
        })
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))

    }

    //清除历史记录
    clear = () => {
        this.setState({ searchHistory: [], bool: true})
    }

    render() {
        const { bool, searchHistory } = this.state
        console.log(searchHistory);
        
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
                    {
                        bool?
                            <div className="section-info">
                        
                            </div>:
                            <div className="hide-title">
                                <p>搜索历史</p>
                                {
                                    searchHistory.map((v, k) => {
                                        return (
                                            <div key={k}>{v}</div>
                                        )
                                    })
                                }
                                <p onClick={this.clear}>清空搜索历史</p>
                            </div>
                    }
                    
                    
                </section>
            </div>
        )
    }
}
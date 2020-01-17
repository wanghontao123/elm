import React, { Component } from 'react';
import './style.less'
import Header from '@@/Header'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import { searchTitle, searchHistory } from '@/actions/search'
export default  @connect(state => {
    return { history: state.search.searchHistory }
}, {
    searchTitle,
    searchHistory
})

class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            bool: true,
        }
    }
    
    getVal = evt => {
        this.setState({ txt: evt.target.value })
    }

    btn = () => {
        const { history, searchHistory, searchTitle } = this.props
        const { txt } = this.state
        //searchTitle()
        this.setState({
            txt: '',
            bool:false
        })
        searchHistory(txt)
        localStorage.setItem('searchHistory', JSON.stringify(history))

    }

    //清除历史记录
    clear = () => {
        const { searchHistory } = this.props
        searchHistory([])
        this.setState({bool: true})
    }

    render() {
        const { bool } = this.state
        const { history } = this.props
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
                                    history.map((v, k) => {
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
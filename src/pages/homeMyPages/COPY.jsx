import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, List, Buttons } from '@@'
import './home_balance.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {
    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        return (
            <div className="home_balance">
               <Header_Top 
                    title="我的余额"
               />

               <div className='home_balance_top'>
               我的余额
               </div>
            </div>
        );
    }
}


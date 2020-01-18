import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import './goods_address.less'

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
            <div className="goods_address">
               <Header_Top 
                    title="编辑地址"
               />

               <div className='goods_address_content'>
               Goods_address
               </div>
            </div>
        );
    }
}


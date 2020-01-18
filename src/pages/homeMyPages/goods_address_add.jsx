import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, Buttons } from '@@'
import './goods_address_add.less'

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
            <div className="goods_address_add">
               <Header_Top 
                    title="新增地址"
               />

               <div className='goods_address_add_content'>
                    <input placeholder='请填写你的姓名'/>

                    <Buttons 
                        title='新增地址'
                        color='#4cd964'
                    />
               </div>
            </div>
        );
    }
}


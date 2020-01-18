import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, List, } from '@@'
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
                    right='编辑'
                />

                <div className='goods_address_content'>
                    {/* 列表 */}
                    <div className='goods_address_content_lists'>
                        <p>s</p>
                        <p>2333</p>
                    </div>
                    <List
                        title='新增地址'
                        path='/info/goods_address_add'
                    />
                </div>
            </div>
        );
    }
}


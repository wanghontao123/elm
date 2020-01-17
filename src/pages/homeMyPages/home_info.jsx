import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, List, Buttons } from '@@'
import './home_info.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {
    // 退出
    exit = () => {
        console.log(1);
    }
    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        return (
            <div className="home_info">
               <Header_Top 
                    title="账户信息"
               />

               <div className='home_info_list'>
                    <List 
                        title='头像'
                        rightContent='//elm.cangdu.org/img/default.jpg'
                    />
                    <List 
                        title='用户名'
                        rightContent={username}
                    />
                    <List 
                        title='收货地址'
                    />
                    <p>
                        账号绑定
                    </p>
                    <List 
                        title='手机'
                        icon={{
                            icon:'iconfont icon-shouji',
                            color:'blue',
                        }}
                    />
                    <p>
                        安全设置
                    </p>
                    <List 
                        title='登录密码'
                        rightContent='修改'
                    />
                    
                    <div className='home_info_button'>
                        <Buttons 
                            title='退出登录'
                            color='#d8584a'
                            onClick={this.exit}
                        />
                    </div>
               </div>
            </div>
        );
    }
}


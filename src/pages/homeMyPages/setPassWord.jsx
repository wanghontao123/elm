import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd';
import { Header_Top, Buttons, Inputs } from '@@'
import { CAPTCHAS_POST, } from '@/constants/actionTypes'
import { loginFn } from '@/actions/login'
import { hump } from '@/utils/string'
import { changepassword } from '@/services'
import './setPassWord.less'

export default 
@connect(state => ({
    captchasData: state.login.captchasData
}), {
    captchas: loginFn[hump(CAPTCHAS_POST)],
})
class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            newUsername: '',
            newPassword2: '',
            cap: '',
        }
        this.captchasFn()
    }

    onChange = items => {
        this.setState({
            [items.name]: items.value,
        })
    }

    // 验证码
    captchasFn = () => {
        this.props.captchas()
    }

    // 点击登录
    onSubmit = () => {
        const { username, password, newUsername, newPassword2, cap } = this.state
        if (username !== '' && password !== '' && newUsername !== '' && newPassword2 !== '' && cap !== '') {
            changepassword({
                username,
                oldpassWord: password,
                newpassword: newUsername,
                confirmpassword: newPassword2,
                captcha_code: cap,
            })
                .then(res => {
                    if(res.data.success) {
                        message.success(res.data.success)
                        localStorage.removeItem('user_id')
                        this.props.history.push('/home_my')
                    } else {
                        message.error(res.data.message)
                    }
                })
        } else {
            message.warning('输入不能为空')
        }
    }

    render() {
        const { captchasData } = this.props


        return (
            <div className="setPassWord">
                <Header_Top
                    title="修改密码"
                />

                <div className='setPassWord_content'>
                    <div className='setPassWord_content_list'>
                        <Inputs
                            placeholder='账号'
                            onChange={this.onChange}
                            name='username'
                        />
                    </div>
                    <div className='setPassWord_content_list'>
                        <Inputs
                            placeholder='旧密码'
                            onChange={this.onChange}
                            name='password'
                        />
                    </div>
                    <div className='setPassWord_content_list'>
                        <Inputs
                            placeholder='请输入新密码'
                            onChange={this.onChange}
                            name='newUsername'
                        />
                    </div>
                    <div className='setPassWord_content_list'>
                        <Inputs
                            placeholder='请确认密码'
                            onChange={this.onChange}
                            name='newPassword2'
                        />
                    </div>
                    <div className='setPassWord_content_list'>
                        <Inputs
                            placeholder='验证码'
                            onChange={this.onChange}
                            name='cap'
                        />
                        <div className='card_cap' onClick={this.captchasFn}>
                        <img src={captchasData} alt="" />
                        <span>
                            看不清
                            <label>换一张</label>
                        </span>
                        </div>
                    </div>


                    <Buttons
                        title='确认修改'
                        color='#4cd964'
                        onClick={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}


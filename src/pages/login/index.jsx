import React from 'react'
import { connect } from 'react-redux'
import { Switch, message } from 'antd';
import { LOGIN_POST, CAPTCHAS_POST, } from '@/constants/actionTypes'
import { loginFn } from '@/actions/login'
import { hump } from '@/utils/string'
import { Header_Top, Buttons } from '@@'
import './styles.less'

export default @connect(state => {
    return {
        captchasData: state.login.captchasData
    }
}, {
    loginFn: loginFn[hump(LOGIN_POST)],
    captchas: loginFn[hump(CAPTCHAS_POST)],
})
class extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            switchStatus: false,
            type: 'password',
            username: '',
            password: '',
            captcha_code: '',
        }
        this.captchasFn()
    }

    captchasFn = () => {
        // 验证码
        this.props.captchas()
    }


    // 控制显示 文本框效果
    onChange = () => {
        const { switchStatus } = this.state
        this.setState({
            switchStatus: !switchStatus
        }, () => {
            if (switchStatus) {
                this.setState({
                    type: 'password'
                })
            } else {
                this.setState({
                    type: 'text'
                })
            }
        })

    }

    // 点击登录
    onSubmit = () => {
        const { username, password, captcha_code, } = this.state
        if (username !== '' && password !== '' && captcha_code !== '') {
            this.props.loginFn({
                username,
                password,
                captcha_code,
            })
                .then(res => {
                    // console.log(res.payload, 'res');
                    if (res.payload.data.message) {
                        message.error(res.payload.data.message)
                        this.captchasFn()    // 更新验证码图片
                    } else {
                        localStorage.user_id = res.payload.data.id
                        localStorage.token = res.payload.data._id
                        this.success()
                    }
                })
        } else {
            message.warning('输入不能为空')
        }
    }

    // 获取 username, password
    inputChange = e => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }

    success = () => {
        message
            .loading('In Confirmation...', 1.5)
            .then(() => {
                message.success('登录成功', 1.5)
                this.props.history.push('/')
            })
        // .then(() => message.info('Loading finished is finished', 2.5));
    };

    render() {
        const { switchStatus, type, username, password, captcha_code, } = this.state
        const { captchasData } = this.props
        return (
            <div className='pages_login'>
                <Header_Top
                    title="登录"
                />

                <div className='pages_login_import'>
                    <div className='pages_login_import_list'>
                        <input placeholder='账号' onChange={this.inputChange} name='username' value={username} />
                    </div>
                    <div className='pages_login_import_list'>
                        <input placeholder='密码' type={type} onChange={this.inputChange} name='password' value={password} />
                        <div>
                            <Switch defaultChecked={switchStatus} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className='pages_login_import_list'>
                        <input placeholder='验证码' onChange={this.inputChange} name='captcha_code' value={captcha_code} />
                        <div onClick={this.captchasFn}>
                            <span>
                                <img src={captchasData} alt="" />
                            </span>
                            <span className='trade'>看不清 <label>换一张</label> </span>
                        </div>
                    </div>
                </div>
                {/* 温馨提示： */}
                <div className='pages_login_hint'>
                    <p>温馨提示： 未注册过的账号，登录时将自动注册</p>
                    <p>注册过的用户可凭账号密码登录</p>
                </div>
                {/* 登录按钮 */}
                <div className='pages_login_button'>
                    <Buttons
                        title='登录'
                        color='#4cd964'
                        onClick={this.onSubmit}
                    />
                </div>

                {/* 重置密码 */}
                <div className='pages_login_res'>
                    重置密码?
                </div>


            </div>
        )
    }
}

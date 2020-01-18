import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, Buttons } from '@@'
import './setUserName.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {
    state = {
        username: '',
        text: '用户名只能修改一次 (5-24字符之间)',
        style: { color: '#ccc'},
        color: '#ccc',
    }
    change = e => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        }, () => {
            const { username } = this.state
            if (username.length < 5) {
                this.setState({
                    text: '用户名长度在5-24字符之间',
                    style: { border: '1px solid red'},
                    color: '#ccc'
                })
            } else {
                this.setState({
                    text: '内容合法',
                    style: { border: '1px solid green'},
                    color: '#3190e8'
                })
            }
        })
    }

    // 点击确定按钮
    fn = () => {
        const { text, username } = this.state
        if(text === '内容合法') {
            console.log(username);
        }
    }


    render() {
        
        const { username, text, style, color } = this.state
        return (
            <div className="setUserName">
                <Header_Top
                    title="修改用户名"
                />

                <div className='setUserName_content'>
                    <input
                        placeholder='输入用户名'
                        onChange={this.change}
                        value={username}
                        name='username'
                        style={style}
                    />
                    <p>
                        {text}
                    </p>
                    <Buttons
                        title='确认修改'
                        color={color}
                        onClick={() => this.fn()}
                    />
                </div>
            </div>
        );
    }
}


import React, { Component } from 'react'
import { requestPost } from '@/utils/request'
import { connect } from 'react-redux'
import { message } from 'antd'
import { Header_Top, List, Buttons, Popup } from '@@'
import { userInfo } from '@/actions/userInfo'
import { signout } from '@/services'
import './home_info.less'

export default 
@connect(state => ({
    loginData: state.userInfo.userInfo,
}), {
    userInfo,  // 用户信息
})
class extends Component {

    componentDidMount() {
        const user_id = localStorage.getItem('user_id')
        this.props.userInfo({ user_id })
    }

    state = {
        status: false
    }

    // 控制显示隐藏
    popup = () => {
        this.setState({
            status: true
        })
    }

    // 关闭
    close = () => {
        this.setState({
            status: false
        })
    }

    // 退出
    exit = () => {
        signout()
            .then(res => {
                message.success(res.message)
                localStorage.removeItem('user_id')
                this.props.history.push('/home_my')
            })
    }

    // 上传头像
    // onFile = () => {
    //     const filex = document.createElement('input')
    //     filex.type = 'file'
    //     filex.click()

    //     const avatar = document.querySelector('#file')
    //     console.log(avatar);

    //     // const formData = new FormData();
    //     // formData.append("avatar", avatar.files[0]);
    //     // const xhr = new XMLHttpRequest();
    //     // console.log(xhr);

    // }

    previewFile = (file) => {
        let reader
        if (file) {
            // 创建流对象
            reader = new FileReader()
            reader.readAsDataURL(file)
        }
        // 捕获 转换完毕
        reader.onload = function (e) {
            // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可
            document.querySelector('img').src = e.target.result
        }
    }
    onFile = (e) => {
        const file = document.createElement('input')
        file.type = 'file'
        file.click()
        file.addEventListener('change', (e) => {
            let files = e.target.files
            this.previewFile(files[0])
            // 上传文件 创建FormData
            let formData = new FormData()
            // upFile就是后台接收的key
            formData.append('upFile', files[0], files[0].name)
            // 将formdata发送到后台即可
            // 我用的 axios.post('url', formData)
            // console.log(formData, 'formData')
            // requestPost('/v1/addimg', {
            //     type: formData,
            // })
            //     .then(res => {
            //         console.log(res)
            //     }) 
        })
    }




    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        const { status } = this.state
        return (
            <div className="home_info">
                <Header_Top
                    title="账户信息"
                />

                <div className='home_info_list'>
                    <div type='file' onClick={this.onFile} id='file'>
                        <List
                            title='头像'
                            rightContent='//elm.cangdu.org/img/default.jpg'
                        />
                    </div>
                    <List
                        title='用户名'
                        rightContent={username}
                        path='/info/setusername'
                    />
                    <List
                        title='收货地址'
                        path='/info/goods_address'
                    />
                    <p>
                        账号绑定
                    </p>
                    <div onClick={this.popup}>
                        <List
                            title='手机'
                            icon={{
                                icon: 'iconfont icon-shouji',
                                color: 'blue',
                            }}

                        />
                    </div>
                    <p>
                        安全设置
                    </p>
                    <List
                        title='登录密码'
                        rightContent='修改'
                        path='/info/setpassword'
                    />

                    <Popup
                        text='请在手机APP中设置'
                        title='确定'
                        color='#4cd964'
                        status={status}
                        onClick={this.close}
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

